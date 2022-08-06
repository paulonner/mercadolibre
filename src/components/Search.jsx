import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import searchIcon from 'assets/ic_Search@2x.png'
import search from 'styles/Search.module.css'

const Search = ({ placeholder }) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = ({ keyCode }) => {
    if (keyCode === 13) {
      router.push(`/items?search=${searchValue}`)
    }
  }

  const handleClick = () => {
    if (searchValue) {
      router.push(`/items?search=${searchValue}`)
    }
  }

  return (
    <>
      <input
        className={search.input}
        type="text"
        placeholder={placeholder}
        onKeyUp={handleSearch}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button className={search.button} onClick={handleClick}>
        <Image src={searchIcon} width={18} height={18} alt="search" />
      </button>
    </>
  )
}

export default Search
