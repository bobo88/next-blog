'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import PostList from './components/PostList'
import Footer from './components/Footer'
import styles from './styles/Home.module.css'

export default function Home() {
  const [siteMetadata, setSiteMetadata] = useState({
    name: 'ycy88',
    title: 'abc',
    logo: ''
  })
  const [allPostsData, setAllPostsData] = useState([
    {
      id: 1,
      name: 'Bob',
      tags: ['技术之外', '思维', '模型'],
      createdAt: '2018-06-18',
      title: 'PDCA 理论',
      email: 'yuanboi88@163.com',
      summary: `PDCA：PDCA 是指 Plan（计划）、Do（实施）、Check（检查）、Act（纠正）这一循环，是一种持续改进的管理方法。PDCA 循环常被称为 Deming 循环，它源于质量管理领域，由质量管理专家 Edward Deming 提出，后来被广泛应用于各个管理领域。

      简单来说就是两个字的不断重复：想干。`
    },
    {
      id: 2,
      name: 'Bob',
      tags: ['技术之外', '路径依赖模型'],
      createdAt: '2019-02-18',
      title: '路径依赖模型',
      email: 'yuanboi88@163.com',
      summary: `有人做了，做的还可以，大家都跟着做，最后即使这个做法不是最优的，但是很难改变了。
      
      举个简单的生活例子，我们平时用的手机耳机，较长时间以来基本上都是有线的，不管什么品牌的手机，什么品牌的耳机。
      
      从第一个生产出有线耳机的厂家开始，直至全世界都是生产有线耳机，这就是路径依赖。
      
      2016 年，苹果发布 AirPods，耳机进入无线智能化时代。`
    },
    {
      id: 3,
      name: 'Bob',
      tags: ['规范｜团队', '管理'],
      createdAt: '2020-06-06',
      title: '规范建设',
      email: 'yuanboi88@163.com',
      summary: `规范建设：复杂的事情简单化，简单的事情标准化，标准的事情流程化，流程的事情自动化。
      
      团队的规范基本上是自己长出来的。可以从其他公司或者团队进行借鉴，但终究还是要结合自己团队的现状进行调整优化，且这个规范也会随着团队的不断变化而调整。

      所以我给这个规范的建立过程概括为：「动态适配」。
      `
    }
  ])
  const [filteredPosts, setFilteredPosts] = useState(allPostsData)

  useEffect(() => {
    // xxx
  }, [])

  return (
    <div>
      <div className={styles['container']}>
        <Header siteMetadata={siteMetadata} nav="home" />
        <main className={styles['main']}>
          <hr className={styles['search-post-hr']} />

          <div className={styles['post-list-wrap']}>
            <PostList posts={filteredPosts} />
          </div>
        </main>
        <Footer siteMetadata={siteMetadata} />
      </div>
    </div>
  )
}
