import styles from '../styles/Header.module.css'
import Link from 'next/link'
import ThemeChanger from './ThemeChanger'
import Image from 'next/image'
import { useState } from 'react'

export default function Header({ siteMetadata, nav }) {
  const [showMobile, setShowMobile] = useState(false)
  const showMobileMenu = () => {
    setShowMobile(!showMobile)
  }
  return (
    <header
      className={`${styles['header']} ${
        nav === 'home' ? styles['header-home'] : ''
      }`}>
      <div className={`${styles['inner-header']}`}>
        <h1 className={styles['logo-h1']}>
          <Link href="/">
            <svg
              t="1716363432546"
              class="icon"
              viewBox="0 0 4012 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8097"
              width="200"
              height="200">
              <path
                d="M192.261224 871.444898C112.84898 799.346939 37.616327 730.383673 26.122449 719.934694c-20.897959-20.897959-20.897959-20.897959 52.244898-86.726531l72.097959-65.828571 92.995918 84.636735c51.2 45.97551 98.220408 84.636735 105.534694 84.636734s102.4-80.457143 210.02449-179.722449c124.342857-113.893878 201.665306-177.632653 210.02449-172.408163 6.269388 4.179592 39.706122 32.391837 72.097959 63.738775 49.110204 45.97551 56.42449 58.514286 44.930612 68.963266-75.232653 73.142857-536.032653 485.877551-541.257142 485.877551-4.179592 0-72.097959-59.559184-152.555103-131.657143zM1232.979592 804.571429c0-41.795918 4.179592-73.142857 10.448979-73.142858s10.44898 11.493878 10.44898 26.122449 4.179592 26.122449 9.404082 26.122449 18.808163-11.493878 30.30204-26.122449 29.257143-26.122449 39.706123-26.122449c15.673469 0 15.673469 3.134694-5.22449 25.077551l-24.032653 25.077551 28.212245 48.065307c21.942857 37.616327 24.032653 48.065306 12.538775 48.065306-8.359184 0-26.122449-16.718367-37.616326-37.616327-18.808163-31.346939-25.077551-35.526531-37.616327-25.077551-8.359184 7.314286-15.673469 24.032653-15.673469 37.616327s-4.179592 25.077551-10.44898 25.077551-10.44898-31.346939-10.448979-73.142857zM1389.714286 804.571429c0-86.726531 14.628571-95.085714 51.2-31.346939 12.538776 22.987755 27.167347 41.795918 33.436734 41.795918 5.22449 0 9.404082-18.808163 9.404082-41.795918s5.22449-41.795918 10.44898-41.795919c6.269388 0 10.44898 31.346939 10.448979 73.142858 0 89.861224-15.673469 96.130612-59.559183 24.032653l-29.257143-50.155102-3.134694 50.155102c-5.22449 76.277551-22.987755 57.469388-22.987755-24.032653zM1556.897959 856.816327c-27.167347-27.167347-27.167347-84.636735-2.089796-107.62449 29.257143-26.122449 90.906122-22.987755 110.759184 5.22449 24.032653 33.436735 20.897959 67.918367-9.404082 97.17551-30.302041 31.346939-71.053061 33.436735-99.265306 5.22449z m75.232653-12.538776c25.077551-20.897959 29.257143-45.97551 12.538776-70.008163-19.853061-27.167347-62.693878-28.212245-77.322449-2.089796-14.628571 29.257143-13.583673 39.706122 10.448979 63.738775s32.391837 25.077551 54.334694 8.359184zM1731.395918 870.4c-10.44898-17.763265-29.257143-130.612245-22.987755-136.881633 8.359184-9.404082 26.122449 19.853061 26.122449 44.930613 1.044898 48.065306 17.763265 48.065306 31.346939 1.044898 17.763265-63.738776 47.020408-66.873469 57.469388-6.269388 9.404082 58.514286 21.942857 59.559184 35.52653 5.22449 6.269388-26.122449 16.718367-47.020408 21.942858-47.020409 13.583673 0 13.583673-1.044898-6.269388 78.367347-10.44898 40.75102-22.987755 67.918367-31.346939 67.918368-12.538776 0-35.526531-58.514286-35.526531-90.906123 0-6.269388-4.179592-14.628571-9.404081-18.808163-5.22449-3.134694-15.673469 20.897959-22.987755 52.244898-11.493878 51.2-30.302041 73.142857-43.885715 50.155102zM1922.612245 804.571429c0-41.795918 4.179592-73.142857 10.448979-73.142858s10.44898 31.346939 10.44898 73.142858-4.179592 73.142857-10.44898 73.142857-10.44898-31.346939-10.448979-73.142857zM1974.857143 804.571429c0-63.738776 2.089796-73.142857 18.808163-73.142858 12.538776 0 28.212245 17.763265 44.930612 50.155102l25.077551 49.110205 3.134694-49.110205c2.089796-35.526531 7.314286-50.155102 18.808164-50.155102s14.628571 16.718367 14.628571 73.142858c0 89.861224-16.718367 96.130612-62.693878 24.032653l-31.346938-50.155102v50.155102c0 36.571429-4.179592 49.110204-15.67347 49.110204-12.538776 0-15.673469-14.628571-15.673469-73.142857zM2152.489796 856.816327c-27.167347-27.167347-27.167347-84.636735-2.089796-107.62449s88.816327-22.987755 107.62449-1.044898c12.538776 15.673469 10.44898 16.718367-30.302041 9.404081-51.2-8.359184-75.232653 5.22449-75.232653 42.840817 0 30.302041 38.661224 57.469388 71.053061 49.110204 28.212245-7.314286 30.302041-24.032653 2.089796-24.032653-11.493878 0-20.897959-4.179592-20.897959-10.44898 0-5.22449 14.628571-10.44898 31.346939-10.448979 26.122449 0 31.346939 4.179592 31.346938 24.032653 0 45.97551-78.367347 64.783673-114.938775 28.212245zM2355.2 859.95102c48.065306-149.420408 72.097959-161.959184 111.804082-58.514285 15.673469 41.795918 22.987755 73.142857 16.718367 75.232653-5.22449 2.089796-14.628571-4.179592-19.853061-13.583674-12.538776-21.942857-77.322449-22.987755-85.681633-1.044898s-30.302041 19.853061-22.987755-2.089796z m84.636735-62.693877c-9.404082-37.616327-14.628571-42.840816-26.122449-24.032653-17.763265 27.167347-11.493878 52.244898 11.493877 52.244898 18.808163 0 20.897959-4.179592 14.628572-28.212245zM2518.204082 804.571429c0-63.738776 2.089796-73.142857 18.808163-73.142858 12.538776 0 28.212245 17.763265 44.930612 50.155102l25.077551 49.110205 3.134694-49.110205c2.089796-35.526531 7.314286-50.155102 18.808163-50.155102s14.628571 16.718367 14.628572 73.142858c0 89.861224-16.718367 96.130612-62.693878 24.032653l-31.346939-50.155102v50.155102c0 36.571429-4.179592 49.110204-15.673469 49.110204-12.538776 0-15.673469-14.628571-15.673469-73.142857zM2674.938776 804.571429v-73.142858h50.155102c61.64898 0 75.232653 12.538776 75.232653 68.963266 0 54.334694-26.122449 77.322449-85.681633 77.322449h-39.706122v-73.142857z m84.636734 41.795918c22.987755-12.538776 27.167347-61.64898 7.314286-81.502041-7.314286-7.314286-22.987755-12.538776-36.571429-12.538775-21.942857 0-24.032653 4.179592-24.032653 52.244898 0 55.379592 10.44898 63.738776 53.289796 41.795918zM2894.367347 804.571429v-73.142858h50.155102c61.64898 0 75.232653 12.538776 75.232653 68.963266 0 54.334694-26.122449 77.322449-85.681633 77.322449h-39.706122v-73.142857z m84.636735 41.795918c22.987755-12.538776 27.167347-61.64898 7.314285-81.502041-7.314286-7.314286-22.987755-12.538776-36.571428-12.538775-21.942857 0-24.032653 4.179592-24.032653 52.244898 0 55.379592 10.44898 63.738776 53.289796 41.795918zM3074.089796 860.995918c-28.212245-18.808163-32.391837-87.771429-6.269388-112.848979 18.808163-19.853061 88.816327-21.942857 106.579592-4.179592 7.314286 7.314286 12.538776 32.391837 12.538776 56.42449 0 48.065306-26.122449 77.322449-67.918368 77.322449-11.493878 0-32.391837-7.314286-44.930612-16.718368z m89.861224-50.155102c4.179592-34.481633-13.583673-58.514286-43.885714-58.514285-49.110204 0-65.828571 59.559184-26.122449 87.771428 31.346939 20.897959 65.828571 6.269388 70.008163-29.257143zM3228.734694 804.571429c0-41.795918 4.179592-73.142857 10.448979-73.142858s10.44898 31.346939 10.44898 73.142858-4.179592 73.142857-10.44898 73.142857-10.44898-31.346939-10.448979-73.142857zM3280.979592 804.571429c0-63.738776 2.089796-73.142857 18.808163-73.142858 12.538776 0 28.212245 17.763265 44.930612 50.155102l25.077551 49.110205 3.134694-49.110205c2.089796-35.526531 7.314286-50.155102 18.808164-50.155102s14.628571 16.718367 14.628571 73.142858c0 89.861224-16.718367 96.130612-62.693878 24.032653l-31.346938-50.155102v50.155102c0 36.571429-4.179592 49.110204-15.67347 49.110204-12.538776 0-15.673469-14.628571-15.673469-73.142857zM3458.612245 856.816327c-27.167347-27.167347-27.167347-84.636735-2.089796-107.62449s88.816327-22.987755 107.62449-1.044898c12.538776 15.673469 10.44898 16.718367-30.302041 9.404081-51.2-8.359184-75.232653 5.22449-75.232653 42.840817 0 30.302041 38.661224 57.469388 71.053061 49.110204 28.212245-7.314286 30.302041-24.032653 2.089796-24.032653-11.493878 0-20.897959-4.179592-20.897959-10.44898 0-5.22449 14.628571-10.44898 31.346939-10.448979 26.122449 0 31.346939 4.179592 31.346938 24.032653 0 45.97551-78.367347 64.783673-114.938775 28.212245z"
                p-id="8098"
                fill="#d4237a"></path>
              <path
                d="M295.706122 594.546939c-27.167347-25.077551-101.355102-92.995918-165.093877-150.465306C67.918367 387.657143 13.583673 338.546939 11.493878 337.502041c-6.269388-4.179592 58.514286-71.053061 104.489795-107.62449l37.616327-30.302041 96.130612 89.861225c96.130612 88.816327 96.130612 88.816327 119.118368 70.008163 12.538776-11.493878 103.444898-94.040816 201.665306-183.902041C669.779592 84.636735 754.416327 10.44898 758.595918 10.44898c12.538776 1.044898 146.285714 123.297959 140.016327 127.477551-11.493878 9.404082-469.159184 423.183673-508.865306 460.8l-42.840817 40.75102-51.2-44.930612zM2177.567347 593.502041l-36.571429-34.481633h79.412245v-82.546939c0-67.918367-3.134694-84.636735-18.808163-94.040816-13.583673-8.359184-25.077551-7.314286-50.155102 7.314286-17.763265 9.404082-38.661224 17.763265-47.020408 17.763265-21.942857 0-18.808163-49.110204 4.179592-56.42449 10.44898-4.179592 35.526531-22.987755 55.379591-43.885714l35.526531-36.571429-25.077551-20.897959c-13.583673-11.493878-22.987755-21.942857-20.897959-22.987755 2.089796-2.089796 21.942857-9.404082 44.930612-16.718367 34.481633-11.493878 41.795918-11.493878 56.42449 3.134694 15.673469 15.673469 12.538776 20.897959-32.391837 66.873469-27.167347 27.167347-49.110204 53.289796-49.110204 56.42449 0 4.179592 19.853061 1.044898 42.840816-7.314286 54.334694-19.853061 118.073469-19.853061 133.746939-2.089796 16.718367 20.897959 4.179592 28.212245-48.065306 28.212245h-44.930612v119.118367c0 65.828571-3.134694 126.432653-6.269388 135.836735-9.404082 25.077551-32.391837 19.853061-73.142857-16.718367zM2630.008163 583.053061c-28.212245-61.64898-32.391837-110.759184-12.538775-155.689796 20.897959-44.930612 12.538776-68.963265-11.493878-35.52653-30.302041 41.795918-90.906122 99.265306-104.489796 99.265306-8.359184 0-14.628571-7.314286-14.628571-15.67347s4.179592-15.673469 10.448979-15.673469c11.493878 0 148.37551-203.755102 174.49796-262.269388 20.897959-44.930612 22.987755-45.97551 49.110204-27.167347 15.673469 11.493878 16.718367 18.808163 8.359183 35.526531-10.44898 17.763265-7.314286 22.987755 21.942858 36.571429 18.808163 9.404082 58.514286 37.616327 88.816326 64.783673 30.302041 26.122449 78.367347 59.559184 106.579592 75.232653 66.873469 36.571429 67.918367 56.42449 4.179592 56.42449-47.020408 0-51.2-2.089796-128.522449-83.591837-65.828571-67.918367-85.681633-83.591837-111.804082-83.591837s-35.526531 7.314286-55.379592 42.840817c-13.583673 22.987755-21.942857 44.930612-18.808163 47.020408 3.134694 3.134694 22.987755-2.089796 43.885714-10.44898 49.110204-20.897959 92.995918-20.897959 109.714286-1.044898 10.44898 12.538776 10.44898 16.718367-1.044898 19.853062-8.359184 2.089796-35.526531 11.493878-61.64898 20.897959s-57.469388 16.718367-70.008163 16.718367c-27.167347 0-41.795918 36.571429-24.032653 57.469388 10.44898 12.538776 19.853061 11.493878 63.738776-10.44898 60.604082-31.346939 94.040816-33.436735 118.073469-6.269388 16.718367 17.763265 16.718367 20.897959-4.179592 56.42449-14.628571 25.077551-19.853061 44.930612-14.628571 63.738776 6.269388 27.167347 6.269388 27.167347-57.469388 27.167347-35.526531 0-63.738776 4.179592-63.738775 10.448979 0 24.032653-30.302041 8.359184-44.930613-22.987755z m97.17551-39.706122c34.481633-34.481633 27.167347-52.244898-17.763265-44.930612-49.110204 7.314286-49.110204 7.314286-40.75102 39.706122 8.359184 31.346939 30.302041 33.436735 58.514285 5.22449zM1351.053061 579.918367c-4.179592-11.493878 0-22.987755 10.44898-31.346938 18.808163-13.583673 53.289796-99.265306 39.706122-99.265307-4.179592 0-20.897959 14.628571-37.616326 31.346939-31.346939 32.391837-51.2 37.616327-77.322449 21.942857-11.493878-7.314286 5.22449-30.302041 78.367347-100.310204 51.2-50.155102 85.681633-88.816327 77.322449-85.681632-8.359184 2.089796-26.122449 7.314286-38.661225 11.493877-34.481633 10.44898-52.244898-35.526531-28.212245-72.097959 9.404082-14.628571 14.628571-37.616327 12.538776-52.244898-6.269388-32.391837-2.089796-32.391837 45.97551 0 20.897959 14.628571 50.155102 26.122449 64.783673 26.122449 37.616327 0 35.526531 27.167347-5.224489 76.277551-37.616327 44.930612-33.436735 55.379592 16.718367 50.155102 18.808163-1.044898 43.885714 2.089796 55.379592 8.359184 15.673469 8.359184 32.391837 4.179592 78.367347-20.897959 56.42449-30.302041 59.559184-30.302041 90.906122-14.628572 35.526531 18.808163 38.661224 34.481633 13.583674 81.502041-9.404082 18.808163-16.718367 45.97551-15.67347 61.64898 2.089796 28.212245 1.044898 28.212245-56.424489 28.212244-36.571429-1.044898-61.64898 4.179592-66.87347 11.493878-11.493878 18.808163-41.795918-41.795918-41.795918-82.546939 0-35.526531-24.032653-48.065306-73.142857-37.616326-34.481633 7.314286-36.571429 9.404082-45.975511 50.155102-6.269388 27.167347-5.22449 29.257143 28.212245 26.122449 43.885714-2.089796 59.559184 7.314286 59.559184 39.706122 0 31.346939-30.302041 34.481633-57.469388 4.179592-26.122449-28.212245-32.391837-27.167347-54.334694 17.763265-10.44898 20.897959-29.257143 44.930612-41.795918 53.289796-20.897959 13.583673-24.032653 12.538776-31.346939-3.134694z m334.367347-129.567347c4.179592-4.179592 10.44898-25.077551 14.628572-47.020408l6.269387-38.661224-48.065306 24.032653c-39.706122 19.853061-48.065306 29.257143-49.110204 54.334694 0 28.212245 2.089796 29.257143 33.436735 22.987755 18.808163-3.134694 37.616327-10.44898 42.840816-15.67347zM1995.755102 568.42449c-6.269388-14.628571-7.314286-52.244898-4.179592-83.591837 4.179592-31.346939 3.134694-56.42449-1.044898-56.42449s-24.032653 14.628571-43.885714 31.346939c-65.828571 58.514286-80.457143 24.032653-14.628571-37.616326 54.334694-49.110204 99.265306-114.938776 89.861224-129.567347-4.179592-7.314286-18.808163-9.404082-32.391837-6.269388-21.942857 6.269388-25.077551 3.134694-25.077551-19.853061 0-18.808163 8.359184-30.302041 27.167347-38.661225 14.628571-7.314286 32.391837-22.987755 38.661225-36.571428 12.538776-22.987755 14.628571-22.987755 36.571428-7.314286 30.302041 20.897959 29.257143 50.155102-3.134694 64.783673-25.077551 11.493878-25.077551 12.538776-7.314285 42.840817 16.718367 30.302041 16.718367 32.391837-10.44898 60.604081-20.897959 22.987755-28.212245 43.885714-34.481633 100.310204-4.179592 47.020408-3.134694 70.008163 4.179592 70.008164 6.269388 0 11.493878 16.718367 11.493878 36.571428 0 42.840816-16.718367 48.065306-31.346939 9.404082zM3139.918367 412.734694c-47.020408-45.97551-38.661224-50.155102 144.195919-76.277551 92.995918-12.538776 185.991837-22.987755 205.844898-22.987755 47.020408 1.044898 76.277551 22.987755 71.053061 54.334694-3.134694 21.942857-9.404082 24.032653-83.591837 29.257142-62.693878 4.179592-77.322449 2.089796-68.963265-7.314285 26.122449-32.391837-144.195918-6.269388-192.261225 28.212245-36.571429 27.167347-45.97551 26.122449-76.277551-5.22449z"
                p-id="8099"
                fill="#d4237a"></path>
            </svg>
            {/* <img
              src="https://fe.ycy88.com/images/yb.png"
              alt="logo"
              width="120"
              height="120"
            /> */}
          </Link>
        </h1>

        <nav className={styles['header-nav']}>
          <div className={styles['mobile-nav-button']} onClick={showMobileMenu}>
            <span className="icon-menu" />
          </div>
          {showMobile ? (
            <ul className={styles['mobile-nav-ul']}>
              <li
                className={`${styles['mobile-ul-li']} ${
                  nav === 'home' ? styles['selected-nav-home'] : ''
                }`}>
                <Link href="/">首页</Link>
              </li>
              {/* <li
                className={`${styles['mobile-ul-li']} ${
                  nav === 'hot' ? styles['selected-nav'] : ''
                }`}>
                <Link href="/hot">推荐文章🔥</Link>
              </li> */}
              <li
                className={`${styles['mobile-ul-li']} ${
                  nav === 'links' ? styles['selected-nav'] : ''
                }`}>
                <Link href="/links">友链</Link>
              </li>
              <li className={styles['mobile-ul-li']}>
                <ThemeChanger />
              </li>
            </ul>
          ) : null}

          <ul className={styles['nav-ul']}>
            <li className={styles['ul-li']}>
              <Link href="/">首页</Link>
              {nav === 'home' ? (
                <div className={styles['menu-bottom-bar']}></div>
              ) : null}
            </li>
            {/* <li className={styles['ul-li']}>
              <Link href="/hot">推荐文章🔥</Link>
              {nav === 'hot' ? (
                <div className={styles['menu-bottom-bar']}></div>
              ) : null}
            </li> */}
            <li className={styles['ul-li']}>
              <Link href="/links">友链</Link>
              {nav === 'links' ? (
                <div className={styles['menu-bottom-bar']}></div>
              ) : null}
            </li>
            <li className={styles['ul-li']}>
              <ThemeChanger />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
