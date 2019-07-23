import React from 'react';
import './App.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={{backgroundColor: props.bgColor}}></button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 10,
      squares: Array(100).fill('white'),
      running: false,
      generation: 0,
      interval: 1000
    };
  }

  buildNextGen() {
    let newSquares = this.state.squares.slice();

    for (let i=0; i<newSquares.length; i++) {
      let liveNeighbors = 0;
      let currentStatus = this.state.squares[i]

      if (this.state.squares[i-this.state.size-1] === 'black' || this.state.squares[i-this.state.size] === 'black' || this.state.squares[i-this.state.size+1] === 'black' || this.state.squares[i-1] === 'black' || this.state.squares[i+1] === 'black' || this.states.squares[i+this.state.size-1] === 'black' || this.state.squares[i+this.state.size] === 'black' || this.state.squares[i+this.state.size+1] === 'black') {
        liveNeighbors++
      }

      if (currentStatus === 'black') {

        if (liveNeighbors !== 2 || liveNeighbors !== 3) {
          currentStatus = 'white';
          this.state.squares[i] = currentStatus;
        }

      } else {
        if (liveNeighbors === 3) {
          currentStatus = 'black'
          this.state.squares[i] = currentStatus;
        }
      }

    }
  

    this.setState({
      squares: newSquares,
      generation: this.state.generation+1,
    });

    this.timeoutHandler = window.setTimeout(() => {
      this.buildNextGen();
    }, this.state.interval);
  }



  render() {
    return(
      <>
      <Square/>
      </>
    )
  }
}

export default Board;
