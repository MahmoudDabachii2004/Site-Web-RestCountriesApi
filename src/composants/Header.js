
import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react';




const Header = ()  => {
    return (
        <header>
        <h2 className='menu' >Menu de navigation</h2>
        <Menu className='NavBarMenu'>
            <Menu.Item> <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal'})} exact> Accueil </NavLink></Menu.Item>
            <Menu.Item> <NavLink to='/recherche' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5",fontWeight: isActive ? 'bold' : 'normal' })}> Trouver un pays avec son nom</NavLink></Menu.Item>
            <Menu.Item> <NavLink to='/rechercheCapital' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5",fontWeight: isActive ? 'bold' : 'normal' })}> Trouver un pays avec sa capital </NavLink></Menu.Item>
            <Menu.Item> <NavLink to='/rechercheDevise' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal' })}>Trouver Devise D'un Pays</NavLink></Menu.Item>
            <Menu.Item> <NavLink to='/rechercheRegion' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal' })}>Trouver Les Pays Dans Votre Region</NavLink></Menu.Item>
            <Menu.Item> <NavLink to='/rechercheLangue' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal' })}> Trouver un pays avec sa langue </NavLink></Menu.Item>
            <Menu.Item> <NavLink to='/pays' style={({ isActive }) => ({ color: isActive ? "#EEEEEE" : "#00ADB5", fontWeight: isActive ? 'bold' : 'normal' })}> PAYS </NavLink></Menu.Item>
        </Menu>
    </header>
    )
}


export default Header