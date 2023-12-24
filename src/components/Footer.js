import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Download</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/download/web" className="text-dark">Web Browser</a></li>
              <li><a href="/download/windows" className="text-dark">Windows</a></li>
              <li><a href="/download/macos" className="text-dark">macOS</a></li>
              <li><a href="/download/mobile" className="text-dark">iOS & Android</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/about/social" className="text-dark">About social</a></li>
              <li><a href="/about/security" className="text-dark">Security</a></li>
              <li><a href="/about/support" className="text-dark">Customer Support</a></li>
              <li><a href="/about/partners" className="text-dark">Partners</a></li>
              <li><a href="/about/careers" className="text-dark">Careers - Join Us!</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Resources</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/resources/join" className="text-dark">Join</a></li>
              <li><a href="/resources/help" className="text-dark">Help Center</a></li>
              <li><a href="/resources/developers" className="text-dark">Developers</a></li>
              <li><a href="/resources/status" className="text-dark">Status</a></li>
              <li><a href="/resources/communities" className="text-dark">Communities</a></li>
            </ul>
          </div>
        </div>
      </div>
     
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
     
      <ul className="nav justify-content-center justify-content-lg-end lh-1">
               <li style={{ marginRight: '13px', display: 'inline-block' }}>Support</li>
               <li style={{ marginRight: '13px', display: 'inline-block' }}>Docs</li>
               <li style={{ marginRight: '13px', display: 'inline-block' }}>Terms of Use</li>
               <li style={{ marginRight: '13px', display: 'inline-block' }}>Privacy & Terms</li>
             </ul>
           
             <li style={{ display: 'inline-block' }}> 2023 Websiteica All rights reserved.</li>
      </div>
      
    </footer>
  );
}

export default Footer;