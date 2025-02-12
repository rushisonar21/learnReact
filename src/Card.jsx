import Profilepic from './assets/profilepic.jpg'

function Card(props){
    return(
       <div className="card">
            <img className="card-image" src={Profilepic}></img>
            <h2 className='card-title'>Rushikesh Sonar</h2>
            <p className='card-text'>I am software developer,learning react</p>
       </div>
    );
}

export default Card