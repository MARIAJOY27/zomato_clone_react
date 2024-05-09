import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="row p-5 mt-md-5" style={{backgroundColor:"rgb(248, 248, 248)"}}>
      {/* <h3 style={{overflowY:"hidden"}}>ZOMATO</h3> */}
      <Link to={'/'}><img className='mt-5 ms-5 mb-5' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" width={'150px'} alt="zomato-logo" /></Link>
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <h6 style={{fontWeight:"bold"}}>ABOUT ZOMATO</h6>
        <p>Who We Are</p>
        <p>Blog</p>
        <p>Work With Us</p>
        <p>Investor Relations</p>
        <p>Report Fraud</p>
        <p>Press Kit</p>
        <p>Contact Us</p>
      </div>
      <div className="col-md-2">
        <h6 style={{fontWeight:"bold"}}>ZOMAVERSE</h6>
        <p>Zomato</p>
        <p>Blinkit</p>
        <p>Feeding India</p>
        <p>Hyperpure</p>
        <p>Zomaland</p>
      </div>
      <div className="col-md-2">
        <h6 style={{fontWeight:"bold"}}>FOR RESTAURANTS</h6>
        <p>Partner With Us</p>
        <p>Apps For You</p>
      </div>
      <div className="col-md-2">
        <h6 style={{fontWeight:"bold"}}>LEARN MORE</h6>
        <p>Privacy</p>
        <p>Security</p>
        <p>Terms</p>
        <p>Sitemap</p>
      </div>
      <div className="col-md-3">
        <h6 style={{fontWeight:"bold"}}>SOCIAL LINKS</h6>
        <div className='d-flex mt-3'>
        <FontAwesomeIcon icon={faLinkedin} size='xl' className='me-2' style={{borderRadius:"50%"}} />
        <FontAwesomeIcon icon={faInstagram} size='xl'className='me-2' style={{borderRadius:"50%"}} />
        <FontAwesomeIcon style={{borderRadius:"50%"}} icon={faTwitter} size='xl' className='me-2' />
        <FontAwesomeIcon style={{borderRadius:"50%"}} icon={faYoutube} size='xl' className='me-2' />
        <FontAwesomeIcon style={{borderRadius:"50%"}} icon={faFacebook} size='xl' />
        </div>
        <div>
          <img className='mt-3' style={{width:"140px"}} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
        </div>
        <div>
          <img className='mt-3' style={{width:"140px"}} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
        </div>
      </div>
      
      

    </div>
  )
}

export default Footer
