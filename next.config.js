// next.config.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  output: "export",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.ycy88.com/api/:path*", // 后端服务器地址
      },
    ];
  },
};
