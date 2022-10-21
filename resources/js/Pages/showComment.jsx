import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Split from "react-split";

const showGame = (props) => {

    const { comment } = props;
    console.log(props);

    return (
        <Authenticated auth={props.auth} >
        <div>
            <div > {comment.user.name} </div>
            <div className = 'bg-gray-200 rounded shadow-xl'>タイトル:{comment.title}</div>
            <div className = ' bg-gray-200 rounded shadow-xl'>感想: {comment.body}</div>
            
        </div>
        </Authenticated>
    );

}

export default showGame;


