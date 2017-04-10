import React from 'react';
import Hud from './Hud';

const Settings = (props) => {
    return (
        <div className='settings'>
            Work Time:  <span className="glyphicon glyphicon-triangle-bottom" onClick={props.settingsWorkDec}></span> <b>{props.workTime}</b> <span className="glyphicon glyphicon-triangle-top" onClick={props.settingsWorkInc}></span> <br/>
            Break Time:  <span className="glyphicon glyphicon-triangle-bottom" onClick={props.settingsBreakDec}></span> <b>{props.breakTime}</b> <span className="glyphicon glyphicon-triangle-top" onClick={props.settingsBreakInc}></span><br/>
            Long Break:  <span className="glyphicon glyphicon-triangle-bottom" onClick={props.settingsLongBreakDec}></span> <b>{props.longBreakTime}</b> <span className="glyphicon glyphicon-triangle-top" onClick={props.settingsLongBreakInc}></span><br/>

            <Hud status={props.status} setPos={props.setPos}/>
        </div>
    );
}

export default Settings;