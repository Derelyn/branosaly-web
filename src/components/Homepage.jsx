import portrait from './imgs/myPhoto2.jpg'
import Typewriter from 'typewriter-effect';


const Frontpage = () => {
    return (
        <div className="maintitle" id="home">
            <div id="mainphoto">
                <img src={portrait} alt="portrait" />
            </div>
            <h1>
                Hello, I'm <strong>Branislav Šály</strong>, Self-thought Web
                Developer, Who is Searching Junior Front-end Job in Bratislava.
            </h1>
            <div className='typing-effect'>
                <Typewriter
                    options={{
                        strings: [
                            '<strong>Hire me</strong>',
                            'I will learn <strong>anything</strong>',
                            'Coded in <strong>React</strong>'
                        ],
                        cursor: [''],
                        speed: 800,
                        deleteSpeed: 45,
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