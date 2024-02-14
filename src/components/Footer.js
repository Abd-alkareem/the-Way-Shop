import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faMapMarker, faPhoneAlt, faRss, faSearch, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlus, faLinkedinIn, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer (){
    return(
        <>
        <div className="footer">
            <div className='footer-holder'>
                <div className='section Fos-1'>
                    <h2>ABOUT THEWAYSHOP</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='social'>
                        <i>
                            <FontAwesomeIcon icon={faFacebookF} className='footer-i'/>
                         </i>
                        <i>
                            <FontAwesomeIcon icon={faTwitter} className='footer-i'/>
                        </i>
                        <i>
                            <FontAwesomeIcon icon={faLinkedinIn} className='footer-i'/>
                        </i>
                        <i>
                            <FontAwesomeIcon icon={faGooglePlus} className='footer-i'/>
                        </i>
                        <i>
                            <FontAwesomeIcon icon={faRss} className='footer-i'/>
                        </i>
                        <i>
                            <FontAwesomeIcon icon={faPinterest} className='footer-i'/>
                        </i>
                        <i>
                            <FontAwesomeIcon icon={faWhatsapp} className='footer-i'/>
                        </i>
                    </div>
                </div>
                <div className='section Fos-2'>
                    <h2>INFORMATION</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Customer Service</li>
                        <li>Our Sitemap</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Delivery Information</li>
                    </ul>
                </div>
                <div className='section Fos-3'>
                    <h2>CONTACT US</h2>
                    <div>
                        <FontAwesomeIcon icon={faMapMarker} className='footer-i2'/>
                        <p>Address: <span>Michael I. Days 3756 Preston Street Wichita,KS 67213</span></p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhoneAlt} className='footer-i2'/>
                        <p>Phone: <span>+1-888 705 770</span></p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className='footer-i2'/>
                        <p>Email: <span>contactinfo@gmail.com</span></p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}


export default Footer;