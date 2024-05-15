import { Button, Container, Input, Label, Card, Image } from "semantic-ui-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const RechercheCapital = (props) => {
    const [nom, setNom] = useState("")
    const [pays, setPays] = useState([])

    const onClick = () => {
        fetch(`https://restcountries.com/v3.1/capital/${nom}?fields=cca3,name,flags,capital`)
            .then((response) => response.json())
            .then((data) => setPays(data))
            .catch((erreur) => console.log(erreur));
    }

    console.log(pays)
    /*  const renderPays = () => {
       return pays.map((counter)=>{ return (<Card> hi</Card>) })
    }
    */

    const renderPays = () => {
        return pays.map((moncompteur) => {
            console.log(moncompteur)
            return (
                <Link to={`/pays/${moncompteur.cca3}`}>
                <Card key={moncompteur.cca3}>
                    <Image src={moncompteur.flags.png} />
                    <Card.Content>
                        <Card.Header>                        
                            <h3>Capital: {moncompteur.capital[0]}</h3>
                        </Card.Header>

                    </Card.Content>

                </Card>
                </Link>
            )
        })
    }

    return (
        <Container className="containerRecherche">
            <div className="allInput">
                <h1>Recherche Nom Capital</h1>
                <div className="inputPAys">
                    <Label pointing="right">Capital</Label>
                    <Input type="text" value={nom} onChange={(e) => setNom(e.target.value)}></Input>
                </div>
                <Button onClick={onClick}>Rechercher le pays</Button>
            </div>

            <h2> Résultats de la recherche : </h2>
            {pays.length > 0 ? `Il y a ${pays.length} résulat(s)` : undefined}
            <div id="AllDrapeaux" className="AllDrapeaux" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
                {pays.length > 0 ? renderPays() : <h1>Aucun pays trouvé. Veuillez entrer une capitale valide.</h1>}
            </div>
        </Container>
    )


};

export default RechercheCapital;