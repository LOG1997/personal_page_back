# 指定node版本
from node:16.4.2
MAINTAINER log1997
# 分三部分，意为将当前目录下的所有文件复制到容器的/app目录下
copy . /app/
# 指定工作目录为/app
workdir /app
# 安装依赖
run npm install
# 全局安装pm2，运行express服务
run npm install pm2 -g
# 暴露端口
expose 4000
# 启动服务
cmd ["pm2-runtime", "app.js"]