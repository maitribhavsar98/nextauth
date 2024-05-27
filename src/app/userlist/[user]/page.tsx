"use client";
import React from 'react'

type UserProps = {
    params: {
        user: string;
    };
}

const User: React.FC<UserProps> = ({ params }) => {
    console.log('12', params);
    return (
        <div>
            <h1>Info About </h1>
            <p>Hello I'm {params.user}</p>
        </div>
    )
}

export default User