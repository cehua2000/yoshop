# 萤火商城V2.0 本地测试部署指南

## 前后端本地测试环境搭建

为了在本地运行萤火商城V2.0进行测试，您需要分别启动后端服务和前端开发服务器。

## 后端服务启动

1. 确保已安装PHP 7.4+和MySQL 5.7+
2. 创建数据库并导入数据表结构
3. 修改`backend/yoshop2.0-master/config/database.php`文件，配置数据库连接信息
4. 在`backend/yoshop2.0-master`目录下运行：
   ```
   php think run
   ```
5. 后端API服务将运行在 http://localhost:8000

## 管理后台前端启动

1. 确保已安装Node.js v18.16.0和npm
2. 进入`admin/yoshop2.0-admin-master`目录
3. 安装依赖：
   ```
   npm install
   ```
4. 启动开发服务器：
   ```
   npm run serve
   ```
5. 管理后台将运行在 http://localhost:8110

## 门店后台前端启动

1. 确保已安装Node.js v18.16.0和npm
2. 进入`store/yoshop2.0-store-master`目录
3. 安装依赖：
   ```
   npm install
   ```
4. 启动开发服务器：
   ```
   npm run serve
   ```
5. 门店后台将运行在 http://localhost:8120

## 用户端(H5)启动

1. 确保已安装Node.js v18.16.0和npm
2. 进入`uniapp/yoshop2.0-uniapp-master`目录
3. 安装依赖：
   ```
   npm install
   ```
4. 启动H5开发服务器：
   ```
   npm run dev:h5
   ```
5. 用户端H5将运行在 http://localhost:8010

## 测试访问

启动所有服务后，您可以通过以下地址访问各个模块：

- 后端API测试：http://localhost:8000/index.php?s=/api/index/index
- 管理后台：http://localhost:8110
- 门店后台：http://localhost:8120
- 用户端(H5)：http://localhost:8010

## 注意事项

1. 确保各服务端口未被占用
2. 确保数据库连接信息正确
3. 如果需要在不同设备间访问，可能需要调整各服务的host配置