// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0}

  onStart = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({time: prevState.time + 1}))
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({time: 0})
  }

  onSeconds = () => {
    const {time} = this.state
    const timeInSeconds = Math.floor(time % 60)
    if (timeInSeconds < 10) {
      return `0${timeInSeconds}`
    }
    return timeInSeconds
  }

  onMinutes = () => {
    const {time} = this.state
    const timeInMinutes = Math.floor(time / 60)
    if (timeInMinutes < 10) {
      return `0${timeInMinutes}`
    }
    return timeInMinutes
  }

  render() {
    const seconds = this.onSeconds()
    const minutes = this.onMinutes()
    return (
      <div className="bg">
        <div className="sub-container">
          <h1>Stopwatch</h1>
          <div>
            <div className="flex">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="timer">Timer</p>
            </div>
            <h1>{`${minutes}:${seconds}`}</h1>
            <div>
              <button type="button" className="button-1" onClick={this.onStart}>
                Start
              </button>
              <button type="button" className="button-2" onClick={this.onStop}>
                Stop
              </button>
              <button type="button" className="button-3" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
