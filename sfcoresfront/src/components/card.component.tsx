import React from 'react'
import { CardProps } from '../types/prop.type'
import { CardStyled } from '../style/components.style'
import { useNavigate } from 'react-router-dom'

const CardComponent = ({business}: CardProps) => {
    const navigate = useNavigate();
    return <CardStyled onClick={()=>navigate(`/corp/${business.business_id}`)}>
        <span>
            {business.name}
        </span>
    </CardStyled>
}

export default React.memo(CardComponent)