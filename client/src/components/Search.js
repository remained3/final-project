import React, { useState, useEffect } from 'react';
import Btn from "./Button";
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@mui/material';

function Search() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");
  
    useEffect(() => {
      const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/mentors"
        );
        setPosts(response.data);
        setLoading(false);
      };
  
      loadPosts();
    }, []);
  
    return (
      <div className="App">
        <h3>Search Filter</h3>
        <input
          style={{ width: "30%", height: "25px" }}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchName(e.target.value)}
        />
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchName === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchName.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => <h5 key={item.id}>{item.name}</h5>)
        )}
      </div>
    );
  }
  

export default Search;
