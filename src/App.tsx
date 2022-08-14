import React from 'react';
import logo from './logo1.svg';
import logoText from './logoText2.svg';
import karenAndDog from './photos/karenAndDog.jpg';
import './App.css';
import { Link, Path, To } from 'react-router-dom';
import { NumberLiteralType } from 'typescript';

function Header(){
  return (
    <div className="Header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logoText} className="App-logo-text" alt="logo" />
      {/*<h1>MN Gentle Goodbyes LLC</h1>*/}
    </div>
  );
}

function PageLink({page, text}: {page: string, text: string}){
  return (
    <div className="PageContainer">
      <Link className='link' to={page}><div className="PageLink"><p>{text}</p></div></Link>
    </div>
  );
}

function ButtonLink({page, text}: {page: string, text: string}){
  return (
    <div className='buttonLink'>
      <Link className='link' to={page}>
        <p className='buttonText'>{text}</p>
        <span className="material-icons">chevron_right</span>
      </Link>
    </div>
  )
}

function HereToHelp(){
  return (
    <div className="HereToHelp">
      <div className='col' id='helpColLeft'>
        <h1 className='sectionTitle'>We are here to help</h1>
        <p className='sectionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <ButtonLink page='process' text='Our Process'/>
      </div>
      <div className='col' id='helpColRight'>
        <img src={karenAndDog} className="karenAndDog" alt="Dr. Karen"></img>
      </div>
    </div>
  );
}

function ProfessionalService(){
  return (
    <div className='ProfessionalService'>
      <div className='col'>
        <h1 className='sectionTitle'>Professional Service</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <nav className="HomeRouter">
        <div className='routerLinks'>
          <PageLink page='/process' text='Our Process'/>
          <PageLink page='/testimonials' text='Testimonials'/>
          <PageLink page='/contact' text='Contact Us'/>
          <PageLink page='/about' text='About Us'/>
        </div>
      </nav>
      <HereToHelp/>
      <ProfessionalService/>
    </div>
  );
}

export default App;
