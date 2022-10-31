import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Split from "react-split";

const showGame = (props) => {

    const { comment } = props;
    console.log(props);
    const handleDeleteComment = (id) => {
        Inertia.delete(`/comment/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }
    return (
        <Authenticated auth={props.auth} >
        
        <div className = 'w-4/5 bg-default-green text-default-white text-2xl rounded mt-5 mx-auto h-fit'>
            <div className = 'px-5 py-3'>
                <div className = 'text-3xl'> {comment.user.name} </div>
                <div >タイトル：{comment.title}</div>
                <div >感想: {comment.body}</div>
                <div> 評価点：{comment.evaluation}</div>
                {
                    ( (props.auth.user.id == comment.user_id) &&
                    <div>
                        { (comment.open == 0)? <p>このコメントは公開されています</p> : <p>このコメントは公開されていません</p> }
                    </div>
                    )
                }
                {
                    ( (props.auth.user.id == comment.user_id) &&
                        <div className = "flex justify-end">
                            <a href ={`/show/comment/${comment.id}/edit`} 
                            className = "px-3 py-2 ml-3 mt-3 text-default-white bg-default-black border-b-4 border-dark-green 
                            font-bold hover:bg-light-green active:border-dark-green 
                            active:scale-95 rounded shadow-md w-fit h-fit">
                            編集する</a>  
                        <button onClick={() => handleDeleteComment(comment.id)}
                            className = "px-3 py-2 ml-3 mt-3 text-default-white bg-default-black border-b-4 border-dark-green 
                            font-bold hover:bg-light-green active:border-dark-green 
                            active:scale-95 rounded shadow-md w-fit h-fit">
                            削除する</button>
                        </div>
                        
                    )
                }
            </div>
        </div>
        <div>
            <a href={`/show/game/${comment.game_id}`} 
            className = 'px-3 py-2 mt-10 ml-32 text-default-white bg-default-black border-b-4 border-dark-green 
                        font-bold hover:bg-light-green active:border-dark-green 
                        active:scale-95 rounded shadow-md w-fit h-fit'>戻る</a>
        </div>
        
        </Authenticated>
    );

}

export default showGame;


