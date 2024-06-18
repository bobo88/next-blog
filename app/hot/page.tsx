'use client'

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Hot.module.css'
import styleAni from '../styles/AnimatePublic.module.css'
import { LINKS_LIST } from '../config/common'
import { fetchHotListData } from '../../services/api'

interface LinkType {
  id: number
  url: string
  [key: string]: any
  // 其他属性...
}

export default function Categories() {
  const [siteMetadata, setSiteMetadata] = useState({
    name: '知行合一',
    title: '知行合一 - 友链',
    description:
      '这是知行合一网站的友链，涵盖了相关的技术博客网站（个人独立博客网站）。',
    keywords:
      'V8程序, 前端博客小站 - JunF, 技术之外, 思维, 模型, Next, 知行合一, 技术博客, 思维模型, 前端开发, V8程序, JunF',
    logo: '',
    shrink: '',
    postTitle: ''
  })

  const [allLinks, setAllLinks] = useState<LinkType[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('https://ycy88.com/apis/hot/all')
        const data = await response.json()
        setAllLinks(data.data)
      } catch (error) {
        console.error('Error fetching links:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLinks()
  }, [])

  const formatDate = (dateString: any) => {
    const options: any = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
    const date = new Date(dateString)
    return date.toLocaleString('zh-CN', options).replace(/\//g, '-')
  }

  return (
    <>
      <head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
      </head>

      <body>
        <Header siteMetadata={siteMetadata} nav="hot" />

        <main
          className={`${styles['links-page-main']} ${styleAni['fade-in-top']}`}>
          {loading ? (
            <p className={styles['loading']}>Loading...</p>
          ) : (
            <div className={styles['link-grid']}>
              {allLinks &&
                allLinks.map((link, index) => {
                  // let description = link.description
                  // if (link.description) {
                  //   if (link.description.length > 40) {
                  //     description = link.description.substr(0, 40) + '...'
                  //   } else {
                  //     description = link.description
                  //   }
                  // }
                  return (
                    // onClick={() => handleViewLinkItem(link.website)}
                    //@ts-ignore
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['link-card']}>
                      {link.cover && (
                        <img
                          src={link.cover}
                          alt={link.title}
                          className={styles['link-picture']}
                        />
                      )}
                      <div className={styles['link-info-box']}>
                        <h3 className={styles['link-title']}>{link.title}</h3>
                        {link.summary && (
                          <div
                            className={styles['link-description']}
                            dangerouslySetInnerHTML={{ __html: link.summary }}
                          />
                        )}
                        <p className={styles['link-author']}>
                          <span>作者：</span>
                          {link.author || 'Bob'}
                        </p>
                        <p className={styles['link-date']}>
                          <span>时间：</span>
                          {formatDate(link.create_date)}
                        </p>
                      </div>
                    </a>
                  )
                })}
            </div>
          )}
        </main>

        <Footer siteMetadata={siteMetadata} />
      </body>
    </>
  )
}
