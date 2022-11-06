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
                            a man, who was searching for the right carrier path a long time, but I found it.
                            For few years now I was dreaming of being web developer, but I choosed a wrong path
                            so I was stucked at university. Once I started it, I wanted to finish it. So now after
                            that I can finally realizing my dream of being software developer.
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
                            <a href="src\components\about\CV_Branislav_Saly.pdf" download=''>Download my CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About