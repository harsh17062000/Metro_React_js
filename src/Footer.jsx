import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <h5 className="fw-bold">Metro</h5>
                        <p className="small">Connecting you to your destinations, seamlessly.</p>
                    </div>


                    <div className="col-md-4 text-center mb-3 mb-md-0">
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
                            <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
                            <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>


                    <div className="col-md-4 text-center text-md-end">
                        <p className="mb-1">Follow Us</p>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white me-2"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white me-2"
                        >
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <p className="small mb-0">&copy; {new Date().getFullYear()} Metro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
