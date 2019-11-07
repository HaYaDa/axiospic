import React from 'react'

export const Pictures = ({pictures, loading}) => {
    if(loading){
        return <div><div className="spinner spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner spinner-grow text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div></div>; 
    }

    return (
        <div  className="gallery card-columns">
        {pictures.length
        ? pictures.map(pic => (
            <div key={pic.id} className="">
                <div className="card"> 
                    <img src={pic.urls.small} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{pic.user.username}</h5>
                    <p className="card-text">{pic.alt_description}.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        ))
        : null}
        </div>
    )
}

export default Pictures; 
