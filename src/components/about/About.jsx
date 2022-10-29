import aboutPicture from './imgs/2.jpg'

const About = () => {
    return (
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
                        that I can finally realizing my dream of being front-end developer.
                    </p>
                    <div className='about1'>
                        <p><strong>Age:</strong> 24</p>
                        <p><strong>Currently:</strong> self-employed</p>
                    </div>
                    <div className='about2'>
                        <p><strong>Residence:</strong> Bratislava, Nová Baňa</p>
                        <p><strong>Email:</strong> b.saly84@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About