import React from 'react';
import styles from "./Search.module.scss";

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5 mt-3">
        <input 
            onChange={e =>{
                setSearch(e.target.value);
                setPageNumber(1);
            }}
            placeholder="Search for Characters" 
            type="text" 
            className={styles.input} 
        />
        <button onClick={e => {e.preventDefault()}} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search
