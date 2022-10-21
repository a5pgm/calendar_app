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
        <h2>show</h2>
        </Authenticated>
    );

}

export default showGame;


