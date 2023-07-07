import React from 'react'
import { ContainerProps } from '../types/prop.type'
import { ContainerStyled } from '../style/components.style'
import CardComponent from './card.component'
import InfiniteScroll from "react-infinite-scroller";
import { BusinessType } from '../types/business.type';

const ContainerComponent = ({business}: ContainerProps) => {
    const [loaded, setLoaded] = React.useState<BusinessType[]>([])

    const load = () => {
        for(let i = loaded.length; i < (loaded.length + 100); i++) {
            if (business[i]) {
                setLoaded(l => [...l, business[i]])
            }
        }
    }


    return <ContainerStyled>
         <InfiniteScroll
            pageStart={0}
            loadMore={load}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
            className='scroller-corps'
            >
        {loaded.map((data, index)=> (
            <CardComponent key={index} business={data}/>
        ) )}    
    </InfiniteScroll>
        
    </ContainerStyled>
}

export default ContainerComponent   