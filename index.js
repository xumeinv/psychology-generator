const app = getApp()

Page({
  data: {
    // ⚠️ 重要：请将下面的域名替换为您的正式生产环境域名
    // 当前域名仅用于测试，不可用于正式环境
    webViewUrl: 'https://your-production-domain.com' // 请替换为您的正式域名
  },

  onLoad() {
    console.log('页面加载完成');
    // 检查域名配置
    this.checkDomainConfig();
  },

  // 检查域名配置
  checkDomainConfig() {
    const { webViewUrl } = this.data;
    if (webViewUrl === 'https://your-production-domain.com') {
      wx.showModal({
        title: '配置提醒',
        content: '请先配置正式的生产环境域名',
        showCancel: false,
        confirmText: '知道了'
      });
    }
  },

  // WebView加载完成
  onWebViewLoad() {
    console.log('WebView加载完成');
  },

  // WebView加载失败
  onWebViewError(e) {
    console.error('WebView加载失败:', e);
    wx.showToast({
      title: '页面加载失败',
      icon: 'none'
    });
  },

  // 处理WebView中的消息
  onWebViewMessage(e) {
    console.log('收到WebView消息:', e.detail.data);
  }
}) 