import './index.scss'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pomodoroPic from '../../assets/images/Pomodoro-Timer.png';
import noteTaker from '../../assets/images/noteTake.png';

const About = () => { 

    return (
        <div className="container about-page">
            <div className ='text-zone'>
                <h1>
                    About Me
                </h1>
                <p>
                    I'm a Freshman at Princeton University, studying computer
                    science and pursuing a certificate in Technology and Society. 
                </p>
                <p>
                    I have a particular interest in human-computer interaction and UI/UX interfaces.
                </p>
                <p>
                    In my free time, I like to play volleyball, spend time with friends, 
                    and read.
                </p>
                <br/><br/>

                <h1>
                    My Projects
                </h1>
                <h2>Pomodoro Timer</h2>
                <img className='pomoPic' src={pomodoroPic} alt="pomodoro"/>  
                <p>
                    <b>Description:</b> Study Timer with session times and break times, including reset
                    button and adjustable session/break lengths
                    <br/><br/>
                    <b>Technologies:</b> HTML, CSS, BootStrap
                </p>
            
                <h2>NoteTaker</h2>
                <img className='notePic' src={noteTaker} alt="notetake"/>
                <p>
                    <b>Description:</b> Simple Note Taking App
                    <br/><br/>
                    <b>Technologies:</b> XCode, SwiftUI, Swift
                    Add notes through SwiftUI app
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