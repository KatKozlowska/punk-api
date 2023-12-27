
import beers from "../mock-data/beers";
import Container from "./Card/CardContainer/CardContainer";
import "./Main.scss"
import FilterList from "../Nav/FilterList/FilterList";
import { useState } from "react";
import Pagination from "./Card/Pagination";



const Main = () => {
    
   
return(
    <div>
    <h1>Main</h1>
    <FilterList beer={beers}/>

    </div>
)
};

export default Main;