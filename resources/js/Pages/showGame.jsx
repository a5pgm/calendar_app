import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";


const showGame = (props) => {
    
    const { game,score } = props;
    console.log(props);
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    showGame
                </h2>
            }>
            
            <div className="p-12">
                <h1>show</h1>
                    
                <div>
                    <p> {game.home_team.tla} vs {game.away_team.tla}  </p>
                    <p> {game.season.year} </p>
                    <p> {score.winner} </p>
                    
                    {/*{ 
                        games.map((game) =>(
                            game.match_day == 7 && game.home_team.name == "Real Madrid CF" &&
                                <p>{ game.home_team.name } vs { game.away_team.name }</p>
                        )) 
                    
                    } */}
                </div>
            </div>
            
        </Authenticated>
        );

}

export default showGame;


