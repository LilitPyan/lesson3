import React,{Component} from "react";
import './Preloader.css'

export default class Preloader extends Component{
    render(){
    return(
      <div className="bar">
        <div className="circle"></div>
        <p>Loading</p>
      </div>
    );
  }
}