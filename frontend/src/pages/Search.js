import React, { useState } from "react";
import Train from "../components/Train";
import axios from "axios";

const Search = () => {
    const [train, setTrain] = useState();
    const [isData, setisData] = useState(false);
    const [number,setNumber]=useState();
    const getTrain=async()=>{
        const result = await axios.get(`http://localhost:5000/searchtrain/${number}`);
        setTrain(result.data);
        setisData(true);
    };
  return (
    <>
    <div className="input-group">
        <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={e=>setNumber(e.target.value)}
        />
        <button type="button" className="btn btn-outline-primary" onClick={getTrain}>
            search
        </button>
    </div>
    {isData && <Train props={train}/>}
    </>
  );
};

export default Search;