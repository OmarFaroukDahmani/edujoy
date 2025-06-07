import linkedin from '../assets/inkedin_icon.svg'
import omar from "../assets/omar.jpg"

export default function Team() {

    return(
    <div className='team'>
    <div id="team" class="responsive-container-block container">
    <p class=" title text-blk team-head-text"> Our Team </p>
    <div class="responsive-container-block">
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
    <div class="card">
        <div class="team-image-wrapper">
        <img class="team-member-image" src={omar} alt="icon"/>
        </div>
        <p class="text-blk name">
          Omar Farouk Dahmani
        </p>
        <p class="text-blk position">
          Presedent
        </p>
        <p class="text-blk feature-text">
          If you want it, just get it.
        </p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/omar-farouk-dahmani-b3a480334/" target="_blank" rel="noopener noreferrer">
            <img class="linkedin-icon" src={linkedin} rel="noopenr" alt="icon"/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" rel="noopenr" alt="icon"/>
          </a>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div class="card">
        <div class="team-image-wrapper">
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png" rel="noopenr" alt="icon"/>
        </div>
        <p class="text-blk name">
          Assil GLii
        </p>
        <p class="text-blk position">
          Vice-Presedent
        </p>
        <p class="text-blk feature-text">
          Lorem ipsum dolor sit amet .
        </p>
        <div class="social-icons">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img class="linkedin-icon" src={linkedin} rel="noopenr" alt="icon"/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" rel="noopenr" alt="icon"/>
          </a>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div class="card">
        <div class="team-image-wrapper">
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png" rel="noopenr" alt="icon"/>
        </div>
        <p class="text-blk name">
          Fahmi Zarrougi
        </p>
        <p class="text-blk position">
          Founder
        </p>
        <p class="text-blk feature-text">
          Lorem ipsum dolor sit amet .
        </p>
        <div class="social-icons">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img class="linkedin-icon" src={linkedin} rel="noopenr" alt="icon"/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" rel="noopenr" alt="icon"/>
          </a>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div class="card">
        <div class="team-image-wrapper">
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png" alt="icon"/>
        </div>
        <p class="text-blk name">
          Raniya Kawem
        </p>
        <p class="text-blk position">
          RH
        </p>
        <p class="text-blk feature-text">
          Lorem ipsum dolor sit amet .
        </p>
        <div class="social-icons">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img class="linkedin-icon" src={linkedin} rel="noopenr" alt="icon"/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" rel="noopenr" alt="icon"/>
          </a>
        </div>
      </div>
    </div>
</div>
</div>
</div>
    ) 
}