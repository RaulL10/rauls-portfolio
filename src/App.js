import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import TopBtn from './components/TopBtn'
import Typical from 'react-typical'

const App = () => {
  return (
    <div className="App">

      <Router>

          <NavBar/>
          <TopBtn />

          <div id="Header" className="header">
            <h1>I Am A 

              <Typical
                className='typical'
                loop={Infinity}
                wrapper='b'
                steps={[
                  ' Father',
                  3000,
                  ' Full Stack Software Engineer',
                  3000,
                  ' Front End Developer',
                  3000,
                  ' Programmer',
                  3000,
                  ' Gamer (wannabe)',
                  3000
                ]}
              />
            </h1>
          </div>

          <section id="S1" className="section-1">
            <h1> ABOUT ME </h1>
            <p className='aboutP'>Hello, I am a 26 year old father of a 2 year old little boy. I have lived in 
              Los Angeles my entire life. 1st generation American hoping to live out the American dream. Break the
              cycle, and show my son along with others that if I can so can they. Tech geek who just loves gaming and computers. 
              I got into coding and received a partial scholarship from Adobe to attend General Assembly 
              where I currently am finishing up a boot camp. Wide eyed- and eager 
              for a chance to prove myself I am looking for an opportunity.  
              <span>  Thank You so much!</span></p>
          </section>

          <section id="S2" className="section-2">
            <h1 className='ptitle'> PROJECTS </h1>

            <div className='left'>
              <img src="https://i.imgur.com/ZqyNSv8.png" width="500px" alt="" ></img>
              <aside>
                <h2> World Cup Tracker </h2>
                <br></br>
                <div className='skills'>
                  <p>Technologies Used:</p>
                  <br></br>
                  <i class="fa-brands fa-react fa-2xl"></i>
                  <i class="fa-brands fa-html5 fa-2xl"></i>
                  <i class="fa-brands fa-css3-alt fa-2xl"></i>
                  <i class="fa-brands fa-js-square fa-2xl"></i>
                </div>
                <label>Description:</label>
                <li>MERN Stack App</li>	
                <li> React project meant to provide up to date live scores and information on the world cup </li>
                <li> Used the MySportsMonk API to get the data coming in up to date even during the games </li>
                <li>Users can create an account and place predictions on matches and see their predictions compared to others</li>
                <li><span>MOBILE FRIENDLY</span></li>
                <footer>
                  <a href='https://world-cup-tracker-2022.herokuapp.com/' target='_blank' rel='noreferrer' className='weblink'>Deployed App</a> 
                  <a href='https://github.com/RaulL10/world-cup-tracker' target='_blank' rel='noreferrer' className='weblink'>GitHub Code</a>
                </footer>

              </aside>
            </div>


            <div className='right'>
              <img src="https://i.imgur.com/JhberSW.png" width="500px" alt="" ></img>
              <aside>
                <h2> Estates-Castle </h2>
                  <br></br>
                  <div className='skills'>
                    <p>Technologies Used:</p>
                    <br></br>
                    <i class="fa-brands fa-python fa-2xl"></i>
                    <i class="fa-brands fa-html5 fa-2xl"></i>
                    <i class="fa-brands fa-css3-alt fa-2xl"></i>
                    <i class="fa-brands fa-aws fa-2xl"></i>
                  </div>
                  <label>Description:</label>
                  <li> Used HTML, CSS, Python, Django, and PostgreSQL </li>
                  <li> Users can make an account and log in to create homes or view others </li>
                  <li> Uses AWS3 to upload images </li>
                  <li> Worked in a team environment, everyone doing their part to push up to the main project </li>
                  <li> Was in charge of the group and main responsibilities </li>
                  <footer>
                  <a href='https://estates-castle.herokuapp.com/' target='_blank' rel='noreferrer' className='weblink'>Deployed App</a>
                  <a href='https://github.com/RaulL10/estates' target='_blank' rel='noreferrer' className='weblink'>GitHub Code</a>

                  </footer>
              </aside>
            </div>


            <div className='left'>
              <img src="https://i.imgur.com/goJAQxJ.png" width="500px" alt="" ></img>
              <aside>
                <h2>Pokédex</h2>
                <br></br>
                <div className='skills'>
                  <p>Technologies Used:</p>
                  <br></br>
                  <i class="fa-brands fa-python fa-2xl"></i>
                  <i class="fa-brands fa-html5 fa-2xl"></i>
                  <i class="fa-brands fa-css3-alt fa-2xl"></i>
                  <i class="fa-brands fa-aws fa-2xl"></i>
                </div>
                <label>Description:</label>
                <li> Used HTML, CSS, Python, Django, and PostgreSQL </li>
                <li> Uses AWS3 to upload images </li>
                <li> Users can create pokemon and add them to the website database</li>
                <li> Uses 4 data entities; the user model, pokemon model, pokeball model, and lastly the embedded training data</li>
                <footer>
                  <a href='https://python-pokedex.herokuapp.com/' target='_blank' rel='noreferrer' className='weblink'>Deployed App</a>
                  <a href='https://github.com/RaulL10/Pokedex' target='_blank' rel='noreferrer' className='weblink'>GitHub Code</a>
                </footer>
                
              </aside>
            </div>


            <div className='right'>
              <img src="https://i.imgur.com/OecpJLb.png" width="500px" alt="" ></img>
              <aside>
                <h2> Narutoverse </h2>
                  <br></br>
                  <div className='skills'>
                    <p>Technologies Used:</p>
                    <br></br>
                    <i class="fa-brands fa-html5 fa-2xl"></i>
                    <i class="fa-brands fa-css3-alt fa-2xl"></i>
                    <i class="fa-brands fa-js-square fa-2xl"></i>
                  </div>
                  <label>Description:</label>
                 
                  <li> MEN stack app - Used MongoDB, Express, Node.js</li>
                  <li>App has full CRUD capabilities saving all data in the Mongo Atlas Db</li>
                  <li>All Naruto fans can log in using Google OAuth and create or chat about their favorite character(s)</li>
                  <li>Usng Multer users can upload images/gifs</li>
                  <li><span>MOBILE FRIENDLY</span></li>
                  <footer>
                    <a href='https://narutoverse.herokuapp.com/' target='_blank' rel='noreferrer' className='weblink'>Deployed App</a>
                    <a href='https://github.com/RaulL10/narutoverse' target='_blank' rel='noreferrer' className='weblink'>GitHub Code</a>
                  </footer>
              </aside>
            </div>


            <div className='left'>
              <img src="https://i.imgur.com/jZSeP8Y.png" width="500px" alt="" ></img>
              <aside>
              <h2>Marvel Madness</h2>
                <br></br>
                <div className='skills'>
                  <p>Technologies Used:</p>
                  <br></br>
                  <i class="fa-brands fa-html5 fa-2xl"></i>
                  <i class="fa-brands fa-css3-alt fa-2xl"></i>
                  <i class="fa-brands fa-js-square fa-2xl"></i>
                </div>
                <label>Description:</label>
                <li>Single page game using only JavaScript, HTML, and CSS</li>
                <li>Concentration memory game using 8 marvel comics characters</li>
                <li>After every reset a shuffle function will trigger and a new game begins</li>
                <li>User must use 35 clicks or less to flip each paid over. Goodluck!</li>
                <li><span>MOBILE FRIENDLY</span></li>
                <footer>
                  <a href='https://raull10.github.io/marvel-concentration/' target='_blank' rel='noreferrer' className='weblink'>Deployed App</a>
                  <a href='https://github.com/RaulL10/marvel-concentration' target='_blank' rel='noreferrer' className='weblink'>GitHub Code</a>
                </footer>

              </aside>
            </div>
          
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

              <a href="https://github.com/RaulL10" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/Ksiclk5.png" alt="" height="40px" width="40px" className='socials'/> </a>
              <a href="https://www.linkedin.com/in/raullopez1410/" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/MTKBoLY.png" alt="" height="40px" width="40px" className='socials'></img> </a>
              <a href="https://twitter.com/titohuncho" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/YZgkpQG.png" alt="" height="40px" width="40px" className='socials'></img> </a>
              <a href="https://twitch.com/tithuncho" rel="noreferrer" target="_blank"> <img src="https://i.imgur.com/aWJafyL.png" alt="" height="40px" width="40px" className='socials'></img> </a>
              </div>
            </div>
          </section>

        </Router>
        
    </div>
  );
}

export default App;

