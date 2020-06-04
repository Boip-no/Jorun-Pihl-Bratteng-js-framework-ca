import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from "./GameItem";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";

function GameList() {
    const [Game, setGame] = useState([]);
    const [filteredGame, setFilteredGame] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGame(json.results);
                setFilteredGame(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterCards = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = Game.filter(function(char) {
            const lowerCaseName = char.name.toLowerCase();

            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });

        setFilteredGame(filteredArray);
    };

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <>
            <Search handleSearch={filterCards} />
            <Row>
                {filteredGame.map(Game => {
                    const { id, name, background_image, released, rating } = Game

                    return (
                        <Col sm={6} md={3} key={id}>
                            <GameItem id={id} name={name} background_image={background_image} released={released} rating={rating} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default GameList;