import fb_icon from '../assets/facebook.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-icon">
                    <a href="https://www.facebook.com/profile.php?id=61550578007610" target="_blank" rel="noopener noreferrer"><img src={fb_icon} alt="Facebook" /></a>
                </div>
                <p>&copy; 2025 EduJoy. All rights reserved.</p>
            </div>
        </footer>
    )
}