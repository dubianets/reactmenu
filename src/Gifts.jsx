import React from "react";

export default function Gifts(props){

    return(

        <ul>
            {


                props.gifts.map(el => <li key={el.name}>{el.name}</li>)

            }

        </ul>
    )
}