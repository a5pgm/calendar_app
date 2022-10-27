import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Split from "react-split";
import moment from "moment";

const showGame = (props) => {
    const { game,score,comments } = props;
    const {data, setData, post} = useForm({
        id: "",
        title: "",
        body: "",
        user_id: props.auth.user.id,
        game_id: game.id,
        open: 1,
        evaluation: "",
    })

    const handleSendComments = (e) => {
        e.preventDefault();
        post("/comments");
    }
    console.log(props);

    return (
        <Authenticated auth={props.auth} >
            <div className = "flex gap-2 bg-default-white">
            { /* <div class="wrapper"> */}
                {/*<div class = "showScore"> */}
                
                                {/*<div class = "showComment"> */}
                <div  className = "w-1/2 " >
                    { comments.map((comment) =>(
                              ( (comment.open == 0) || (props.auth.user.id == comment.user_id) )&&  
                                <div className = "flex bg-default-white m-4 p-5 rounded text-default-black border-2 border-default-green" >
                                    <div className = "w-4/5 bg-default-green text-default-white rounded p-3">
                                        <h1>{comment.user.name}</h1>
                                        <h2>タイトル：{comment.title}</h2> 
                                                
                                        <h3 className = 'truncate' >感想：{comment.body}</h3>
                                        <p>評価：{comment.evaluation} 点</p>
                                        <p>作成日時：{moment(comment.created_at).format('YYYY-MM-DD hh:mm') } </p>
                                    </div>
                                    <div className = "flex flex-end mt-auto">
                                        <a href ={`/show/comment/${comment.id}`} 
                                        className = "justify-end ml-5 text-default-white bg-default-green border-b-4 border-dark-green 
                                        font-bold hover:bg-light-green active:border-dark-green active:
                                        scale-95 rounded shadow-md">
                                        この感想を見る</a>     
                                    </div>
                                </div>
    
                        )) }
                </div>
                
                <div className = "right-0 bg-default-green text-default-white rounded shadow-xl p-5  w-1/2 h-fit ">
                    <div className = 'flex-col' >
                        <div>
                            <table border = "2" className = 'ml-4 bg-defaul-green'>
                              <tr>
                                <th>第{game.match_day}節</th>
                                <th>ホーム</th>
                                <th> </th>
                                <th>アウェイ</th>
                              </tr>
                              <tr>
                                <th>  </th>
                                <th> {game.home_team.name} </th>
                                <th> </th>
                                <th> {game.away_team.name} </th>
                              </tr>
                              <tr>
                                <th>前半</th>
                                <th>{score.half_home}</th>
                                <th>  -  </th>
                                <th>{score.half_away}</th>
                              </tr>
                              <tr>
                                <th>後半</th>
                                <th>{score.full_home - score.half_home}</th>
                                <th>  -  </th>
                                <th>{score.full_away - score.half_away}</th>
                              </tr>
                              <tr>
                                <th>試合終了</th>
                                <th>{ score.full_home }</th>
                                <th>  -  </th>
                                <th>{ score.full_away }</th>
                              </tr>
                            </table>
                        </div>
                        <div className = 'rounded text-default-white bg-default-green text-base border-2 border-default-black drop-shadow-xl p-5 m-3 ' >
                            <p>コメントの入力フォーム</p>
                            <p>感想を書き込もう！</p>
                            <form onSubmit={handleSendComments} className = 'text-default-black'>
                                    <div className ='flex justify-end'>
                                        <h2> タイトル：</h2>
                                        <input type="text" placeholder="タイトル" onChange={(e) => setData("title", e.target.value)} />
                                        <span className="text-red-600">{props.errors.title}</span>
                                    </div>
            
                                    <div className ='flex justify-end'>
                                        <h2>感想：</h2>
                                        <textarea placeholder="試合の感想を自由に書こう" onChange={(e) => setData("body", e.target.value)} cols = "60" rows = "15" maxlenght = "4000" className = 'resize-none'></textarea>
                                        <span className="text-red-600">{props.errors.body}</span>
                                    </div>
            
                                    <div className ='flex justify-end'>
                                        <h2>公開しますか?</h2>
                                        <label><input type="radio" value={0} name="open?" onChange={e => setData("open", e.target.value)} checked={data.open==0}/>公開する</label>
                                        <label><input type="radio" value={1} name="open?" onChange={e => setData("open", e.target.value)} checked={data.open==1}/>公開しない</label>
                                        <span className="text-red-600">{props.errors.open}</span>
                                    </div>
                                    <div className ='flex justify-end'>
                                        <h2>評価点(100点満点)：</h2>
                                        <input type="number" prattern="[0-9]*" placeholder="50" onChange={(e) => setData("evaluation", e.target.value)} className = 'w-20'/>
                                        <span className="text-red-600">{props.errors.evaluation}</span>
                                    </div>
                                    <button type ="submit" className="px-5 py-2 text-white bg-green-400 border-b-4 border-green-600 font-bold hover:bg-opacity-90 hover:border-opacity-90 active:border-opacity-10 active:scale-95 rounded shadow-md">button</button>
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );

}

export default showGame;


