import React from 'react';
import logo from './logo1.svg';
import logoText from './logoText2.svg';
import karenAndDog from './photos/karenAndDog.jpg';
import shield from './shield.svg';
import phone from './phone.svg';
import animals from './photos/animals.png';
import './App.css';
import { Link, Path, To } from 'react-router-dom';
import { NumberLiteralType } from 'typescript';
import { Scrollbars } from 'react-custom-scrollbars';

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
    <div className="HereToHelp section">
      <div className='col' id='helpColLeft'>
        <h1 className='sectionTitle'>We are here to help</h1>
        <p className='sectionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <ButtonLink page='/process' text='Our Process'/>
      </div>
      <div className='col' id='helpColRight'>
        <img src={karenAndDog} className="karenAndDog" alt="Dr. Karen"></img>
      </div>
    </div>
  );
}

function ProfessionalService(){
  return (
    <div className='ProfessionalService section'>
      <div className='col' id='profColLeft'>
        <img src={shield} className="shield" alt="shield"></img>
      </div>
      <div className='col'  id='profColRight'>
        <h1 className='sectionTitle'>Professional Service</h1>
        <p className='sectionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua.</p>
        <ButtonLink page='/about' text='About Us'/>
      </div>
    </div>
  );
}

function OurDoors(){
  return (
    <div className='OurDoors section'>
      <div className='col' id="doorsLeftCol">
        <h1 className='sectionTitle'>Our doors are always open</h1>
        <p className='sectionText'>I regret to say that I do have limited availability due to working
in other clinics and raising a family. Please contact me so we
can work together to find a time that we can help. My fee is
$220 and includes a clay paw print. I accept cash, checks and
all major credit cards.</p>
        <ButtonLink page='/contact' text='Contact Us'/>
      </div>
      <div className='col' id="doorsRightCol">
        <a id="phoneLink" href='tel:5072621896'>
          <img src={phone} className="phone" alt="phone"></img>
        </a>
      </div>
    </div>
  );
}

function Testimonials(){
  return (
    <div className='Testimonials section'>
      <h1 className='sectionTitle'>Testimonials</h1>
      <div></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Scrollbars>
        <Header/>
        <nav className="HomeRouter">
          <div className='routerLinks'>
            <PageLink page='/process' text='Our Process'/>
            <PageLink page='/about' text='About Us'/>
            <PageLink page='/contact' text='Contact Us'/>
            <PageLink page='/testimonials' text='Testimonials'/>
          </div>
        </nav>
        <HereToHelp/>
        <ProfessionalService/>
        <OurDoors/>
        <img src={animals} className='animals' alt='animal_gallery'/>
        <Testimonials/>
      </Scrollbars>
    </div>
  );
}

export default App;
