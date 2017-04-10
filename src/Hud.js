import React from 'react';

const Hud = (props) => {
    let message;
    if(props.status === 'Working'){
        message = 'Keep working!';
    }
    else if(props.status === 'Break'){
        message = 'On break.';
    }
    else if(props.status === 'Long Break'){
        message = 'Enjoy a long break.';
    }
    return (
        <div className='hud'>
            <h3>{message}</h3>
            Pomodoro Count: {props.setPos}
        </div>
    )
}
export default Hud;