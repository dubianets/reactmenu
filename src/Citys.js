import React from "react";

export default function Citys (props){



    return(

        <ul>
            {


            props.city.map(el => <li key={el.title}>{el.title}</li>)

            }
        </ul>

    )
}