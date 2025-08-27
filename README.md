# AI心理学图文生成器

基于Coze工作流的AI心理学图文生成器，支持微信小程序和Web端使用。

## 功能特性

- 🎯 输入心理学主题，一键生成小红书风格图文
- 📱 支持微信小程序和Web端
- 🖼️ 自动生成封面图和内容配图
- 💾 支持图片预览和保存
- 🚀 基于Docker容器化部署

## 项目结构

```
h5-psychology/
├── pages/                    # 微信小程序页面
│   └── index/               # 首页
│       ├── index.js         # 页面逻辑
│       ├── index.wxml       # 页面模板
│       └── index.wxss       # 页面样式
├── server.js                 # 后端服务
├── package.json              # Node.js依赖
├── dockerfile                # Docker配置
├── docker-compose.yml        # Docker Compose配置
├── app.js                    # 小程序入口
├── app.json                  # 小程序配置
└── project.config.json       # 项目配置
```

## 快速开始

### 1. 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 2. Docker部署

```bash
# 构建镜像
docker build -t psychology-generator .

# 运行容器
docker run -p 3000:3000 psychology-generator

# 或使用Docker Compose
docker-compose up -d
```

### 3. 微信云托管部署

1. 在微信开发者工具中导入项目
2. 配置云托管环境
3. 上传代码并部署

## 配置说明

### 环境变量

- `PORT`: 服务端口（默认3000）
- `NODE_ENV`: 运行环境（production/development）

### 微信小程序配置

1. 修改 `project.config.json` 中的 `appid`
2. 在 `pages/index/index.js` 中配置云托管环境ID
3. 配置域名白名单

## API接口

### 生成图文

```
POST /api/generate
Content-Type: application/json

{
  "topic": "如何克服拖延症"
}
```

### 健康检查

```
GET /health
```

## 部署到微信云托管

### 1. 准备代码

确保以下文件已正确配置：
- `dockerfile`
- `package.json`
- `server.js`

### 2. 上传代码

1. 在微信开发者工具中打开项目
2. 点击"云托管" -> "上传代码"
3. 选择代码目录并上传

### 3. 配置环境

1. 设置环境变量
2. 配置端口映射
3. 设置健康检查

### 4. 部署服务

1. 点击"部署"按钮
2. 等待部署完成
3. 获取服务访问地址

## 生成二维码

部署完成后，您可以通过以下方式生成二维码：

1. 在微信公众平台创建小程序
2. 配置服务器域名
3. 生成小程序码供用户扫描

## 注意事项

- 确保Coze工作流API地址正确
- 配置适当的超时时间
- 处理图片下载和保存权限
- 注意微信小程序的域名白名单配置

## 技术支持

如有问题，请检查：
1. 网络连接是否正常
2. Coze工作流是否正常运行
3. 微信云托管配置是否正确
4. 小程序权限配置是否完整 