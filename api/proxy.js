// Vercel Serverless Function - API代理
export default async function handler(req, res) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理OPTIONS预检请求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 只允许POST请求
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { topic } = req.body;
    
    if (!topic || !topic.trim()) {
      return res.status(400).json({ error: '主题不能为空' });
    }

    console.log('收到生成请求:', topic);

    // 调用Coze官方API，设置超时
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 140000); // 140秒超时

    const cozeResponse = await fetch('https://api.coze.cn/v1/workflow/stream_run', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer cztei_qtNbENPDXPH2UtqjxI8uMk8MTPVyU7m7sslSOINAG0eBaz68nur4d2t88gIc8zG3j',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        workflow_id: '7540699198652694574',
        parameters: {
          input: topic.trim()
        }
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!cozeResponse.ok) {
      throw new Error(`Coze API错误: ${cozeResponse.status}`);
    }

    const data = await cozeResponse.json();
    console.log('Coze响应:', data);

    // 返回结果
    res.status(200).json(data);

  } catch (error) {
    console.error('代理请求失败:', error.message);
    
    if (error.name === 'AbortError') {
      res.status(504).json({ 
        error: '请求超时，请重试',
        details: 'Coze API响应时间过长'
      });
    } else {
      res.status(500).json({ 
        error: '生成失败，请重试',
        details: error.message 
      });
    }
  }
} 
