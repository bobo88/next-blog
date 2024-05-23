import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: '知行合一',
//   description: 'ycy88官网',
//   keywords: 'V8程序, 前端博客小站 - JunF, 技术之外, 思维, 模型, Next'
// }

// {/* <head>
//   <title>{metadata.title}</title>
//   <meta name="description" content={metadata.description} />
//   <meta name="keywords" content={metadata.keywords} />
// </head> */}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {children}
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
