import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Split from "react-split";

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

    return (
        <Authenticated auth={props.auth} >
        <h1>show</h1>
            <div className = "flex gap-2 ">
            { /* <div class="wrapper"> */}
                {/*<div class = "showScore"> */}
                
                                {/*<div class = "showComment"> */}
                <div  className = "w-3/4" >
                    { comments.map((comment) =>(
                             comment.open == 0 &&
                                <div className = "bg-gray-200 m-4 p-5 rounded " >
                                    <h1>user:{comment.user.name}</h1>
                                    <h2>title:{comment.title}</h2>
                                    <h3>body:{comment.body}</h3>
                                    <p>evaluation:{comment.evaluation}</p>
                                    <p> </p>
                                    <p> </p>
                                </div>
    
                        )) }

                </div>
                
                <div className = "bg-gray-200 rounded shadow-xl p-5 w-1/4 ">
                    <div>
                        <ul>
                            <li><p> {game.home_team.tla} vs {game.away_team.tla}  </p></li>
                            <li><p> {game.season.year} </p> </li>
                            <li> { (score.full_home) ? (<p>{score.full_home} - {score.full_away}</p> ): <p>試合はこれからです。</p> } </li>
                        </ul>
                    </div>
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
        
                                <div>
                                    <h2>公開しますか?</h2>
                                    <label><input type="radio" value={0} name="open?" onChange={e => setData("open", e.target.value)} checked={data.open==0}/>公開する</label>
                                    <label><input type="radio" value={1} name="open?" onChange={e => setData("open", e.target.value)} checked={data.open==1}/>公開しない</label>
                                    <span className="text-red-600">{props.errors.open}</span>
                                </div>
                                <div>
                                    <h2>評価点(100点満点)</h2>
                                    <input type="number" prattern="[0-9]*" placeholder="50" onChange={(e) => setData("evaluation", e.target.value)}/>
                                    <span className="text-red-600">{props.errors.evaluation}</span>
                                </div>
                                <button type="submit" className="p-1 bg-red-300 hover:bg-green-400 rounded-md">send</button>
                                <button class="px-5 py-2 text-white bg-green-400 border-b-4 border-green-600 font-bold hover:bg-opacity-90 hover:border-opacity-90 active:border-opacity-10 active:scale-95 rounded shadow-md">button</button>

                        </form>
                    </div>
                </div>
                

            </div>
        </Authenticated>
    );

}

export default showGame;


