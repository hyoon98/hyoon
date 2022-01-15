import './Navbar.css'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>h<span className='punctuation'>.</span>y</a>
                    <div className='itemContainerEmail'>
                        <EmailIcon fontSize='medium' className='icon'/>
                        <span className='iconText'>hyoon1998<span className='punctuation'>@</span>gmail<span className='punctuation'>.</span>com</span>
                    </div>
                </div>
                <div className="right">
                    <a href="https://github.com/hyoon98">
                        <div className='itemContainer'>
                                <GitHubIcon  fontSize='medium' className='icon'/>
                                <span className='iconText'>hyoon98</span>
                        </div>
                    </a>
                    <a href="#projects">
                        <div className='itemContainer'>
                                <WorkOutlineIcon  fontSize='medium' className='icon'/>
                                <span className='iconText'>Projects</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
