import React from 'react';

function SearchResult() {
  return (
    <section className="mentor-container">
     <img className="mentor-picture" src={avatar} alt="" />
     <div className="mentor-details">
       <h4>{name}</h4>
       <h5><span id="bio">Bio:</span>{Bio}</h5>
       <h5><span id="uni">University:</span>{university}</h5>
     </div>
     <Link to={`mentor/${id}`} >
       <Button name='Reach out' bgColor={buttonColor}></Button>
     </Link>
    </section>
 );
};


export default SearchResult;