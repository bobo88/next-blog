import styles from '../styles/PostList.module.css'
import Link from 'next/link'
import { useState, useMemo, useEffect } from 'react'
import LoadMoreBtn from './LoadMoreBtn'
import styleAni from '../styles/AnimatePublic.module.css'

export default function PostList({ posts }) {
  const postNumber = useMemo(() => posts.length, [posts])
  const handleLoadMore = () => {
    window.location.href = 'http://fe.ycy88.com'
  }

  return (
    <>
      <ul className={styles['post-list-ul']}>
        {posts.map((post) => {
          const postDate = new Date(post.createdAt)
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
                    <Link href={`/posts/${post.title}`}>{post.title}</Link>
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
