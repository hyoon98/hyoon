import './Intro.css'
import styled, { keyframes } from "styled-components";
import portrait from '../../assets/portrait.png';

const fadeIn = keyframes`
from {
    opacity:0;
}
to{
    opacity:1;
}`;
const fadeInDelay = keyframes`
0% { opacity:0; }
15% { opacity:0; }
100% { opacity:1; }
`;
const FadeIn = styled.div`
animation: ${fadeIn} 4s 1;
`;
const FadeInDelay = styled.div`
animation: ${fadeInDelay} 8s 1;
`;

export default function Intro() {
    return (
        <div className='Intro' id='intro'>
            <div className="home-portrait">
                <img className='portrait' src={portrait} alt=""></img>
            </div>
            <div className="home-text">
                <FadeIn>
                <h1 className="name">
                    <span className='punctuation'>[</span>Hi. I'm Hansoo<span className='punctuation'>]</span>
                </h1>
                </FadeIn>
                <FadeInDelay>
                <p className="job">a full-stack dev and comp-sci student </p>
                </FadeInDelay>
            </div>
        </div>
    )
}
