import React from 'react';
import Settings from './Settings';

class Pomodoro extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        minutes: '',
        seconds: 0,
        workTime: 25,
        breakTime: 5,
        longBreakTime: 15,
        timer: '',
        setPos: 0,
        status: 'Working'
    };
  }
  componentWillMount = () => {
    this.setState({
      minutes: this.state.workTime
    });
  }
  settingsWorkDec = () => {
    let newWorkTime = this.state.workTime - 1;
    this.setState({
      minutes: newWorkTime,
      workTime: newWorkTime
    });
  }
  settingsWorkInc = () => {
    let newWorkTime = this.state.workTime + 1;
    this.setState({
      minutes: newWorkTime,
      workTime: newWorkTime
    });
  }
  settingsBreakDec = () => {
    this.setState({
      breakTime: this.state.breakTime-1
    });
  }
  settingsBreakInc = () => {
    this.setState({
      breakTime: this.state.breakTime+1
    });
  }
  settingsLongBreakDec = () => {
    this.setState({
      longBreakTime: this.state.longBreakTime-1
    });
  }
  settingsLongBreakInc = () => {
    this.setState({
      longBreakTime: this.state.longBreakTime+1
    });
  }
  updateTime = () => {
    let updatedMinutes = this.state.minutes;
    let updatedSeconds = this.state.seconds;
    let newSetPos = this.state.setPos;

    if(updatedSeconds > 0){
      updatedSeconds--;
    }
    else if(updatedSeconds === 0){
      updatedMinutes--;
      updatedSeconds = 59;
    }
    if(updatedSeconds === 0 && updatedMinutes === 0){
      if(this.state.status === 'Working'){
        newSetPos++;
      }
      if(newSetPos > 0 && newSetPos % 4 === 0 && this.state.status === 'Working'){
        this.setState({
          status: 'Long Break',
          minutes: this.state.longBreakTime,
          seconds: 0,
          setPos: newSetPos
        });
      }
      else{
        let newMinutes = (this.state.status === 'Working' ? this.state.breakTime : this.state.workTime);
        let newStatus = (this.state.status === 'Working' ? 'Break' : 'Working');
        this.setState({
          status: newStatus,
          minutes: newMinutes,
          seconds: 0,
          setPos: newSetPos
        });
      }
    }
    else {
      this.setState({
        minutes: updatedMinutes,
        seconds: updatedSeconds
      });
    }
  }
  startTimer = () => {
      let timer = setInterval(this.updateTime, 1000);
      this.setState({
        timer: timer
      })
  }

  pauseTimer = () => {
    clearInterval(this.state.timer);
  }
  render(){
    let paddedSeconds = this.state.seconds;
    if(this.state.seconds < 10){
      paddedSeconds = '0'+this.state.seconds;
    }
    return (
      <div>
        <div className='pomoClock'>
          <div className='timeDisplay'>
            {this.state.minutes}:{paddedSeconds}
          </div>
          <div className='controls'>
            <div className='btn btn-success' onClick={this.startTimer}><b>Start</b></div>
            <div className='btn btn-warning' onClick={this.pauseTimer}><b>Pause</b></div>
          </div>
        </div>
        <Settings 
          workTime={this.state.workTime} 
          breakTime={this.state.breakTime} 
          longBreakTime={this.state.longBreakTime}
          status={this.state.status}
          setPos={this.state.setPos}
          settingsWorkDec={this.settingsWorkDec}
          settingsWorkInc={this.settingsWorkInc}
          settingsBreakDec={this.settingsBreakDec}
          settingsBreakInc={this.settingsBreakInc}
          settingsLongBreakDec={this.settingsLongBreakDec}
          settingsLongBreakInc={this.settingsLongBreakInc} />
      </div>
    )
  }
}

export default Pomodoro;