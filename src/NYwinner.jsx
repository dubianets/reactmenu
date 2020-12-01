import React from "react";

export default function NYwinner (props){

    const a = props.nyEmploey;

    let win = props.nyEmploey[0].reiting;

    let tit = props.nyEmploey[0].title;

    for(let i = 0; i<a.length; i++ ){
        if(props.nyEmploey[i].reiting > win) {win = props.nyEmploey[i].reiting
            tit = props.nyEmploey[i].title}
    }

    return(

<div>
       <div>
            {tit}
           {" "} reiting:
           {" "}
           {win}
       </div>
    <div>
            {tit}
           {" "} reiting:
           {" "}
           {win}
       </div>
    <div>
        {tit}
        {" "} reiting:
        {" "}
        {win}
    </div>
</div>

    )

}