import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["","","","","","","","",""];



export const TicTacToe = () => {

  let [count , setcount] = useState(0);
  let [lock , setlock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9];
  const toggle = (e , num) => {
      if(lock) {
        return 0;
      }
       if(count % 2 === 0){
         e.target.innerHTML  = `<img src = '${cross_icon}'>`;
         data[num] = "x";
         setcount(++count);
       }
       else{
        e.target.innerHTML  = `<img src = '${circle_icon}'>`;
        data[num] = "o";
        setcount(++count);
       }
       checkwin();
  }

  const checkwin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }

    if (count === 8) {
      titleRef.current.innerHTML = 'It\'s a draw!';
      setlock(true);
    }
  }

  const won = (winner) => {
    setlock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon} alt='x'> Wins`;
    } else if (winner === "o") {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon} alt='o'> Wins`;
    }
  }

    const reset = () => {
      setlock(false);
      data = ["","","","","","","","",""];
      titleRef.current.innerHTML = 'TIC TAC TOE GAME IN <span>REACT</span>';
      box_array.forEach((e) => {
        e.current.innerHTML = "";
      })
      setcount(0);
    }

  return (
    <div className = "container">
        <h1 className="title" ref={titleRef}>TIC TAC TOE GAME IN <span>REACT</span></h1>
        <div className="board">
        <div className="row1">
            <div className="box"ref= {box1} onClick={(e)=> {toggle(e, 0)}}></div>
            <div className="box"ref= {box2} onClick={(e)=> {toggle(e, 1)}}></div>
            <div className="box"ref= {box3} onClick={(e)=> {toggle(e, 2)}}></div>
        </div>
        <div className="row2">
            <div className="box"ref= {box4} onClick={(e)=> {toggle(e, 3)}}></div>
            <div className="box"ref= {box5} onClick={(e)=> {toggle(e, 4)}}></div>
            <div className="box"ref= {box6} onClick={(e)=> {toggle(e, 5)}}></div>
        </div>

        <div className="row3">
            <div className="box"ref= {box7} onClick={(e)=> {toggle(e, 6)}}></div>
            <div className="box"ref= {box8} onClick={(e)=> {toggle(e, 7)}}></div>
            <div className="box"ref= {box9} onClick={(e)=> {toggle(e, 8)}}></div>
        </div>


        </div>
        <button className="reset" onClick={() => {reset()}}>Reset</button>
    </div>
  )
}


export default TicTacToe
