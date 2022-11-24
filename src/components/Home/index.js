
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/a-logo.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u', 's', 't', 'i', 'n']
    const job = "computer science student"

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass}_8`}>i,</span>
                <br />
                <span className={`${letterClass}_9`}>I</span>
                <span className={`${letterClass}_10`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={11}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={job.split("")} idx={12} />
                </h1>

                <h2> I'm a Freshman at Princeton University, majoring in Computer Science and pursuing a 
                    certificate in <a target="_blank" rel='noreferrer' href='https://kellercenter.princeton.edu/certificates/program-technology-society'>
                    Technology and Society</a>
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <Logo/>
        </div>
    );
}

export default Home