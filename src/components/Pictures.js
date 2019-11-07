import React from 'react'

export const Pictures = ({pictures, loading}) => {
    if(loading){
        return <h2>Loading...</h2>; 
    }

    return (
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
    )
}

export default Pictures; 
