import './index.scss'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pomodoroPic from '../../assets/images/Pomodoro-Timer.png';
import noteTaker from '../../assets/images/noteTake.png';
import dailyprince from '../../assets/images/dailyprincepreview.png';
import gmail_filter from '../../assets/images/gmail_filter.png';
import prospectpage from '../../assets/images/prospectpage.png';

const About = () => { 

    return (
        <div className="container about-page">
            <div className ='text-zone'>
                <h1>
                    About me
                </h1>
                <p>
                    I'm a sophomore at Princeton studying computer
                    science. 
                </p>
                <p>
                    I have a interest in Computer Vision, Security, Machine Learning,
                    and Front-end Development.
                </p>
                <p>
                    On campus, I'm also part of The Daily Princetonian, the Princeton Entrepreneurship Club, 
                    and the Men's Club Volleyball Team. 
                </p>

                <h1>
                    Projects
                </h1>
                <p>
                    Here are projects I'm involved in on Campus, as well as some personal coding projects.
                </p>

                <h2>Daily Princetonian News Website</h2>

                <img className='princePic' src={prospectpage} alt="Prospect Page"/> 

                <p>
                    I help maintain and update <a target="_blank" rel='noreferrer' href='https://www.dailyprincetonian.com/'> The Daily Princetonian</a> 
                    , Princeton's student-run newspaper website, which I've contributed to through projects such as this re-design of the Art's & Culture page.
                </p>

                <h2>Campus iOS App</h2>

                <img className='campusPic' src={dailyprince} alt="Campus App"/> 
                
                <p>
                    I'm involved in developing an iOS app for Princeton students, 
                    featuring campus news stories, student events/opportunities, 
                    dining hall options, and more. Developed with React Native, ExpoGo,
                    and Firestore.
                </p>

                <h2>Gmail Filter</h2>

                <img className='gmail_filter' src={gmail_filter} alt="Gmail Filter Picture"/> 

                <p>
                    Personal project to automate Gmail organization for common information 
                    sent through university email channels such as sales, lost items, 
                    student opportunities, etc. Developed through Google's Gmail API. 
                </p>

                <h2>Pomodoro Timer</h2>
                
                <img className='pomoPic' src={pomodoroPic} alt="pomodoro"/>  

                <p>
                    Study Timer alternating between session times 
                    and break times, including reset button and adjustable session/break lengths. 
                    Created using BootStrap.
                </p>
            
                <h2>NoteTaker</h2>
                <img className='notePic' src={noteTaker} alt="notetake"/>
                <p>
                    XCode project using SwiftUI for taking quick 
                    notes / reminders.
                </p>

                <h2>Personal Website</h2>
                <p>
                <b>Description: </b> Animated website following FreeCodeCamp React Website Tutorial
                <br/><br/>
                <b>Technologies:</b> HTML, CSS, React, Animate.css, Sass, FortAwesome Icon Library
                </p>

            </div>
        

            <div className='stage-cube-cont'>
                <div className = 'cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD810"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color="#4B8BBE"/> 
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About