import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import TopBtn from './components/TopBtn'


const App = () => {
  return (
    <div className="App">

      <Router>

          <NavBar/>
          <TopBtn />

          <div id="Header" className="header">
            <h1> Full Stack Software Engineer </h1>
          </div>

          <section id="S1" className="section-1">
            <h1> ABOUT ME </h1>
            <p className='aboutP'>Hello, I am a 26 year old father of a 2 year old. I have lived in 
              Los Angeles my entire life. Tech geek who just loves gaming and computers. 
              I got into coding and received a partial scholarship from Adobe to attend General Assembly 
              where I currently am finishing up a boot camp. Wide eyed- and eager 
              for a chance to prove myself I am looking for an opportunity. 
              Thank You so much! </p>
          </section>

          <section id="S2" className="section-2">
            <h1> PROJECTS </h1>
          </section>

          <section id="S3" className="section-3">
            <h1>CONTACT INFO</h1>
            <div className='contactCard'>
              <lable className="contactLabel">EMAIL</lable>
              <p>lopezraul1410@gmail.com</p> 
            </div>
            <div className='contactCard'>
              <lable className="contactLabel">PHONE</lable>
              <p>(310)598-0400</p>
            </div>
            <div className='contactCard'>
              <lable className="contactLabel">
                SOCIALS
              </lable>
              <div id="socials">

              <a href="https://github.com/RaulL10" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/Ksiclk5.png" alt="" height="40px" width="40px"/> </a>
              <a href="https://www.linkedin.com/in/raullopez1410/" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/MTKBoLY.png" alt="" height="40px" width="40px"></img> </a>
              <a href="https://twitter.com/titohuncho" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/YZgkpQG.png" alt="" height="40px" width="40px"></img> </a>
              <a href="https://twitch.com/tithuncho" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/aWJafyL.png" alt="" height="40px" width="40px"></img> </a>
              </div>
            </div>
          </section>

        </Router>
        
    </div>
  );
}

export default App;

