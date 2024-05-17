import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom"; 
import { Button, Container, Input, Card, Image } from "semantic-ui-react";

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

    
    const renderPays = () => {
        return pays.map((country) => (
            <Link to={`/pays/${country.cca3}`} key={country.cca3}>
                <Card>
                    <Image src={country.flags?.png} />
                    <Card.Content>
                        <Card.Header>
                            <h3>{country.name.common}</h3>
                            <h5>{country.continents[0]}</h5>
                        </Card.Header>
                    </Card.Content>
                </Card>
            </Link>
        ));
    };

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
                {pays.length > 0 ? (renderPays()) : (<h1>Aucun pays trouvé. Veuillez entrer une région valide.</h1>)}
            </div>
        </Container>
    );
};

export default RechercheRegion;
