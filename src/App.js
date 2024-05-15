import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';
import Recherche from './composants/Recherche';
import Pays from './composants/Pays';
import { Menu } from 'semantic-ui-react';
import RechercheCapital from './composants/RechercheCapital';


function App() {
    return (

    <React.Fragment>
        <BrowserRouter>
            <header>
                <h2 className='menu' >Menu de navigation</h2>
                <Menu className='NavBarMenu'>
                    <Menu.Item> <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal'})} exact> Accueil </NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/recherche' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5",fontWeight: isActive ? 'bold' : 'normal' })}> Trouver un pays </NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/rechercheCapital' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5",fontWeight: isActive ? 'bold' : 'normal' })}> Trouver un pays avec la capital </NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/pays' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal' })}> PAYS </NavLink></Menu.Item>
                </Menu>
            </header>
           
         
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/recherche" element={<Recherche />} />
                <Route path="/rechercheCapital" element={<RechercheCapital />} />
                <Route path="/pays/:codePays" element={<Pays />} />
                
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </React.Fragment>
    );
}
export default App;
