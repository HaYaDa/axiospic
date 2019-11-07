import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Pictures from './components/Pictures'; 
import Pagination from './components/pagination';

//import Gallery from './components/second';

import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false); 
  const [pictures, setPictures] = useState([]); 
  const [currentPage, setCurrentPage] = useState("1"); 
  const [picsPerPage] = useState("5"); 
  const [shouldRef, setShouldRef] = useState(false)
  //const [prevPage] = useState(currentPage-1);
  //const [nextPage] = useState(currentPage+1); 

  useEffect(() => {
    const fetchpics = async () => {
      setLoading(true);
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: "coding",
          page: 1,
          per_page: 30
        },
        headers: {
          Authorization:
            "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"
        }
      });
      setPictures(response.data.results);
      setLoading(false); 
    }
    fetchpics(); 
  }, []); 

  

  console.log('picz ='+pictures);
 
  // Method for the Search-Input
  const changeHandler = e => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  

  // Search-Request by onclick on SEARCH-Button
  const sendRequest = e => {
    e.preventDefault();
    setLoading(true); 
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: searchTerm,
          page: 1,
          per_page: 30
        },
        headers: {
          Authorization:
            "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"
        }
      })
      .then(response => {
        setPictures(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
      setLoading(false); 
      

      
  };

  // Get current Pictures
  const indexOfLastPic = currentPage * picsPerPage; 
  const indexOfFirstPic = indexOfLastPic - picsPerPage; 
  const currentPics = pictures.slice(indexOfFirstPic, indexOfLastPic); 

  console.log("indexOfFirstPic ="+indexOfFirstPic); 
  console.log("indexOfLastPic ="+indexOfLastPic); 
  console.log("currentPage="+currentPage); 

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); 
  //const backPagin = () => setCurrentPage(prevPage); 
  //const forPagin = () => setCurrentPage(nextPage); 
  const changePage = e => {
    e.preventDefault(); 
    e.target.name === "inc"
      ? setCurrentPage(currentPage + 1)
      : e.target.name === "dec" && currentPage > 1 
      ? setCurrentPage(currentPage - 1)
      :setCurrentPage(e.target.value);
      setShouldRef(true); 
  }


  return (
    <div className="main text-white text-primary container mt-2 rounded p-2 text-center">
      <h1 className="bolded">My Pic-Search</h1>
      <form  onSubmit={sendRequest} className="d-flex flex-column align-items-center form-group text-center pb-3">
        <input className="form-control pb-3" type="text" onChange={changeHandler} className="form-control col-8 "/>
        <input 
        type="submit" 
        value="Search on Unsplash..." 
        className="form-control btn mt-3 btn-primary col-5" />
      </form>
        
        <Pagination 
          picsPerPage={picsPerPage}
          totalPics={pictures.length}
          paginate={paginate}
          changePage={changePage} />
        <Pictures 
          pictures={currentPics} 
          loading={loading} />
    </div>
  )
}

