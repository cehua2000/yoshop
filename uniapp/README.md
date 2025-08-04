# 萤火商城V2.0 用户端 (Uni-App)

## 环境要求

- HBuilderX 或 VSCode + Uni-App插件
- Node.js v18.16.0
- npm v9.6.5

## 安装步骤

1. 安装依赖：
   ```
   npm install
   ```

2. 修改配置文件：
   编辑 `config.js` 文件，设置正确的API地址：
   ```javascript
   const config = {
       appName: '萤火商城',
       apiUrl: 'https://your-domain.com/index.php?s=/api'
   }
   ```

## 开发环境运行

### H5平台

```bash
npm run dev:h5
```

默认访问地址：http://localhost:8010

### 微信小程序

```bash
npm run dev:mp-weixin
```

然后在微信开发者工具中打开 `dist/dev/mp-weixin` 目录。

## 生产环境构建

### H5平台

```bash
npm run build:h5
```

构建后的文件将位于 `dist/build/h5` 目录。

### 微信小程序

```bash
npm run build:mp-weixin
```

构建后的文件将位于 `dist/build/mp-weixin` 目录。

### APP平台

```bash
npm run build:app-plus
```

构建后的文件将位于 `dist/build/app-plus` 目录。

## 项目结构

- `components`: 公共组件
- `config`: 配置文件
- `pages`: 页面文件
  - `address`: 地址管理
  - `article`: 文章资讯
  - `cart`: 购物车
  - `category`: 商品分类
  - `checkout`: 订单结算
  - `coupon`: 优惠券
  - `goods`: 商品详情
  - `index`: 首页
  - `login`: 登录注册
  - `order`: 订单管理
  - `points`: 积分中心
  - `profile`: 个人中心
  - `recharge`: 余额充值
  - `refund`: 售后服务
  - `search`: 商品搜索
  - `user`: 用户设置
- `static`: 静态资源
- `store`: 状态管理
- `utils`: 工具函数