import { Button, Container, Input, Label, Card, Image } from "semantic-ui-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Recherche = (props) => {
    const [nom, setNom] = useState("")
    const [pays, setPays] = useState([])

    const onClick = () => {
        fetch(`https://restcountries.com/v3.1/name/${nom}?fields=cca3,name,flags`)
            .then((response) => response.json())
            .then((data) => setPays(data))
            .catch((erreur) => console.log(erreur));
    }

    console.log(pays)


    const renderPays = () => {
        return pays.map((moncompteur) => {
            return (
                <Link to={`/pays/${moncompteur.cca3}`}>
                    <Card key={moncompteur.cca3}>
                        <Image src={moncompteur.flags.png} />
                        <Card.Content>
                            <Card.Header>
                            {moncompteur.name.common}
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
                <h1>Entrer Un Nom De Pays</h1>
                <div className="inputPAys">
                    <Label pointing="right">Pays</Label>
                    <Input type="text" value={nom} onChange={(e) => setNom(e.target.value)}></Input>
                </div>
                <Button onClick={onClick}>Rechercher</Button>
            </div>

            <h2> Résultats de la recherche : </h2>
            {pays.length > 0 ? `Il y a ${pays.length} résulat(s)` : undefined}
            <div id="AllDrapeaux" className="AllDrapeaux" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
                {pays.length > 0 ? renderPays() : <h1>Aucun pays trouvé. Veuillez entrer une pays valide.</h1>}
            </div>
        </Container>
    )


};

export default Recherche;