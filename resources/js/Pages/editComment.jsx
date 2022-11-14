import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const editComment = (props) => {
    
    const { comment } = props;
    const {data, setData, put} = useForm({
        id: comment.id,
        title: comment.title,
        body: comment.body,
        user_id: comment.user_id,
        game_id: comment.game_id,
        open: comment.open,
        evaluation: comment.evaluation,
    })

    const handlePutComments = (e) => {
        e.preventDefault();
        put(`/comment/${comment.id}`);
    }



    return (
        <Authenticated auth={props.auth} >
            <div>
                <div className = 'rounded text-default-white bg-default-green text-base border-2 border-default-black drop-shadow-xl p-5 m-3 ' >
                    <p>コメント編集フォーム</p>
                    <form onSubmit={handlePutComments} className = 'text-default-black'>
                            <div className ='flex justify-end'>
                                <h2 className = 'text-default-white'> タイトル：</h2>
                                <input type="text" placeholder="タイトル" value = {data.title} onChange={(e) => setData("title", e.target.value)} />
                                <span className="text-red-600">{props.errors.title}</span>
                            </div>
    
                            <div className ='flex justify-end'>
                                <h2 className = 'text-default-white'>感想：</h2>
                                <textarea placeholder="試合の感想を自由に書こう" value = {data.body} onChange={(e) => setData("body", e.target.value)} cols = "60" rows = "15" maxlenght = "4000" className = 'resize-none'></textarea>
                                <span className="text-red-600">{props.errors.body}</span>
                            </div>
    
                            <div className ='flex justify-end'>
                                <h2 className = 'text-default-white'>公開しますか?</h2>
                                <label><input type="radio" value={0} name="open?" onChange={e => setData("open", e.target.value)} checked= {data.open==0}/>公開する</label>
                                <label><input type="radio" value={1} name="open?" onChange={e => setData("open", e.target.value)} checked= {data.open==1}/>公開しない</label>
                                <span className="text-red-600">{props.errors.open}</span>
                            </div>
                            <div className ='flex justify-end'>
                                <h2 className = 'text-default-white'>評価点(100点満点)：</h2>
                                <input type="number" prattern="[0-9]*" placeholder="50" value = {data.evaluation} onChange={(e) => setData("evaluation", e.target.value)} className = 'w-20'/>
                                <span className="text-red-600">{props.errors.evaluation}</span>
                            </div>
                            <button type ="submit" className="px-5 py-2 bg-default-black text-default-white border-b-4 border-dark-green font-bold hover:bg-light-green active:border-dark-green active:scale-95 rounded shadow-md flex justify-end">編集する</button>
    
                    </form>
                </div>
                <div className = "flex">
                    <a href={`/show/comment/${comment.id}`} 
                    className = 'px-3 py-2 mt-3 mx-auto mb-5 text-default-white bg-default-black border-b-4 border-dark-green 
                                font-bold hover:bg-light-green active:border-dark-green 
                                active:scale-95 rounded shadow-md w-fit h-fit'>戻る</a>
                </div>
            </div>
        </Authenticated>
        );
}

export default editComment;