import React from 'react'
import {Route, Routes} from 'react-router-dom'
import SidebarComponent from '../components/sidebar.component'
import HomePage from '../pages/home.page'
import CorpPage from '../pages/corp.page'

const Rotas = () => {

    return (
        <>
            <SidebarComponent/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/corp/:id" element={<CorpPage/>}/>
            </Routes>
        </>
    )
}

export default Rotas;