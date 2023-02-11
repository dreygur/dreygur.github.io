import React from 'react';
import './Socials.scss';

const Socials = () => {
    return (
        <div className="share-buttons">
            <a className='share-button' href="*" target="_blank" rel="noopener noreferrer">
                <div className="">
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            twitter
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa fa-twitter"></i>
                    </div>
                </div>
            </a>
            <a href="*" className='share-button' target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            facebook
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa fa-facebook"></i>
                    </div>
                </div>
            </a>
            <a href="*" className="share-button" target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            github
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa-brands fa-github"></i>
                    </div>
                </div>
            </a>
            <a href="*" className="share-button" target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            youtube
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa-brands fa-youtube"></i>
                    </div>
                </div>
            </a>
            <a href="*" className="share-button" target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            linkedin
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </a>
            <a href="*" className="share-button" target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            Gmail
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon  fa-sharp fa-solid fa-square-envelope"></i>
                    </div>
                </div>
            </a>
            <a href="*" className="share-button" target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            telegram
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa-brands fa-telegram"></i>
                    </div>
                </div>
            </a>
            <a href="*" className="share-button" target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            discord
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa-brands fa-discord"></i>
                    </div>
                </div>
            </a>
            <a href="*" className="share-button" target="_blank" rel="noopener noreferrer">
                <div>
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            whatsapp
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa-brands fa-square-whatsapp"></i>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Socials;