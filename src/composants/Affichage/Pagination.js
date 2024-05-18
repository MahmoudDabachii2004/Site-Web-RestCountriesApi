import React, { useRef, useState } from 'react';
import RenderPays from './renderPays';


const Pagination = ({pays, itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(pays.length / itemsPerPage);
    const [currentPageColor, setcurrentPageColor] = useState(1);

    const currentPays = pays.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "2em" }}>
                <RenderPays pays={currentPays}/>
            </div>
            box-shadow: ;
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", width: "50%", margin: "auto", marginTop: "2em", gap: "0.5em", borderRadius: "1em",padding: "1em",boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", backgroundColor : "#98c1d9"}}>
                {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)}           style={{
                    display: "flex",
                    borderRadius: "20%",
                    border: "0",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    backgroundColor: currentPage === (index + 1) ? "#293241" : "#e0fbfc", // Change color based on current page
                    color: currentPage === (index + 1) ? "#e0fbfc" : "#293241", // Change text color based on current page
                    padding: "8px"
                }}
                  onClick={() => setCurrentPage(index + 1) }
                >
                    {index+1}
                </button>
                ))}
            </div>
        </div>


    )
}


export default Pagination