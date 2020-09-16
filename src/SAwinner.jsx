import React from "react";

export default function  SAwinner (props){

    const b = props.saEmpl;

    let winn = props.saEmpl[0].reiting;

    let titt = props.saEmpl[0].title;

    for(let i = 0; i<b.length; i++ ){
        if(props.saEmpl[i].reiting > winn) {winn = props.saEmpl[i].reiting
            titt = props.saEmpl[i].title}
    }

    return(


        <div>
            {titt}
            {" "} reiting:
            {" "}
            {winn}
        </div>


    )

}