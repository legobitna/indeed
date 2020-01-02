import React from 'react'
import {useSelector} from 'react-redux'

export default function HomePage() {
    const currentUser =  useSelector(state => state);// state를 읽어옴 
    console.log("cc",currentUser)
    return (
        <div>
            <h1>HomePage</h1>
            <h2>{currentUser.email}</h2>
        </div>
    )
}
