# 萤火商城V2.0部署指南

## 项目介绍

萤火商城V2.0是一款轻量级、高性能、前后端分离的电商系统，支持微信小程序 + H5 + 公众号 + APP等多种终端。

## 项目结构

- `backend`: 后端服务端 (PHP + ThinkPHP6)
- `admin`: 管理后台 (Vue.js + Ant Design Vue)
- `store`: 门店后台 (Vue.js + Ant Design Vue)
- `uniapp`: 用户端 (Uni-APP)

## 部署环境要求

### 后端环境
- CentOS 7.0+
- Nginx 1.10+
- PHP 7.4+
- MySQL 5.7+
- Redis (可选，用于缓存)

### 前端环境
- Node.js v18.16.0
- npm v9.6.5 或 yarn v1.22.19

## 部署步骤

### 1. 后端部署

1. 将`backend`目录上传到服务器
2. 配置Nginx虚拟主机，将网站根目录指向`public`文件夹
3. 创建MySQL数据库，并导入数据表结构
4. 修改`config/database.php`文件，配置数据库连接信息
5. 配置域名解析，确保可以通过域名访问
6. 设置目录权限，确保`runtime`和`public/uploads`目录可写
7. 安装PHP依赖：`composer install`
8. 启动定时任务：`php think timer start`

### 2. 管理后台部署

1. 进入`admin`目录
2. 安装依赖：`yarn install`
3. 修改`public/config.js`中的API地址
4. 构建项目：`yarn build`
5. 将构建后的文件复制到后端的`public/admin`目录

### 3. 门店后台部署

1. 进入`store`目录
2. 安装依赖：`yarn install`
3. 修改`public/config.js`中的API地址
4. 构建项目：`yarn build`
5. 将构建后的文件复制到后端的`public/store`目录

### 4. 用户端部署

1. 进入`uniapp`目录
2. 修改`config.js`中的`apiUrl`为后端API地址
3. 根据需要打包不同平台：
   - H5: `npm run build:h5`
   - 微信小程序: `npm run build:mp-weixin`
   - APP: `npm run build:app-plus`
4. 将打包后的文件部署到对应平台

## 测试运行

1. 后端API测试：访问`https://your-domain.com/index.php?s=/api/index/index`
2. 管理后台测试：访问`https://your-domain.com/admin`
3. 门店后台测试：访问`https://your-domain.com/store`
4. 用户端测试：根据部署平台访问对应地址

## 注意事项

1. 确保服务器环境满足要求
2. 数据库连接信息必须正确
3. 目录权限设置正确
4. 域名解析配置正确
5. 如需使用HTTPS，请配置SSL证书

## 技术支持

如有部署问题，请参考官方文档或联系技术支持。