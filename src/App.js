import './App.css';
import {useState} from 'react';
import {data} from './data';


function App() {
  const [ friends, setFriends] = useState(0);
  const {name, picture} = data[friends];

  const previous = () =>{
    setFriends((friends =>{
      friends --;
      if(friends<0){
        return data.length-1;
      }
      return friends;
    }))
  }

  const next = () => {
    setFriends((friends => {
      friends ++;
      if (friends> data.length-1){
        friends=0
      }
      return friends;
    }))

  }

  return (
    <div>
      <div className='container'>
        <h1>Friends Cast</h1>
      </div>
      <br></br>
      <div className='container'>
        <img src={picture} width='500px' height='300px' alt='cast' />
      </div>
      <div className='container'>
        <h2>{name}</h2>
      </div>

      <div className='container'>
        <button onClick={previous}>  Previous </button>
        <button onClick={next}>Next </button>
      </div>
      <div className='footer'>
        <p>Some images on this website have been taken from the Internet for educational purposes.</p>
      </div>
    </div>
  );
}

export default App;
