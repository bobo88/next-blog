import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ value,onChange, onClickSearch,className }) {
  return (
    <div className={styles["search-box-wrap"] + " " + className}>
      <input
        className={styles["search-input"]}
        placeholder="搜索文章标题..."
        type="text"
        id="title-search"
        name="title-search"
        
        value={value}
        onChange={onChange}
      ></input>
      <button aria-label="Search Post Title" onClick={onClickSearch} className={styles["search-button"]}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <title></title>
          <g id="icomoon-ignore"></g>
          <path d="M496.131 435.698l-121.276-103.147c-12.537-11.283-25.945-16.463-36.776-15.963 28.628-33.534 45.921-77.039 45.921-124.588 0-106.039-85.961-192-192-192s-192 85.961-192 192 85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-0.5 10.831 4.68 24.239 15.963 36.776l103.147 121.276c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.307 128-128 128z"></path>
        </svg>
      </button>
    </div>
  );
}