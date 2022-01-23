import React, { useState, useEffect } from 'react';
import Btn from "./Button";
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@mui/material';

function Search() {
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  useEffect (() =>{
    if(search.length > 0) {
      const mentors=`http://localhost:8080/api/mentors`
      axios.get(mentors)
      .then((results) => {
        setResult([])
        let searched = results.toLowerCase();
        for (const key in results) {
          let mentorName = results[key].name.toLowerCase();
          if(mentorName.slice(0, searched.length).indexOf(search) !== -1) {
            setResult(prevResult => {
              return[...prevResult, results[key].name]
            });
          }
        }
       }).catch(error => {console.log(error)})

    }else {setResult([''])}
  },[search]
  )
  

  return <form className="search-box">
  <input id="my-input" placeholder="mentor name..." onChange={(event) => setSearch(event.target.value)}/>
  
  <span id="icon">
    <FontAwesomeIcon icon={faSearch}/>
  </span>
</form> ;

}

export default Search;
