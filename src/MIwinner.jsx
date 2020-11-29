import React from "react";

export default function MIwinner(props) {
    const a = props.miEmploey;

    let win = props.miEmploey[0].reiting;

    let tit = props.miEmploey[0].title;

    for (let i = 0; i < a.length; i++) {
        if (props.miEmploey[i].reiting > win) {
            win = props.miEmploey[i].reiting
            tit = props.miEmploey[i].title
        }
    }

    return (

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
</div>

    )
}