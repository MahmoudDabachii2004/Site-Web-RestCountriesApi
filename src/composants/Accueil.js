import React, { useContext, useState } from "react";
import { Container, Input } from "semantic-ui-react";
import logoAcceuil from "../logoAcceuil.png"; // Adjust the path accordingly

import { Context } from "../App";


const Accueil = (props) => { 

    const [name, setName] = useContext(Context)


    return (
        <Container>
            <div className="container">
                <div className="titreAcceuil">
                <h1 className="titreAcceuilTexte">{props.message} {name} sur mon site web sur les PAYS!!!</h1>
                </div>
                <div className="inputUser">
                    <label htmlFor="">Entrer Votre Nom</label>
                    <Input maxLength={30} onChange={(e) => setName(e.target.value) }></Input>
                </div>
                <div className="imageAcceuil">
                    <img className="laTerre" src={logoAcceuil} alt=""/>
                </div>
            </div>
            <div className="ligne"></div>
        </Container>
    );
};

export default Accueil;
