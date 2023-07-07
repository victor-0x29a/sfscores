import React from 'react'
import {SidebarStyled} from '../style/components.style'
import { URIDatas } from '../data/map.data'
import {NavLink} from 'react-router-dom'

const SidebarComponent = () => {

    return (<SidebarStyled>
        <ul>
            <li>
                <h1>
                    SFSCores
                </h1>
            </li>
            <li>
                <ol>
                    {URIDatas.map((data, index)=> (
                        <li key={index}>
                            <NavLink to={data.Uri} replace={true}>
                                {data.Text}
                            </NavLink>
                        </li>
                    ))}
                </ol>
            </li>
        </ul>
    </SidebarStyled>)
}

export default SidebarComponent