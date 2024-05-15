import React from "react";
import { Container } from "semantic-ui-react";
import logoAcceuil from "../logoAcceuil.png"; // Adjust the path accordingly

const Accueil = (props) => { 
    return (
        <Container>
            <div className="container">
                <div className="titreAcceuil">
                    <h1 className="titreAcceuilTexte">Bienvenue sur mon site web sur les PAYS!!!</h1>
                </div>
                <div className="imageAcceuil">
                    <img className="laTerre"src={logoAcceuil} alt=""/>
                </div>
            </div>
            <div className="ligne"></div>
        </Container>
    );
};

export default Accueil;
