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

    // 调用Coze工作流
    const cozeResponse = await fetch('https://psychology-generate-180919-4-1374892393.sh.run.tcloudbase.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topic: topic.trim() })
    });

    if (!cozeResponse.ok) {
      throw new Error(`Coze API错误: ${cozeResponse.status}`);
    }

    const data = await cozeResponse.json();
    console.log('Coze响应:', data);

    // 返回结果
    res.status(200).json(data);

  } catch (error) {
    console.error('代理请求失败:', error.message);
    res.status(500).json({ 
      error: '生成失败，请重试',
      details: error.message 
    });
  }
}
