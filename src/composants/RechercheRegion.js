import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom"; 
import { Button, Container, Input, Card, Image } from "semantic-ui-react";

import Pagination from "./Affichage/Pagination";

const RechercheRegion = () => {
    const [region, setRegion] = useState("");
    const [pays, setPays] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const regionParam = searchParams.get("region");

        if (regionParam !== "") {
            setRegion(regionParam);
            fetch(`https://restcountries.com/v3.1/region/${regionParam}`)
                .then((response) => response.json())
                .then((data) => setPays(data))
                .catch((error) => console.log(error));
        }
    }, [searchParams]);


    return (
        <Container className="containerRecherche">
            <form>
                <div className="allInput">
                    <h1>De quelle région venez-vous ?</h1>
                    <Input
                        className="inputPays"
                        type="text"
                        name="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}/>
                    <br />
                    <Button type="submit">Rechercher</Button>
                </div>
            </form>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%", marginTop: "5em"}}>
                {pays.length > 0 ? <Pagination pays={pays} itemsPerPage={6}/> : (<h1>Aucun pays trouvé. Veuillez entrer une région valide.</h1>)}
            </div>
        </Container>
    );
};

export default RechercheRegion;
