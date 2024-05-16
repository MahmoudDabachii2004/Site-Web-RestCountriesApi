import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import './style/App.css';
import React, { useState } from 'react';
import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';
import Recherche from './composants/Recherche';
import Pays from './composants/Pays';
import { Menu } from 'semantic-ui-react';
import RechercheCapital from './composants/RechercheCapital';
import RechercheDevise from './composants/rechercheDevise';


//Currency https://restcountries.com/v3.1/all?fields=currencies
//Language
//Calling code donne votre numero de telephone et donne quelle pays

function App() {
    return (

    <React.Fragment>
        <BrowserRouter>
            <header>
                <h2 className='menu' >Menu de navigation</h2>
                <Menu className='NavBarMenu'>
                    <Menu.Item> <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal'})} exact> Accueil </NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/recherche' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5",fontWeight: isActive ? 'bold' : 'normal' })}> Trouver un pays avec son nom</NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/rechercheCapital' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5",fontWeight: isActive ? 'bold' : 'normal' })}> Trouver un pays avec sa capital </NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/rechercheDevise' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal' })}>Trouver Devise D'un Pays</NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/pays' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal' })}> PAYS </NavLink></Menu.Item>
                </Menu>
            </header>
           
         
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/recherche" element={<Recherche />} />
                <Route path="/rechercheCapital" element={<RechercheCapital />} />
                <Route path="/pays/:codePays" element={<Pays />} />
                <Route path="/rechercheDevise" element={<RechercheDevise />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </React.Fragment>
    );
}
export default App;
