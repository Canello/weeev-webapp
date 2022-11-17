import { useContext, useEffect, useState } from 'react';

import './Pagination.scss';

import { MyIdeasContext } from '../../../../contexts/MyIdeas.context';
import { PageButton } from './PageButton/PageButton.component';

export const Pagination = () => {
    const { currentPage, totalPages } = useContext(MyIdeasContext);
    
    const [ pages, setPages ] = useState([]);
    
    useEffect(() => {
        const pagesToSet = [];
        for (let i = 1; i <= totalPages; i++) {
            const page = <PageButton key={i} page={i} />;
            pagesToSet.push(page);
        }
        setPages(pagesToSet);
    }, [totalPages, currentPage]);

    return (
        <div className='Pagination'>
            {pages}
        </div>
    );
}