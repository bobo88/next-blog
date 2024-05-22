// pages/api/proxy.js
import { createProxyMiddleware } from 'http-proxy-middleware'

const apiProxy = createProxyMiddleware({
  target: 'https://www.cnuseful.com', // 后端服务器地址
  changeOrigin: true,
  pathRewrite: { '^/api/proxy': '' }
})

export default function handler(req, res) {
  apiProxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result
    }
    return result
  })
}

export const config = {
  api: {
    bodyParser: false
  }
}
