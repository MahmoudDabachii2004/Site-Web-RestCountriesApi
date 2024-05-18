import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Label, Segment } from "semantic-ui-react";
const Pays = (props) => {
    const alphacode = useParams().codePays;
    const [pays, setPays] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${alphacode}`)
            .then((response) => response.json())
            .then((data) => setPays(data))
            .catch((erreur) => console.log(erreur))
    }, [alphacode])

    console.log(pays)

    const navigate = useNavigate();

    const goBackToPreviousPage = () => {
      navigate(-1); 
    };

    return (
        <div>
            {pays.length > 0 ?
                < Container >
                <div className="PaysContainer">
                    <div className="imagePAys">
                        <img className="imageP" alt="drapeau" src={pays[0].flags.png} style={{ width: 130, border: "1px solid grey" }} />
                    </div>
                    <div className="autreInfos">
                        <h1> {pays[0].name.common} </h1>
                        <Segment> {pays[0].subregion} </Segment>
                        <p> Population: {pays[0].population} habitants</p>
                        <p> Latitude : {pays[0].latlng[0]} - Longitude : {pays[0].latlng[1]}  </p>
                        <div>
                            {pays[0].borders ?
                                pays[0].borders.map((frontalier) => <Label key={frontalier}>
                                    <Link to={`/pays/${frontalier}`}> {frontalier} </Link>
                                </Label>)
                                : undefined
                            }
                        </div>
                    <Button onClick={goBackToPreviousPage}>Retourner</Button>
                    </div>
                    <br /> <br />

                </div>
                </Container >
                : undefined}
        </div>
    )
};

export default Pays;