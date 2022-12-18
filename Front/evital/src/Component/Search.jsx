import '../CSS/search.css';
import { useRef } from 'react';
import search from '../assest/images/search.jpg';
const Search=(props)=>{
    const searchRef=useRef();

    const searchChangeHandler=()=>{
        props.setSearch(searchRef.current.value);
    }

    return (
        <div className='search_main_container'>
            <div className="search_container">
                    <img src={search} className="search_img"></img>
                <input type="text" ref={searchRef} onChange={searchChangeHandler} className='search_input' placeholder='Search'>
                </input>
            </div>
        </div>
    );
};

export default Search;