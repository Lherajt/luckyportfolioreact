import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'reactstrap'
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (

            <Container fluid 
            className="footer"
            >
                <div className="row">             
                  
                    <div className="col flex-col text-center flex items-center justify-center py-2 footer-links">
                        <a className="m-2 footer-a text-white h1" target="_blank" rel="noopener noreferrer" href="https://twitter.com/lherajt"><FontAwesomeIcon className="footer-link" icon={faTwitterSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" target="_blank" rel="noopener noreferrer" href="https://github.com/Lherajt"><FontAwesomeIcon className="footer-link" icon={faGithubSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" href="mailto:lherajt@gmail.com"><FontAwesomeIcon className="footer-link" icon={faEnvelopeSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" target="_blank" rel="noopener noreferrer" href="tel:201-640-7892"><FontAwesomeIcon className="footer-link" icon={faPhoneSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lukasherajt"><FontAwesomeIcon className="footer-link" icon={faLinkedin}></FontAwesomeIcon></a>
                      
                    </div>
                  
                </div>
            </Container>

    )
}
