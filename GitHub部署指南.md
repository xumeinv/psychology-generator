# 🚀 GitHub + Vercel 部署指南

## 🎯 目标
通过GitHub仓库部署到Vercel，获得免费、稳定的生产环境域名。

## ⏱️ 预计时间
**总时间：20-25分钟**

## 📋 详细步骤

### 第一步：创建GitHub账号（如果还没有）

1. 访问：https://github.com
2. 点击"Sign up"
3. 填写用户名、邮箱、密码
4. 验证邮箱

### 第二步：创建GitHub仓库

1. **登录GitHub后，点击右上角"+"号**
2. **选择"New repository"**
3. **填写仓库信息**：
   - Repository name: `psychology-generator`
   - Description: `AI心理学图文生成器`
   - Public（公开）
   - 不要勾选"Add a README file"
   - 不要勾选"Add .gitignore"
4. **点击"Create repository"**

### 第三步：上传代码到GitHub

#### 方法1：使用GitHub Desktop（推荐）

1. **下载安装GitHub Desktop**：https://desktop.github.com/
2. **登录GitHub账号**
3. **克隆仓库**：
   - 点击"Clone a repository from the Internet"
   - 选择刚创建的`psychology-generator`仓库
   - 选择本地保存路径
4. **复制项目文件**：
   - 将您的项目文件复制到克隆的文件夹中
   - 确保包含：`index.html`、`vercel.json`等
5. **提交代码**：
   - 在GitHub Desktop中看到文件变更
   - 填写提交信息：`Initial commit`
   - 点击"Commit to main"
   - 点击"Push origin"

#### 方法2：直接在GitHub网页上传

1. 在GitHub仓库页面，点击"uploading an existing file"
2. 拖拽或选择您的项目文件
3. 填写提交信息：`Initial commit`
4. 点击"Commit changes"

### 第四步：在Vercel中导入仓库

1. **回到Vercel**：https://vercel.com/new
2. **点击"Import Git Repository"**
3. **选择刚创建的GitHub仓库**：`psychology-generator`
4. **配置部署设置**：
   - Project Name: `psychology-generator`
   - Framework Preset: `Other`
   - Build Command: 留空
   - Output Directory: 留空
   - Install Command: 留空
   - Root Directory: 留空
5. **点击"Deploy"**

### 第五步：等待部署完成

1. **部署过程**：通常1-2分钟
2. **获得域名**：格式如`https://psychology-generator-xxx.vercel.app`
3. **测试访问**：点击域名测试功能

## 🔧 部署后配置

### 1. 更新小程序代码

将获得的Vercel域名更新到小程序：
```javascript
// pages/index/index.js
webViewUrl: 'https://your-vercel-domain.vercel.app'
```

### 2. 配置微信小程序域名白名单

在微信公众平台添加：
- **request合法域名**: `https://your-vercel-domain.vercel.app`
- **downloadFile合法域名**: `https://your-vercel-domain.vercel.app`

## ✅ 验证部署

1. **访问Vercel域名**
2. **测试功能是否正常**
3. **在微信开发者工具中测试小程序**
4. **确认WebView能正常加载**

## 🌟 优势

- **版本控制**：代码变更可追踪
- **自动部署**：代码推送后自动更新
- **团队协作**：多人可同时开发
- **完全免费**：GitHub和Vercel都免费

## 🆘 常见问题

### Q: GitHub仓库创建失败？
A: 检查用户名是否可用，网络是否正常

### Q: 代码上传失败？
A: 检查文件大小，网络连接

### Q: Vercel部署失败？
A: 检查仓库是否公开，文件是否完整

## 📞 下一步操作

1. **按照上述步骤创建GitHub仓库**
2. **上传代码到GitHub**
3. **在Vercel中导入仓库**
4. **获得生产域名后告诉我**

---

**现在就开始创建GitHub仓库吧！如果在任何步骤遇到问题，请告诉我具体的错误信息！** 