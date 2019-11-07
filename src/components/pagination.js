import React from 'react'; 

const Pagination = ({picsPerPage, totalPics, paginate, changePage}) => {
    const pageNumbers = []; 

    for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++){
        pageNumbers.push(i); 
    }
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item" onClick={changePage}>
                    <a 
                    name="dec"
                    
                    className="page-link" 
                    href="!#" tabIndex="-1" aria-disabled="true"
                    >Previous</a>
                </li>
                {pageNumbers.map(number => (
                   <li key={number} className="page-item">
                       <a onClick={() =>paginate(number)} className="page-link" href="!#">{number}</a>
                   </li> 
                ))}
                
                
                
                <li className="page-item">
                    
                    <a 
                        onClick={changePage}
                        name="inc"
                        className="page-link" href="!#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination

