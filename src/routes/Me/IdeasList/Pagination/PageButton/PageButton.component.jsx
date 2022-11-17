import './PageButton.scss';

import { useContext } from "react";
import { Spacer } from "../../../../../components/Spacer/Spacer.component";
import { MyIdeasContext } from "../../../../../contexts/MyIdeas.context";

export const PageButton = ({ page }) => {
    const { updateMyIdeas, currentPage } = useContext(MyIdeasContext);

    const activeClass = currentPage === page ? 'font-headline-mobile-4 color-n-60 active' : 'font-link-1 color-n-40';
    
    const onPageChange = () => {
        updateMyIdeas(page);
        window.scrollTo(0, 0);
    }

    return (
        <div className='PageButton'>
            <span className={activeClass} onClick={onPageChange}>{page}</span>
            <Spacer dir='x' size='xl' />
        </div>
    );
}