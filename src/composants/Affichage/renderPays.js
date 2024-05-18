import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";



const RenderPays = (pays) => {
    const data = pays.pays
    return data.map((moncompteur) => {
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



export default RenderPays