import React, { useState } from 'react';
import { demoPageDescription} from '../assets/content';
import lock from '../assets/lock.svg';

function DemoContactCard({title,text}) {
  const [color, setColor] = useState("navy");
  return (
    <div className="demo-page-outer">
      <div className="demo-page-inner">
        <div className="demo-bar">
            <div className="red-circle"/>
            <div className="yellow-circle"/>
            <div className="green-circle"/>
            <div className="demo-url-bar">
                <img className="demo-lock" alt="lock" src={lock}/>
                <p className="demo-url">wildcats.theneighbor.fund</p>
            </div>
        </div>

        <div className="demo-page" id={color}>
            <h2>DONATE TO</h2>
            <h1>The Wilddcats Soccer Championship Travel Fund</h1>
            <p>{demoPageDescription}</p>
            <div className="demo-donate-modal">
                <div className="demo-input"/>
                <div className="demo-input"/>
                <div className="demo-input"/>
                <div className="demo-submit"/>
            </div>
        </div>
      </div>

    {/*Todo: Conditional id={color == "navy" && "selected"}*/}
    {/*Todo: Consider mapping a list of colors onto this logic*/}
    <button onClick={() => setColor("navy")} id={color === "navy" && "selected"} className="selector navy"/>
    <button onClick={() => setColor("blue")} id={color === "blue" && "selected"} className="selector blue"/>
    <button onClick={() => setColor("red")} id={color === "red" && "selected"} className="selector red"/>
    <button onClick={() => setColor("green")} id={color === "green" && "selected"} className="selector green"/>
    <button onClick={() => setColor("white")} id={color === "white" && "selected"} className="selector white"/>
    </div>
  );
}

export default DemoContactCard;
