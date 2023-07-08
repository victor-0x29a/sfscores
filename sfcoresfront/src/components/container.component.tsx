import React from 'react'
import { ContainerProps } from '../types/prop.type'
import { ContainerStyled } from '../style/components.style'
import CardComponent from './card.component'
import InfiniteScroll from "react-infinite-scroller";
import { BusinessType } from '../types/business.type';
import LoadingComponent from './loading.component';

const ContainerComponent = ({business, search}: ContainerProps) => {
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
            pageStart={loaded.length}
            loadMore={load}
            hasMore={true}
            loader={<LoadingComponent/>}
            className='scroller-corps'
            >
        {!search ? loaded.map((data, index)=> (
            <CardComponent key={index} business={data}/>
        ) ) : business.map((data, index)=> (
            <CardComponent key={index} business={data}/>
        ) )}    
    </InfiniteScroll>
        
    </ContainerStyled>
}

export default ContainerComponent   