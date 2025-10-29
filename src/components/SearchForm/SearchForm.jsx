import React, { useEffect, useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import "./SearchForm.css"
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
    const {setSearch, setResultTitle} = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate()

    useEffect(()=>{
        searchText.current.focus();
    },[]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let tempSearch = searchText.current.value.trim();
        if((tempSearch.replace(/[^\w\s]/gi,"")).length === 0){
            setSearch("The Lost World");
            setResultTitle("Please Enter Something...")
        }else{
            setSearch(searchText.current.value)
        }

        navigate("/book")
    };
    
  return (
    <div className='search-form'>
        <div className='container'>
            <div className='search-form-content'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <div className='search-form-elem flex flex-sb bg-white'>
                        <input type="text"
                        className='form-control'
                        placeholder='The Lost World ...' 
                        ref={searchText}/>
                        <button className='flex flex-c' type='submit' onClick={handleSubmit}>
                            <FaSearch className='text-purple' size={32}/>
                        </button>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SearchForm