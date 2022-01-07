import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { SidebarObj } from '../utils/Sidebar'
import Sidebar from '../Sidebar/Index.jsx'
import Navbar from '../components/Navbar/Index'
import { Container,Wrapper } from './Style'
export default function Index() {
    return (
        <Wrapper>
            <Navbar/>
           <div>
           <BrowserRouter>
            <Container>
            <Sidebar/>
            <Routes>
                {SidebarObj.map(({id,path:pathname,Component})=>(
                    <Route key={id} path={pathname} element={<Component/>} />
                ))} 
            </Routes>
            </Container>
            </BrowserRouter>
           </div>
        </Wrapper>
    )
}
