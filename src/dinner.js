import React from 'react';


function Dinner(props){
    return(
        <div>
            <h1>Today we are serving {props.dishName} with Sweet {props.sweetDish}</h1>
        </div>
    )
}

export default Dinner;