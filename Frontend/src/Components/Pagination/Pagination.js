import React from "react";
import {
    Pagination,
} from 'react-bootstrap';

// CSS
import '../component.css';

const Cards = ({ 
    postsPerPage, 
    totalPosts, 
    paginate, 
    nextPage, 
    prevPage, 
    currentPage 
    }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination-wrapper">
            <Pagination>
                <Pagination.First onClick={() => paginate(pageNumbers[0])} />
                <Pagination.Prev 
                    onClick={() => prevPage()} 
                    disabled={(currentPage <= pageNumbers[0]) ? true : false}
                />
                {pageNumbers.map(number => (
                    <Pagination.Item
                        onClick={() => paginate(number)}
                        // href={'?page=' + number }
                        href=''
                        active={(number == currentPage) ? true : false}
                    >
                        {number}
                    </Pagination.Item>
                ))}
                <Pagination.Next 
                    onClick={() => nextPage()}
                    disabled={(currentPage >= pageNumbers.length) ? true : false}
                />
                <Pagination.Last onClick={() => paginate(pageNumbers.length)} />
            </Pagination>
        </div>
    )
};

export default Cards;