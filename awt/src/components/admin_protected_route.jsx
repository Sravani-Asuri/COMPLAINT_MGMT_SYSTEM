import React from 'react';

export default function AdminRoute({children}){
    if(localStorage.getItem('awt_voulenteer'))
        return <div>{children}</div>
    else
        window.location.href="/login";
}