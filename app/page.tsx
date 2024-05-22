'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { fetchData } from '../services/api'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      setData(result)
    }

    getData()
  }, [])

  return (
    <main className="main-box">
      <Image src="/next.svg" alt="xx" width={200} height={200} />

      <h1>欢迎来到我的 Next.js 应用</h1>

      {data && <p>数据: {JSON.stringify(data)}</p>}
    </main>
  )
}
