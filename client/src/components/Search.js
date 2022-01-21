import React, { useState } from 'react';
import { usehistory } from 'react-router-dom'

function Search() {
  const history = usehistory();
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  useEffect (() =>{
    if(search.length > 0) {
      const mentors=`http://localhost:8080/api/mentors`
      axios.get(mentors)
      .then((results) => {
        setResult([])
        let searched = value.toLowerCase();
        for (const key in results) {
          let mentorName = results[key].name.toLowerCase();
          if(mentorName.slice(0, searched.length).indexOf(searchQuery) !== -1) {
            setResult(prevResult => {
              return[...prevResult, reesults[key].name]
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
  <Button onClick={()=> history.push('/search')}/>
</form> ;

}

export default Search;
