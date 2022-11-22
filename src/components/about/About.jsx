import React from "react";
import aboutPicture from './imgs/myPhoto1.jpg'

const About = () => {
    return (
        <section className="section" name='about' id='about'>
            <div className='aboutWhole'>
                <hr className='mainPageLine' />
                <div id='aboutPage'>
                    <div className='aboutTitle'>
                        <h1><strong>About</strong> Me</h1>
                    </div>
                    <div className='aboutImg'>
                        <img src={aboutPicture} alt="" />
                    </div>
                    <div className='aboutText'>
                        <p id='about-shortText'>
                            I am from small town called Nova Bana and right now I'm based in Bratislava. I am
                            a man, who was searching for the right carrier path a long time, but I finally found it.
                            Even thought I studied international economic relationships, I wanted to work in a field of web development.
                            So now after I finished my university, I can finally realize my dream of being front-end web developer.
                        </p>
                        <div className='about1'>
                            <p><strong>Age:</strong> 24</p>
                            <p><strong>Currently:</strong> self-employed</p>
                        </div>
                        <div className='about2'>
                            <p><strong>Residence:</strong> Bratislava, Nová Baňa</p>
                            <p><strong>Email:</strong> b.saly84@gmail.com</p>
                        </div>
                        <div className="zivotopis">
                            <a href="CV_Branislav_Saly.pdf" download className="download-btn">Download my CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About