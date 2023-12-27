
import Container from "../../Main/Card/CardContainer/CardContainer";
import SearchBox from "../SearchBox/SearchBox";
import {Beer} from "../../mock-data/types"
import { useState, FormEvent } from "react";
import "../../App.scss"

type FilterProps = {
    beer : Beer[];


};

const FilterList = ({beer}:FilterProps) => {
    const [search, setSearch] = useState<string>("");
    
    const handleInput = (event:FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    };

    const filteredBeer = beer.filter( bottle => {
        return bottle.name.toLowerCase().includes(search.toLowerCase());
      
    
    });

    return (<>
        
    <div>
    <SearchBox searchTerm={search} handleInput={handleInput}/>
    <Container beer={filteredBeer}/>
    </div>
    </>
)}

export default FilterList;