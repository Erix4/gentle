import React, { useEffect } from 'react';
import logo from './logo1.svg';
import logoText from './logoText2.svg';
import karenAndDog from './photos/karenAndDog.jpg';
import shield from './shield.svg';
import phone from './phone.svg';
import animals from './photos/animals.png';
import './App.css';
import { Link, Path, To } from 'react-router-dom';
import { isThisTypeNode, NumberLiteralType } from 'typescript';
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
        <p className='sectionText'>In your time of need, Gentle Goodbyes is here to provide a
        more personal and humane passing for your pet. In our experience, we've
         found that allowing families to be together comfortably at home while saying goodbye
         allows everyone to be more at peace. You and your pet deserve a gentler way to say goodbye.</p>
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
        <p className='sectionText'>Dr. Karen is an established veterinarian with
        experience in small animal Veterinary Clinics. She can ensure a peaceful
        and humane experience for you and your loved ones.</p>
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
        <p className='sectionText'>Please contact me directly so we
find a time that we can help. Although I do have limited availability,
due to working in other clinics and raising a family, I'll do my best to
be accomodating of your schedule. My fee is
$240 and includes a clay paw print. I accept cash, checks and
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

class Testimonials extends React.Component<{}, {testimonials: string[], curT: number, timeId: NodeJS.Timeout | undefined}>{
  constructor(props: {}){
    super(props);
    //
    this.state = {
      testimonials: ['"We would recommend your service to anybody."',
        '"Thanks for making this day better with your kindness and heartfelt consideration and compassion."',
        '"Dr. Karen Exline is amazing! Wonderful service during a difficult time! So thankful! God bless!"',
        '"Thank you soooo so much for helping make this as easy as it did. I\'m so grateful to have the opportunity to have her at home. The foot print made my heart melt, I was not expecting to have anything left but pictures and memories. Thank you thank you."',
        '"Thank you and Wendy for your visit today. It was an incredible privilege to be with Aeowyn in peace in her own home."'],
      curT: 0,
      timeId: undefined
    }
  }
  //
  componentDidMount(){
    this.setState({timeId: setTimeout(this.newTestimonial.bind(this), 5000)});
    //console.log(this.state.timeId);//the id system doesn't work
  }
  //
  handleClickLeft(event: React.MouseEvent<HTMLDivElement>){this.newTestimonial(true, -1);}
  handleClickRight(event: React.MouseEvent<HTMLDivElement>){this.newTestimonial(true);}
  //
  newTestimonial(clear: boolean = false, amount: number = 1){
    this.setState({curT: this.mod2((this.state.curT + amount), this.state.testimonials.length)});//move to next testimonial
    //
    if (clear){
      console.log(`clearing ${this.state.timeId}`);
      clearTimeout(this.state.timeId);
      //
      this.setState({timeId: setTimeout(this.newTestimonial.bind(this), 10000)});//extra time after user input
      console.log(`new id ${this.state.timeId}`);
      return;
    }else{
      this.setState({timeId: setTimeout(this.newTestimonial.bind(this), 5000)});
    }
    //
  }
  //
  mod2(input: number, cap: number): number{
    if(input < 0){
      return this.mod2(cap + input, cap);
    }
    return input % cap;
  }
  //
  render(){
    //
    //
    return (
      <div className='Testimonials section'>
        <h1 className='sectionTitle'>Testimonials</h1>
        <div className='carousel'>
          <div><span className="material-icons" onClick={this.handleClickLeft.bind(this)}>chevron_left</span></div>
          <p>{this.state.testimonials[this.state.curT]}</p>
          <div><span className="material-icons"  onClick={this.handleClickRight.bind(this)}>chevron_right</span></div>
        </div>
      </div>
    );
  }
}

export function Footer({classOverride}: {classOverride: string}){
  return (
    <div className={classOverride}>
      <h1>MN Gentle Goodbyes LLC</h1>
      <h2>507-262-1896</h2>
      <h3>© 2021 Gentle Goodbyes LLC | All Rights Reserved.</h3>
    </div>
  )
}

function App() {
  useEffect(() => {
    document.title = 'MN Gentle Goodbyes';
  });
  //
  return (
    <div className="App">
      <Scrollbars className='scrollContainer'>
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
        <Footer classOverride='Footer section'/>
      </Scrollbars>
    </div>
  );
}

export default App;