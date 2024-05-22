import styles from '../styles/Footer.module.css'

export default function Footer({ siteMetadata }) {
  return (
    <footer className={styles['footer']}>
      <div className={styles['copyright-box']}>
        {`Copyright © ${
          siteMetadata.name
        } ${new Date().getFullYear()} • All rights reserved.`}
      </div>
      <a
        className={styles['copyright-support']}
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Powered by Next.js
      </a>

      <div className={styles['beian']}>
        备案号：
        <a href="https://beian.miit.gov.cn/" target="_blank">
          粤ICP备2022114378号
        </a>
      </div>
    </footer>
  )
}
