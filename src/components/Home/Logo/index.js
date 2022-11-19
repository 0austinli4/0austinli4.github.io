import './index.scss';
import LogoA from '../../../assets/images/a-logo.png'

const Logo = () => {

    // const bgRef = useRef();
    // const outlineLogoRef =useRef();
    // const solidLogoRef = useRef();

    return (
        <div className='logo-container'>
                <img className='solid-logo' src={LogoA} alt="A" />            
        </div>
    )
}

export default Logo