import React, { useState } from "react";
import axios from "axios";
import Pagination from './pagination'; 
 

function Gallery() {
  const [term, setTerm] = useState("");
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [picsPerPage, setPicsPerPage] = useState(10); 

  const changeHandler = e => {
    setTerm(e.target.value);
    console.log(term);
  };

  

  const sendRequest = e => {
    e.preventDefault();
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          page: currentPage,
          per_page: picsPerPage,
          
        },
        headers: {
          Authorization:
            "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400",
        }
      })
      .then(response => {
        setPictures([...response.data.results]);
      })
      .catch(error => {
        console.log(error.message);
    });
  };
  
  
  //get current pics
  const indexOfLastPic = currentPage * picsPerPage; 
  const indexOfFirstPic = indexOfLastPic - picsPerPage; 
  const currentPics = pictures.slice(indexOfFirstPic, indexOfLastPic); 

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); 

  return (
    <div className="main container m-5 pt-3 rounded">
        <form onSubmit={sendRequest} className="pb-3">
            <input className="pb-3"
            type="text"
            onChange={changeHandler}
            className="form-control col-8 "
            />
            <input 
            type="submit" 
            value="Search on Unsplash..." 
            className="btn mt-1 btn-primary col-4" />
        </form>
        <Pagination 
            picsPerPage={picsPerPage} 
            totalPics={pictures.length}
            paginate={paginate} />
        <div  className="gallery card-columns">
        {pictures.length
        ? pictures.map(pic => (
            
                <div key={pic.id} className="">
                    <div className="card"> 
                        <img src={pic.urls.thumb} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{pic.id}</h5>
                        <p className="card-text">This is Pic with the id:{pic.id}.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            
        ))
        : null}
        </div>
    </div>
  );
}; 

export default Gallery;