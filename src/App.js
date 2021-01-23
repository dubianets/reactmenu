import React from 'react';
import NYwinner from "./NYwinner";
import Citys from "./Citys";
import SAwinner from "./SAwinner";
import MIwinner from "./MIwinner";
import TotalWinner from "./TotalWinner";
import Gifts from "./Gifts";


function App() {



    const list = [
        {make: 'Toyota', model: 'Camry', price:'1000'},
        {make: 'Mazda', model: 'CX', price:'3600'},
        {make: 'VAZ', model: 'Mh', price:'10'},
    ];

    const city = [
       {title: "New York", sccore:99},
       {title: "Seattle", sccore: 105},
       {title: "Seattle", sccore: 105},
       {title: "Seattle", sccore: 105},
       {title: "Seattle", sccore: 105},
        {title:"Maiami", sccore: 87},
    ]
    const nyEmploey = [
        {title:"John", reiting: 68},
        {title:"Smith", reiting: 80},
        {title:"Yoker", reiting: 89},
      {title:"Yokejujr", reiting: 87},
    ]

    const miEmploey =[
        {title:"Tomson", reiting: 67},
        {title:"West", reiting: 45},
        {title:"Narow", reiting: 56},
    ]

    const saEmploey =[
        {title:"Jothoph", reiting: 78},
        {title:"Rynni", reiting: 89},
        {title:"Lemmi", reiting: 70},
    ]

    const gifts = [
        {name: "Car", price: 10000},
        {name: "Carer", price: 100000},
        {name: "Camera", price: 2000},
        {name: "Candy", price: 100},
   ]

  return (

   <div>

      <h1>
          Let introdios our best coworkers!!
      </h1>

      <header>

          <h2>Citys participants:</h2>

          <Citys city={city}/>

      </header>

        <body>

            <h2>Citys winner:</h2>


            <i> York City winner:</i>


          <div>

          <NYwinner nyEmploey={nyEmploey}/>

          </div>
            <hr/>

            <i>Seattle winner:</i>


        <div>

            <SAwinner saEmpl={saEmploey}/>

        </div>

            <hr/>

            <i>Miami winner:</i>


        <div>

            <MIwinner miEmploey={miEmploey} />

        </div>


        <h2><i>TOTAL WINNER:</i></h2>

            <div>

                <TotalWinner citys={city} miE={miEmploey} saE={saEmploey} nyE={nyEmploey} />

            </div>



        </body>

       <footer>

           <h2>Presents:</h2>

           <Gifts gifts={gifts} />

           {list.map((el) => {return <li>{el}</li>})}


       </footer>

    </div>
  );
}

export default App;
