import React from 'react'

const SearchFilter = ({search,setSearch,setFilter,filter}) => {
    // handle search
    const handleSearch = (event)=>{
        setSearch(event.target.value)
    }
    // handle filter
    const handleFilter = (event)=>{
        setFilter(event.target.value)
    }
  return (
    <div className=' max-w-5xl mx-auto flex justify-around items-center my-2'>
        <input className=' outline-none p-3 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg focus:ring ring-gray-500' type="text" placeholder='search coutnry' value={search} onChange={handleSearch} />

        <select className='bg-gray-700 hover:bg-gray-600   text-gray-300 outline-none focus:ring ring-gray-500 p-3 rounded-lg ' value={filter} onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Austelia">Austelia</option>
        </select>
    </div>
  )
}

export default SearchFilter