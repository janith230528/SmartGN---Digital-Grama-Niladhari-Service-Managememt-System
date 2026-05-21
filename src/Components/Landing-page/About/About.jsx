import React from 'react'
import './About.css'

function About() {
  return (
    <>
     <section id="about" className="section">
        <div className="about-container">
            <div id="container-with-image">
                <div className="about-content">
                    <p className="title">About SmartGN</p><br />
                    <p className="description">SmartGN is a modern digital initiative designed to transform the 
                    traditional Grama Niladhari service into a high-speed, transparent, and user-friendly experience. 
                    We aim to bridge the gap between village-level administration and citizens by leveraging the latest
                    technology to ensure every resident can access essential services from the comfort of their home.
                    </p>
                </div>
                <div id="about-image">
                    <img src="favicon.png" alt="favicon-image" />
                </div>
             </div>

             <div className="about-content">
                <p className="title">Our Objectives</p><br />
                <p className="objectives">
                    <ul>
                        <li><b>Digital Transformation:</b> Moving manual paperwork and physical registers into a
                            secure, cloud-based management system.</li><br />
                        <li><b>Service Accessibility:</b> Ensuring that residents in even the most remote villages can 
                            request official documents and aid with a smartphone.</li><br />
                        <li><b>Enhanced Transparency:</b> Providing real-time tracking for applications so citizens know 
                            exactly when their requests are processed.</li><br />
                        <li><b>Disaster Readiness:</b> Establishing a direct digital link for emergency alerts and rapid 
                            distribution of relief allowances.</li><br />
                        <li><b>Inclusivity:</b> Offering a multilingual interface in Sinhala, Tamil, and English to serve every 
                            citizen in Sri Lanka equally.</li>
                    </ul>
                </p>
            </div>
        </div>
        
    </section>
    </>
   
  )
}

export default About