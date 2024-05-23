import './styles/globals.scss'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <html lang="en">{children}</html>
}
