import portrait from './imgs/portrait.jpg'
import Typewriter from 'typewriter-effect';


const Frontpage = () => {
    return (
        <div className="maintitle">
            <div id="mainphoto">
                <img src={portrait} alt="portrait" />
            </div>
            <h1>
                Hello, I'm <strong>Branislav Šály</strong>, Self-thought Web
                Developer, <br />Who is Searching Junior Front-end Job in Bratislava.
            </h1>
            <div className='typing-effect'>
                <Typewriter
                    options={{
                        strings: [
                            '<strong>Hire me</strong> please',
                            'I will learn <strong>anything</strong>',
                        ],
                        cursor: [''],
                        deleteSpeed: 40,
                        autoStart: true,
                        loop: true,
                        pauseFor: 2000,
                    }}
                />
            </div>
        </div>
    )
}

export default Frontpage