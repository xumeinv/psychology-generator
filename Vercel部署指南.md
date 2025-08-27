# 🚀 Vercel生产环境部署指南

## 🎯 目标
将您的AI心理学图文生成器部署到Vercel，获得免费、稳定的生产环境域名。

## ⏱️ 预计时间
**总时间：15-20分钟**

## 📋 部署步骤

### 第一步：注册Vercel账号

1. **访问Vercel官网**：https://vercel.com/
2. **点击"Sign Up"**
3. **选择登录方式**：
   - 推荐：使用GitHub账号登录（如果您有GitHub）
   - 或者：使用邮箱注册

### 第二步：创建新项目

1. **登录Vercel后，点击"New Project"**
2. **选择"Import Git Repository"**（如果您有GitHub）
   - 或者选择"Upload Template"
3. **项目名称**：输入 `psychology-generator`
4. **Framework Preset**：选择 `Other`

### 第三步：上传代码

#### 方法1：直接上传文件
1. 点击"Upload Files"
2. 选择您项目中的以下文件：
   - `index.html`
   - `vercel.json`
   - 其他相关文件

#### 方法2：使用GitHub（推荐）
1. 将代码上传到GitHub
2. 在Vercel中连接GitHub仓库
3. 自动部署

### 第四步：配置部署设置

1. **Build Command**：留空（不需要构建）
2. **Output Directory**：留空
3. **Install Command**：留空
4. **Root Directory**：留空

### 第五步：部署项目

1. **点击"Deploy"**
2. **等待部署完成**（通常1-2分钟）
3. **获得生产域名**（格式：`https://your-project.vercel.app`）

## 🔧 部署后配置

### 1. 更新小程序代码

部署完成后，您会得到一个域名，格式如：
```
https://psychology-generator-xxx.vercel.app
```

将这个域名更新到小程序代码中：
```javascript
// pages/index/index.js
webViewUrl: 'https://your-vercel-domain.vercel.app'
```

### 2. 配置微信小程序域名白名单

在微信公众平台添加：
- **request合法域名**: `https://your-vercel-domain.vercel.app`
- **downloadFile合法域名**: `https://your-vercel-domain.vercel.app`

## ✅ 部署完成后的验证

1. **访问您的Vercel域名**
2. **测试功能是否正常**
3. **在微信开发者工具中测试小程序**
4. **确认WebView能正常加载**

## 🌟 Vercel的优势

- **免费**：个人项目完全免费
- **稳定**：99.9%的可用性
- **快速**：全球CDN加速
- **HTTPS**：自动SSL证书
- **简单**：一键部署

## 🆘 常见问题

### Q: 部署失败怎么办？
A: 检查文件是否完整，特别是`vercel.json`和`index.html`

### Q: 域名可以自定义吗？
A: 可以，在Vercel项目设置中添加自定义域名

### Q: 如何更新代码？
A: 重新上传文件或连接GitHub自动部署

## 📞 下一步操作

1. **按照上述步骤部署到Vercel**
2. **获得生产域名后告诉我**
3. **我来帮您更新小程序代码**
4. **配置域名白名单**

## 🎉 完成后的效果

- ✅ 获得稳定的生产环境域名
- ✅ 小程序可以正常使用
- ✅ 用户扫描二维码即可使用
- ✅ 完全免费且稳定

---

**现在就开始部署吧！如果在部署过程中遇到任何问题，请告诉我具体的错误信息，我会继续协助您！** 