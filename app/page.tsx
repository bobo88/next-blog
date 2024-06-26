'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import Header from './components/Header'
import Head from 'next/head'
import SearchBar from './components/SearchBar'
import PostList from './components/PostList'
import Footer from './components/Footer'
import stylesLink from './styles/Links.module.css'
import styleAni from './styles/AnimatePublic.module.css'
import styles from './styles/Home.module.css'
import { LINKS_LIST } from './config/common'

const metadata = {
  title: '知行合一 - 首页',
  description: 'ycy88官网',
  keywords: 'V8程序, 前端博客小站 - JunF, 技术之外, 思维, 模型, Next'
}

export default function Home() {
  const linkIcon = (
    <svg
      className={stylesLink['link-icon']}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 195.085 195.085">
      <g>
        <path
          d="M179.617,15.453c-0.051-0.05-0.102-0.1-0.154-0.149c-18.689-18.549-48.477-20.463-69.37-4.441
   c-2.091,1.599-3.776,3.053-5.302,4.575c-0.044,0.044-0.087,0.088-0.13,0.133L71.224,49.012c-2.929,2.929-2.929,7.678,0.001,10.606
   c2.93,2.93,7.679,2.929,10.606-0.001l33.561-33.566c0.035-0.035,0.069-0.07,0.104-0.105c1.023-1.01,2.205-2.02,3.715-3.174
   c15.008-11.508,36.411-10.098,49.789,3.281c0.044,0.044,0.089,0.088,0.134,0.131c14.652,14.786,14.611,38.742-0.124,53.483
   l-33.559,33.563c-2.929,2.929-2.929,7.678,0.001,10.606c1.465,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.304-2.197
   l33.56-33.563C200.241,69.641,200.241,36.077,179.617,15.453z"
        />
        <path
          d="M113.23,135.437l-33.541,33.542c-0.066,0.067-0.132,0.136-0.196,0.205c-3.708,3.648-8.059,6.449-12.945,8.333
   c-13.995,5.418-29.888,2.07-40.481-8.524c-14.768-14.784-14.768-38.84,0-53.619L59.624,81.83c1.406-1.407,2.197-3.315,2.197-5.305
   v-0.013c0-4.143-3.357-7.494-7.5-7.494c-2.135,0-4.062,0.895-5.428,2.328l-33.435,33.422c-20.61,20.628-20.612,54.195-0.002,74.828
   c10.095,10.097,23.628,15.479,37.411,15.479c6.414-0.001,12.884-1.167,19.084-3.566c6.922-2.667,13.088-6.67,18.326-11.896
   c0.076-0.075,0.15-0.153,0.223-0.232l33.337-33.337c2.929-2.93,2.929-7.678-0.001-10.607
   C120.909,132.509,116.16,132.509,113.23,135.437z"
        />
        <path
          d="M59.15,135.908c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196l66.164-66.161
   c2.93-2.929,2.93-7.678,0.001-10.606c-2.929-2.93-7.678-2.929-10.606-0.001l-66.164,66.161
   C56.221,128.23,56.221,132.979,59.15,135.908z"
        />
      </g>
    </svg>
  )

  const [allPostsData, setAllPostsData] = useState([
    {
      id: 1,
      name: 'Bob',
      tags: ['技术之外', '思维', '模型'],
      createdAt: '2018-06-18',
      title: 'PDCA 理论',
      link: 'https://fe.ycy88.com/beyond-tech/mental-model/21_pdca',
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
      link: 'https://fe.ycy88.com/beyond-tech/mental-model/19_path-dependency',
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
      link: 'https://fe.ycy88.com/keywords/standard/20_standard',
      email: 'yuanboi88@163.com',
      summary: `规范建设：复杂的事情简单化，简单的事情标准化，标准的事情流程化，流程的事情自动化。
      
      团队的规范基本上是自己长出来的。可以从其他公司或者团队进行借鉴，但终究还是要结合自己团队的现状进行调整优化，且这个规范也会随着团队的不断变化而调整。

      所以我给这个规范的建立过程概括为：「动态适配」。
      `
    }
  ])
  const [filteredPosts, setFilteredPosts] = useState(allPostsData)

  const [allLinks, setAllLinks] = useState([...LINKS_LIST])

  const [siteMetadata, setSiteMetadata] = useState({
    name: '知行合一',
    title: '知行合一 - 首页',
    description: '这是知行合一网站的首页，涵盖了各种技术与思维模型的文章。',
    keywords:
      'V8程序, 前端博客小站 - JunF, 技术之外, 思维, 模型, Next, 知行合一, 技术博客, 思维模型, 前端开发, V8程序, JunF',
    logo: ''
  })

  useEffect(() => {
    // xx
  }, [])

  return (
    <>
      <head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
      </head>

      <body>
        <div>
          <div className={styles['container']}>
            <Header siteMetadata={siteMetadata} nav="home" />

            <main
              className={`${stylesLink['links-page-main']} ${styleAni['fade-in-top']}`}>
              <div className={stylesLink['grid-wrap']}>
                {allLinks.map((link, index) => {
                  let description = link.website
                  if (link.description) {
                    if (link.description.length > 40) {
                      description = link.description.substr(0, 40) + '...'
                    } else {
                      description = link.description
                    }
                  }
                  return (
                    // onClick={() => handleViewLinkItem(link.website)}
                    <a
                      key={link.id}
                      href={link.website}
                      target="_blank"
                      rel="noopener noreferrer">
                      <div
                        className={`${stylesLink['link-card']} ${
                          link.isHot ? stylesLink['hot-class'] : ''
                        }`}>
                        {link.picture ? (
                          <img
                            src={link.picture}
                            alt={link.name}
                            width={80}
                            height={80}
                            className={stylesLink['link-picture']}
                          />
                        ) : (
                          linkIcon
                        )}

                        <div className={stylesLink['link-info-box']}>
                          <h3 className={stylesLink['link-name']}>
                            {link.name}
                          </h3>

                          {link.description ? (
                            <p
                              title={link.description}
                              className={stylesLink['link-description']}>
                              <span>简介：</span>
                              {description}
                            </p>
                          ) : (
                            ''
                          )}

                          {link.website ? (
                            <p className={stylesLink['link-url']}>
                              <span>网址：</span>
                              {link.website}
                            </p>
                          ) : (
                            ''
                          )}

                          <p className={stylesLink['link-author']}>
                            <span>作者：</span>
                            {link.author} ｜ {link.email}
                          </p>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </main>

            <main className={styles['main']}>
              <hr className={styles['search-post-hr']} />

              <div className={styles['post-list-wrap']}>
                <PostList posts={allPostsData} />
              </div>
            </main>

            <hr className={styles['search-post-hr']} />

            <Footer siteMetadata={siteMetadata} />
          </div>
        </div>
      </body>
    </>
  )
}
