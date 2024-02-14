import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/contact-p.css'
import { faEnvelope, faMapMarkedAlt, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

function ContactPage(){
    return(
        <>
            <div className='contact'>
                <div className='contact-fream'>
                    <h1>Contact us</h1>
                    <div>
                    <span>Home</span>
                    <span className='ms-2 me-2'>/</span>
                    <span>Contact us</span>
                    </div>
                </div>
                <div className='contact-holder'>
                    <div className='half'>
                        <span className='head'>CONTACT INFO</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.</p>
                        <div>
                            <span><FontAwesomeIcon icon={faMapMarkedAlt} className='contact-i'/>
                                <span>Address: Michael I. Days 3756Preston Street Wichita,KS 67213</span>
                             </span>
                            <span><FontAwesomeIcon icon={faPhoneFlip} className='contact-i'/>
                                <span>Phone: +1-888 705 770</span>
                             </span>
                            <span><FontAwesomeIcon icon={faEnvelope} className='contact-i'/>
                                <span>Email: contactinfo@gmail.com</span>
                             </span>
                        </div>
                    </div>
                    <div className='half'>
                        <form id='contact' action='#'>
                            <span className='head'>GET IN TOUCH</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                            <input type='text' placeholder='Your Name'/>
                            <input type='email' placeholder='Your Email'/>
                            <input type='text' placeholder='Subject'/>
                            <textarea placeholder='Your Message'/>
                            <input type='submit' value="Send message" className='send'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;