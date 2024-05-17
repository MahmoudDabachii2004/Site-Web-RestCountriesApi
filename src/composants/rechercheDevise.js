import { Card, Container, Image } from "semantic-ui-react"

import '../style/rechercheDevise.css';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const api = "https://restcountries.com/v3.1/"



const RechercheDevise = () => {
    const containerRef = useRef(null);

    const [devises, setDevises] = useState([]);
    const [devisesCode, setDevisesCode] = useState({});

  
    //Permet de fetch les devise a l'affichage du composant
    useEffect(() => {
        fetchDevise();
    }, []);


    //Permet de recuper tout les codes possible des Devise quand le state devises n est pas vide
    useEffect(() => {
        if (devises.length > 0) {
            getCurrencyAllCode();
            console.log("hi")

        }
    }, [devises])
    

    useEffect(() => {
        if (Object.keys(devisesCode).length > 0) {
            setAffichage(renderDevise());
        }
    }, [devisesCode])
    

    //permet de recuper de l'api restcountries les currencies
    const fetchDevise = async () => {
        try {
            const dataDevise = await fetch(api + "all?fields=currencies");
            const fetchedData = await dataDevise.json();
            setDevises(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    

    //parcours les object devise et les mets dans un state
    const getCurrencyAllCode = () => {
        devises.forEach((devise) => {
            Object.keys(devise.currencies).forEach((currencyCode) => {
                if (!(currencyCode in devisesCode)) {
                    setDevisesCode(prevState => ({ ...prevState, [currencyCode]: devise.currencies[currencyCode] }));
                }
            });
        });
    }



    const [LesDeviseBoxStyle, setLesDeviseBoxStyle] = useState({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        transition: "all 1s ease-in-out",
        height: "auto",
        

    });
    
    const AfficherPays = async (currencyCountry) => {
        setopacityCard(0)
        setTimeout(async () => {
            const data = await fetch(`https://restcountries.com/v3.1/currency/${currencyCountry}`);
            const pays = await data.json();
            console.log(pays)
            setopacityCard(100)
            setPaddingCard("5em")
            setgapCard("2em")
            if(pays.length > 0) {
                setAffichage(renderPays(pays));
            }
        }, 2000);
    };
    
    //afficher les devises
    const renderDevise = () => {
        return Object.keys(devisesCode).map((currencyCode) => {
            const currencyName = devisesCode[currencyCode].name;
            const currencySymbol = devisesCode[currencyCode].symbol;
            return (
                    <Card key={currencyCode} className="UneCartes" onClick={() => AfficherPays(currencyCode)}>
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
    
    
    const renderPays = (pays) => {
        return pays.map((moncompteur) => {
            return (
                <Link key={moncompteur.cca3} to={`/pays/${moncompteur.cca3}`}>
                    <Card>
                        <Image src={moncompteur.flags.png} />
                        <Card.Content>
                            <Card.Header>
                                {moncompteur.name.common}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </Link>
            );
        });
    };
    

  
    const [opacityCard, setopacityCard] = useState(100); 
    const [paddingCard, setPaddingCard] = useState(); 
    const [gapCard, setgapCard] = useState(); 



   
  
    

    const [Affichage, setAffichage] = useState([]);
    return (
        <Container>
            <div ref={containerRef} className="containerDevise" style={{ height: "auto", transition: "all 2s ease-in-out" }}>
                <div>
                    <h1>Les Devises</h1>
                    <h3>Choisissez Votre Devise</h3>
                </div>
                <div onClick={AfficherPays} id="LesDeviseBox" className="LesDeviseBox" style={{...LesDeviseBoxStyle, opacity: opacityCard, padding: paddingCard, gap: gapCard}}>
                    {Affichage.length > 0 ? Affichage : <h1>Erreur Aucune Devise Trouver.</h1>}
                </div>
            </div>
            <br />
        </Container>
    )
}

export default RechercheDevise