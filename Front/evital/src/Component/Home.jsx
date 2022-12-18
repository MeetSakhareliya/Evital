import ItemList from "./ItemList";
import Search from "./Search";
import { useState } from "react";
const Home =()=>{
    const [search,setSearch]=useState('');
    return(
        <>
            <div  className="container">
                <Search search={search} setSearch={setSearch}/>
                <ItemList search={search}/>
            </div>
        </>
    );
}

export default Home;