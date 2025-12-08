import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
                <span className="footer-logo-text">FunnMint</span>
              </div>
              <p className="footer-tagline">
                {' '}
                Create, launch, and dominate the meme coin revolution. Start
                with 10k USDT and become the King of the Hill.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-social">
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Telegram" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Discord" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></path>
                        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.9 11.9 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5c-2 5.667-2.167 9.833-1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2-2 2-3"></path>
                        <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-columns">
              <div className="footer-column">
                <h3 className="footer-column-title">Platform</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Create &amp; Manage Coin</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>King of the Hill</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Volume Bots</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Sniping Tools</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Pre-Launch Buying</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Features</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Play as Guest</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Sign Up Rewards</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Quest System</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Wallet Manager</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Token Graduation</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Resources</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Documentation</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>API Reference</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Telegram Bot</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Community</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Support</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Company</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Roadmap</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Security</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Terms of Service</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                {' '}
                &amp;copy; 2025 FunnMint. All rights reserved. Launch your meme
                coin empire today.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-badges">
                <div className="footer-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                  <span>Secure</span>
                </div>
                <div className="footer-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    ></path>
                  </svg>
                  <span>Fast Trading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-accent-gradient"></div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactions">
(function(){
  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.setProperty("--hover-state", "1")
    })

    link.addEventListener("mouseleave", function () {
      this.style.setProperty("--hover-state", "0")
    })
  })

  const socialLinks = document.querySelectorAll(".footer-social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      ripple.style.cssText = \`
      position: absolute;
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      pointer-events: none;
      animation: ripple-effect 0.6s ease-out;
    \`

      const rect = this.getBoundingClientRect()
      ripple.style.left = e.clientX - rect.left - 5 + "px"
      ripple.style.top = e.clientY - rect.top - 5 + "px"

      this.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)
    })
  })

  const style = document.createElement("style")
  style.textContent = \`
  @keyframes ripple-effect {
    to {
      transform: scale(8);
      opacity: 0;
    }
  }
\`
  document.head.appendChild(style)
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
