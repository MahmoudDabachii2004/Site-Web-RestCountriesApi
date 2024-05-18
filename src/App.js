import { BrowserRouter, Route, NavLink, Routes, Outlet } from 'react-router-dom';
import './style/App.css';
import React, { useContext, useState } from 'react';
import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';
import Recherche from './composants/Recherche';
import Pays from './composants/Pays';
import RechercheCapital from './composants/RechercheCapital';
import RechercheDevise from './composants/RechercheDevise';
import RechercheLangue from './composants/RechercheLangue';
import RechercheRegion from './composants/RechercheRegion';
import Header from './composants/Header';

//Currency https://restcountries.com/v3.1/all?fields=currencies
//Language
//Calling code donne votre numero de telephone et donne quelle pays


function Footer() {
    
    return (
    <footer>
        <p>© 2024 Mon Site Web</p>
    </footer>
    );
  }

function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

export const Context = React.createContext()

function App() {

    const [name, setName] = useState("[Changer Votre Nom!]")

    return (
    <Context.Provider value={[name, setName]}>
      <React.Fragment>
          <BrowserRouter>
              <Header name={name}/>
                  <Routes>
                      <Route path="/" element={<Layout />}>
                          <Route index element={<Accueil message="Bienvenu a vous " />} />
                          <Route path="/recherche" element={<Recherche />} />
                          <Route path="/rechercheCapital" element={<RechercheCapital />} />
                          <Route path="/pays/:codePays" element={<Pays />} />
                          <Route path="/rechercheDevise" element={<RechercheDevise />} />
                          <Route path="/rechercheRegion" element={<RechercheRegion />} />
                          <Route path="/rechercheLangue" element={<RechercheLangue />} />
                          <Route path="*" element={<Page404 />}  />
                      </Route>
                  </Routes>
              <Footer />

          </BrowserRouter>
      </React.Fragment>
    </Context.Provider >
    );
}
export default App;
