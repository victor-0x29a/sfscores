import React from 'react'
import { ContainerProps } from '../types/prop.type'
import { ContainerStyled } from '../style/components.style'
import CardComponent from './card.component'

const ContainerComponent = ({business}: ContainerProps) => {

    return <ContainerStyled>
        {business.map((data, index)=> (
            <CardComponent key={index} business={data}/>
        ) )}
    </ContainerStyled>
}

export default ContainerComponent   