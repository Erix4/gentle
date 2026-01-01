import { Link } from 'react-router-dom';
import React from 'react';
import {marked} from "marked";
import './pages.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import DOMPurify from 'dompurify';
import { Footer } from './App';

export function Home(){
    return (
      <div>
        <Link className='link' to="/"><span className='material-icons'>home</span>Home</Link>
      </div>
    )
}

function HomeButton(){
    return (
      <div className='buttonLink'>
        <Link className='link' to="/">
            <span className="material-icons">chevron_left</span>
            <p className='buttonText'>Home</p>
        </Link>
      </div>
    )
  }

function PageHeader({text}: {text: string}){
    return (
        <div className='PageHeader'>
            <HomeButton/>
            <h1>{text}</h1>
        </div>
    )
}

type MyProps = {
  // using `interface` is also ok
  idx: number;
};

type MyState ={
  idx: number,
  title: string,
  text: string
}

export default class Page extends React.Component<MyProps, MyState>{
  constructor(props: MyProps){
    super(props);
    //
    //let pageTexts = pageText.split(">");
    //
    this.state = {
      idx: props.idx,
      title: "Loading...",
      text: ""
    }
    //
  }
  //
  async componentDidMount(){
    const path = require("./pageText.md");
    //
    fetch(path).then(response => {
      console.log(response);
      //console.log(marked(response));
      return response.text();
    }).then(text => {
      let pageTexts = text.split(">");
      let curText = pageTexts[this.state.idx + 1];//the first item is empty
      let header = curText.split("\r\n\r\n")[0];
      curText = curText.slice(header.length + 4);
      //
      this.setState({
        title: header,
        text: DOMPurify.sanitize(marked(curText))
      });
    });
  }
  //
  render(){
    return (
      <Scrollbars className='scrollContainer'>
        <div id='PagesContainer'>
          <div className="Page">
            <PageHeader text={this.state.title}/>
            <div className='pageBody' dangerouslySetInnerHTML={{__html: this.state.text}}></div>
          </div>
          <Footer classOverride='Footer'/>
        </div>
      </Scrollbars>
    );
  }
}