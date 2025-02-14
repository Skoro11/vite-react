import "./Contact.css"

function ContactPage(){
    return(
       
        <section className="mg-inline contact-page pd-in-30p pd-in-15-mb">
        <div className="links-home"><a className="home-link" href="/">Home</a> / Contact</div>

<div className="contact-container flex mg-bottom-100 direction-column-767">
    <div className="left-contact-container no-display-320-767">
        <ul className="flex space-between direction-column height-100 ">
            <li className="flex align-center bold"><img src="call-us-icon.png" alt="Call us"/><span className="padd-left-5">Call to us</span></li>
            <li className="no-display-1023">We are available 24/7, 7 days a week.</li>
            <li>Phone: +8801611112222</li>
            <li><hr></hr></li>
            <li className="flex align-center bold "><img src="write-to-us-icon.png" alt="Write to us"/><span className="padd-left-5">Write To US</span></li>
            <li className="no-display-1023">Fill out our form and we will contact you within 24 hours.</li>
            <li>Emails: customer@exclusive.com</li>
            <li>Emails: support@exclusive.com</li>
        </ul>
    </div>
    <div className="right-contact-container">
        <div className="flex gap-3">
        <input type="text" className="input-contact-page" placeholder="Your Name*" />
        <input type="text" className="input-contact-page" placeholder="Your Email*" />
        <input type="text" className="input-contact-page" placeholder="Your Phone*" />
        </div>
        <div className="send-message-container"><textarea className="input-contact-page send-message-textarea" placeholder="Your Message" /></div>
        <button className="send-message-btn">Send Message</button>
    </div>
</div>
        </section>
        

    )
}
export default ContactPage;