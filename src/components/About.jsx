import logo from '../assets/logo.png';


export default function About() {
    return (
            <div id="about" className="about_content">
            <h1 className="title">About Us</h1> 
            <div className="about parent">
                <img className='div1' src={logo} alt="EduJoy logo" />
                <div className='about_text'>
                    <h2 className='div2'>About EduJoy-AIIiance IsetKr Club.</h2>
                    <p className='div3'>Join the EduJoy-AIIiance IsetKr Club, a tech community at the <span>Higher Institute of Technological Studies of Kairouan</span>. Founded in <span>2024</span>, we help you develop practical tech skills for the professional world. Learn from <span>workshops</span>, and <span>training</span> in various tech domains. <span>Earn certificates</span> and join our board team. Follow us on our website and social media. <span id="club_name">EduJoy-AIIiance IsetKr Club:</span> <span>Smile, learn, grow.</span></p>
                </div>
            </div>
            </div>
        
    )
}