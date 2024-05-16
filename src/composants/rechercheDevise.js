import { Card, Container } from "semantic-ui-react"

import '../style/rechercheDevise.css';
import { useEffect, useState } from "react";

const api = "https://restcountries.com/v3.1/"



// const renderDevise = async (data) => {
//     console.log(data)
//     // return data.map((devise) => {
//     //     return (
//     //         <Card key={devise.currencies[0]}>
//     //         <Card.Content>
//     //             <Card.Header>
//     //             {devise.currencies[0]}
//     //             </Card.Header>
//     //         </Card.Content>
//     //         </Card>
//     //     )
//     // })

// }


const RechercheDevise = () => {

    const [devises, setDevises] = useState([]);
    const [devisesCode, setDevisesCode] = useState({});

  
    useEffect(() => {
        fetchDevise();
    }, []);


    const fetchDevise = async () => {
        try {
            const dataDevise = await fetch(api + "all?fields=currencies");
            const fetchedData = await dataDevise.json();
            setDevises(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    

    const getCurrencyAllCode = () => {
        devises.forEach((devise) => {
            Object.keys(devise.currencies).forEach((currencyCode) => {
                if (!(currencyCode in devisesCode)) {
                    setDevisesCode(prevState => ({ ...prevState, [currencyCode]: devise.currencies[currencyCode] }));
                }
            });
        });
    }


    useEffect(() => {
        if (devises.length > 0) {
            getCurrencyAllCode();
        }
    }, [devises])
    


    const renderDevise = () => {
        return Object.keys(devisesCode).map((currencyCode) => {
            const currencyName = devisesCode[currencyCode].name;
            const currencySymbol = devisesCode[currencyCode].symbol;
            return (
                    <Card key={currencyCode} className="UneCartes">
                        <Card.Content>
                            <Card.Header>
                                <h1 className="currencySymbol">{currencySymbol}</h1>
                                <h3 className="currencyName">{currencyName}</h3>
                            </Card.Header>
                        </Card.Content>
                    </Card>
            );
        });
    };
    
    
    
    // return (

    return (
        <Container>
            <div className="containerDevise">
                <div>
                    <h1>Les Devises</h1>
                    <h3>Choisissez Votre Devise</h3>
                </div>
                <div id="LesDeviseBox" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "90%" }}>
                    {devises.length > 0 ? renderDevise() : <h1>Erreur Aucune Devise Trouver.</h1>}
                </div>
            </div>
            <br />
        </Container>
    )
}

export default RechercheDevise