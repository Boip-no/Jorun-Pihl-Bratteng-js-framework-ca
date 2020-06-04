import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
    const [gameDetail, setGameDetail] = useState (null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = BASE_URL + '/' + id;

    useEffect(() => {
    fetch(url) 
        .then(response => response.json())
        .then(json => setGameDetail(json))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="Spinner" />
    }

    return (
        <Row>
            <Col md={8} className="detail-image">
                <Image src={gameDetail.background_image} />
            </Col>
            <Col>
                <h1>{gameDetail.name}</h1>
                <p>
                    <b>Link:</b> {gameDetail.website}
                </p>
                <p>
                    <b>Description:</b> {gameDetail.description}
                </p>
            </Col>
        </Row>
    );
}

export default GameDetail;