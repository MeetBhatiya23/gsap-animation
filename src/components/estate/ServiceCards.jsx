import React from "react";
import "./serviceCards.css";

function ServiceCards() {
    return (
        <section className="service-cards-section">
            <div className="service-cards-container">
                <div className="service-cards-header">
                    <h2 className="service-cards-title">Website Development Services</h2>
                    <p className="service-cards-subtitle">
                        We create stunning, modern websites that drive results. From concept to launch,
                        we deliver exceptional digital experiences that help your business grow online.
                    </p>
                </div>

                <div className="service-cards-grid">
                    <div className="service-card">
                        <div className="service-card-content">
                            <div className="service-card-icon-container">
                                <div className="service-card-icon">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="service-card-step">Step 1</div>
                            </div>
                            <h3 className="service-card-title">Discovery & Planning</h3>
                            <p className="service-card-description">
                                We start by understanding your business goals, target audience, and requirements.
                                This phase includes competitor analysis, user research, and creating a comprehensive project roadmap.
                            </p>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-card-content">
                            <div className="service-card-icon-container">
                                <div className="service-card-icon">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <div className="service-card-step">Step 2</div>
                            </div>
                            <h3 className="service-card-title">Design & Prototyping</h3>
                            <p className="service-card-description">
                                Our expert designers create stunning visual concepts and interactive prototypes.
                                We focus on user experience, modern aesthetics, and responsive design principles.
                            </p>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-card-content">
                                <div className="service-card-icon-container">
                                <div className="service-card-icon">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                </div>
                                <div className="service-card-step">Step 3</div>
                            </div>
                            <h3 className="service-card-title">Development & Coding</h3>
                            <p className="service-card-description">
                                Using cutting-edge technologies and best practices, we build your website with clean,
                                efficient code. We ensure fast loading times, SEO optimization, and cross-browser compatibility.
                            </p>
                        </div>
                    </div>

                    {/* <div className="service-card">
                        <div className="service-card-content">
                            <div className="service-card-step">Step 4</div>
                            <div className="service-card-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="service-card-title">Testing & Launch</h3>
                            <p className="service-card-description">
                                Rigorous testing across all devices and browsers ensures flawless functionality. 
                                We handle deployment, domain setup, and provide comprehensive launch support.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default ServiceCards;
