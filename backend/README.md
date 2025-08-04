# 萤火商城V2.0 后端服务端

## 环境要求

- PHP 7.4+
- MySQL 5.7+
- Composer

## 安装步骤

1. 安装PHP依赖：
   ```
   composer install
   ```

2. 配置数据库连接信息：
   修改 `config/database.php` 文件中的数据库连接配置。

3. 创建数据库并导入数据表结构：
   ```
   CREATE DATABASE yoshop_pro2;
   ```
   然后导入数据库结构（通常在 `data` 目录下）。

4. 启动定时任务：
   ```
   php think timer start
   ```

## 运行测试

1. 启动内置服务器：
   ```
   php think run
   ```

2. 访问测试地址：
   http://localhost:8000/index.php?s=/api/index/index

## API文档

API文档通常可以通过访问以下地址获取：
http://your-domain.com/api/doc

## 目录结构

- `app`: 应用目录
  - `admin`: 管理后台模块
  - `api`: 用户端API模块
  - `common`: 公共模块
  - `store`: 门店后台模块
  - `timer`: 定时任务模块
- `config`: 配置文件目录
- `data`: 数据库文件目录
- `public`: 公共资源目录
- `route`: 路由定义目录
- `runtime`: 运行时目录