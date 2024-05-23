import styles from '../styles/PostList.module.css'
import Link from 'next/link'
import { useState, useMemo, useEffect } from 'react'
import LoadMoreBtn from './LoadMoreBtn'
import styleAni from '../styles/AnimatePublic.module.css'

// 函数PostList接收一个posts参数，并返回一个列表
export default function PostList({ posts }) {
  // 使用useMemo函数缓存posts的长度
  const postNumber = useMemo(() => posts.length, [posts])
  // 定义handleLoadMore函数，当点击时跳转到http://fe.ycy88.com
  const handleLoadMore = () => {
    window.location.href = 'http://fe.ycy88.com'
  }

  return (
    <>
      <ul className={styles['post-list-ul']}>
        {posts.map((post) => {
          // 获取post的创建时间
          const postDate = new Date(post.createdAt)
          // 格式化日期
          const formatDate = `${postDate.getFullYear()}年${
            postDate.getMonth() + 1
          }月${postDate.getDate()}日`
          return (
            <li
              key={post._id}
              className={`${styles['post-list-li']} ${styleAni['fade-in-top']}`}>
              <article className={styles['article']}>
                <header>
                  <h2 className={styles['post-title']}>
                    <a href={post.link} target="_blank">
                      {post.title}
                    </a>
                  </h2>
                  <time className={styles['post-date']}>{formatDate}</time>
                  {post.tags.length > 0 ? (
                    <div className={styles['tags-box']}>
                      {post.tags.map((tag) => {
                        return (
                          <span className={styles['post-tag']} key={tag}>
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  ) : null}
                  {post.summary ? (
                    <p className={styles['post-summary']}>{post.summary}</p>
                  ) : null}
                </header>
              </article>
            </li>
          )
        })}
      </ul>
      <LoadMoreBtn onClick={handleLoadMore} text="查看更多" />
    </>
  )
}
