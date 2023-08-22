import React from 'react';

export default function UserRoute({children}){
    if(localStorage.getItem('awt_user'))
        return (<div>{children}</div>)
    else
        window.location.href="/login";
}