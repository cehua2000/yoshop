# 萤火商城V2.0 管理后台

## 环境要求

- Node.js v18.16.0
- npm v9.6.5 或 yarn v1.22.19

## 安装步骤

1. 安装依赖：
   ```
   yarn install
   ```
   或
   ```
   npm install
   ```

2. 修改配置文件：
   编辑 `public/config.js` 文件，设置正确的API地址：
   ```javascript
   window.config = {
       apiUrl: 'https://your-domain.com/index.php?s=/api'
   }
   ```

## 开发环境运行

```bash
yarn serve
```
或
```bash
npm run serve
```

默认访问地址：http://localhost:8110

## 生产环境构建

```bash
yarn build
```
或
```bash
npm run build
```

构建后的文件将位于 `dist` 目录，可以将其部署到服务器的 `public/admin` 目录。

## 项目结构

- `public`: 公共资源目录
- `src`: 源代码目录
  - `api`: API接口封装
  - `assets`: 静态资源
  - `components`: 公共组件
  - `config`: 配置文件
  - `core`: 核心文件
  - `layouts`: 布局组件
  - `router`: 路由配置
  - `store`: 状态管理
  - `utils`: 工具函数
  - `views`: 页面视图