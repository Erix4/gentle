import { Link } from 'react-router-dom';

export function Home(){
    return (
      <div>
        <Link className='link' to="/"><span className='material-icons'>home</span>Home</Link>
      </div>
    )
  }

export default function Process(){
    return (
        <div className="Process">
            <Home/>
            <h1>Our Process</h1>
        </div>
    );
}