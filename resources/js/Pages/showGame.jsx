import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";


const showGame = (props) => {
    
    const { game,score,comments } = props;
    const {data, setData, post} = useForm({
        title: "",
        body: "",
        user_id: props.auth.user.id,
        game_id: game.id,
        open: 1,
        evaluation: ""
    })

    const handleSendComments = (e) => {
        e.preventDefault();
        post("/comments");
    }
    console.log(props);
    
    function showComment(comment){
        if(comment.open){
            <div>

            </div>
        }
        
    }
    
    return (
        <Authenticated auth={props.auth} >
            <div id = "ovarlay">
                <h1>show</h1>
                <div id = "content">
                    <p> {game.home_team.tla} vs {game.away_team.tla}  </p>
                    <p> {game.season.year} </p>
                     { (score.full_home) ? (<p>{score.full_home} - {score.full_away}</p> ): <p>試合はこれからです。</p> } 
                </div>
            </div>
                { comments.map((comment) =>(
                         comment.open == 0 &&
                            <div>
                                <h2>title:{comment.title}</h2>
                                <h3>body:{comment.body}</h3>
                                <p>evaluation:{comment.evaluation}</p>
                                <p></p>
                            </div>
                            
                    )) }
            <div>
                <p>コメントの入力フォーム</p>    
                <p>感想を書き込もう！</p>
                <form onSubmit={handleSendComments} >
                        <div>
                            <h2>Title</h2>
                            <input type="text" placeholder="タイトル" onChange={(e) => setData("title", e.target.value)}/>
                            <span className="text-red-600">{props.errors.title}</span>
                        </div>                    

                        <div>
                            <h2>Body</h2>
                            <textarea placeholder="今日も1日お疲れさまでした。" onChange={(e) => setData("body", e.target.value)}></textarea>
                            <span className="text-red-600">{props.errors.body}</span>
                        </div>
                        
                        <div >
                            <h2>公開しますか?</h2>
                            <label><input type="radio" value={0} name="open?" onChange={e => setData("open", e.target.value)} checkd={data.open==="0"}/>公開する</label>
                            <label><input type="radio" value={1} name="open?" onChange={e => setData("open", e.target.value)} checkd={data.open==="1"}/>公開しない</label>
                        </div>
                        <div>
                            <h2>評価点(100点満点)</h2>
                            <input type="number" prattern="[0-9]*" placeholder="50" onChange={(e) => setData("evaluation", e.target.value)}/>
                        </div>
                        
                        
                        <button type="submit" className="p-1 bg-red-300 hover:bg-green-400 rounded-md">send</button>
                    </form>
            
            
            </div>
        </Authenticated>
        );

}

export default showGame;


