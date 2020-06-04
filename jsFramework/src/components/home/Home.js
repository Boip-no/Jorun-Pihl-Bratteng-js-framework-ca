import React from 'react';
import Heading from "../layout/Heading";
import GameList from "../game/GameList";

export function Home() {
    return (
        <>
            <Heading title="Games" />
            <GameList />
        </>
    );
}

export default Home;

