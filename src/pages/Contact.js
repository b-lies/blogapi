import React, { Fragment } from 'react'

export default function Contact() {
  return (
    <Fragment>
   <main id="main">
        <section id="contact" className="contact mb-5">
        <div className="container" data-aos="fade-up">

            <div className="row">
            <div className="col-lg-12 text-center mb-5">
                <h1 className="page-title">Contact us</h1>
            </div>
            </div>

            <div className="row gy-4">

            <div className="col-md-4">
                <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <address>A108 Adam Street, NY 535022, USA</address>
                </div>
            </div>

            <div className="col-md-4">
                <div className="info-item info-item-borders">
                <i className="bi bi-phone"></i>
                <h3>Phone Number</h3>
                <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="info-item">
                <i className="bi bi-envelope"></i>
                <h3>Email</h3>
                <p><a href="mailto:info@example.com">info@example.com</a></p>
                </div>
            </div>

            </div>

            <div className="form mt-5">
            <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row">
                <div className="form-group col-md-6">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="form-group col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
                </div>
                <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
            </div>

        </div>
        </section>
    </main>
    </Fragment>
  )
}
