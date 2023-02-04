import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber, setPageNumber, info}) => {


    let next = () => {
        setPageNumber((x) => x +1);
    }

    let prev = () => {
        if(pageNumber === 1) return;
        setPageNumber((x) => x - 1);
    }

    return (
    
            <ReactPaginate 
                containerClassName="pagination"
                className='pagination justify-content-center gap-1 my-4'
                nextLabel="Next"
                previousLabel="Previuos"
                nextClassName="page-item"
                previousClassName="page-item"
                pageClassName='page-item'
                pageLinkClassName='page-link'
                nextLinkClassName="page-link"
                previousLinkClassName="page-link"
                activeClassName='active'
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1);
                }}
                pageCount={info?.pages}
            />
            
            )
}

export default Pagination
