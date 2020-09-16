import React from "react";

export default function TotalWinner(props){

    const a = props.miE;

    let win1 = props.miE[0].reiting;

    let tit1 = props.miE[0].title;

    for (let i = 0; i < a.length; i++) {
        if (props.miE[i].reiting > win1) {
            win1 = props.miE[i].reiting
            tit1 = props.miE[i].title
        }
    }

    const b = props.nyE;

    let win2 = props.nyE[0].reiting;

    let tit2 = props.nyE[0].title;

    for(let i = 0; i<b.length; i++ ){
        if(props.nyE[i].reiting > win2) {win2 = props.nyE[i].reiting
            tit2 = props.nyE[i].title}
    }

    const c = props.saE;

    let win3 = props.saE[0].reiting;

    let tit3 = props.saE[0].title;

    for(let i = 0; i<c.length; i++ ){
        if(props.saE[i].reiting > win3) {win3 = props.saE[i].reiting
            tit3 = props.saE[i].title}
    }


    const seaTotal = win3 + props.citys[1].sccore;
    const nyToal = win2 + props.citys[0].sccore;
    const miTotla = win1 + props.citys[2].sccore;

    if(seaTotal >= nyToal && seaTotal >=miTotla) return(<div>
        {tit3}
        {" "} reiting:
        {" "}
        {seaTotal}
    </div>)
    else if(nyToal >= seaTotal && nyToal >= miTotla)return(<div>
        {tit2}
        {" "} reiting:
        {" "}
        {nyToal}
    </div>)
    else if(miTotla >= seaTotal && miTotla >= nyToal)return(<div>
        {tit1}
        {" "} reiting:
        {" "}
        {miTotla}
    </div>)


}

