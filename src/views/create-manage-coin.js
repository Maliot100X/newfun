import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './create-manage-coin.css'

const CreateManageCoin = (props) => {
  return (
    <div className="create-manage-coin-container10">
      <Helmet>
        <title>Create-Manage-Coin - Welcome Cautious Salamander</title>
        <meta
          property="og:title"
          content="Create-Manage-Coin - Welcome Cautious Salamander"
        />
        <link
          rel="canonical"
          href="https://welcome-cautious-salamander-7hu3bx.teleporthq.app/create-manage-coin"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="hero-section">
        <video
          autoPlay="true"
          loop="true"
          muted="true"
          playsInline="true"
          src="https://videos.pexels.com/video-files/35009539/14831196_640_360_30fps.mp4"
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-featured">
              <div className="hero-badge">
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
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
                <span>Launch Your Token Empire</span>
              </div>
              <h1 className="create---manage-coin-hero-title hero-title">
                Create &amp; Manage Your Coin Like a Pro
              </h1>
              <p className="create---manage-coin-hero-subtitle hero-subtitle">
                {' '}
                Start with 1,000 USDT or SOL. Play as guest or sign up with
                Google. Deploy tokens with sniping bots, volume control, and
                pre-launch buying power. 100% pump.fun features plus more.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary btn-lg">
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
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Create New Token
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn btn-lg btn-outline">
                  Play as Guest
                </button>
              </div>
            </div>
            <div className="hero-wallet-selector">
              <div className="hero-wallet-card">
                <div className="hero-wallet-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </g>
                  </svg>
                  <h3>Base Wallet</h3>
                </div>
                <div className="hero-wallet-options">
                  <button className="hero-wallet-btn active">
                    <span className="create-manage-coin-hero-wallet-currency1">
                      USDT
                    </span>
                    <span className="create-manage-coin-hero-wallet-balance1">
                      1,000.00
                    </span>
                  </button>
                  <button className="hero-wallet-btn">
                    <span className="create-manage-coin-hero-wallet-currency2">
                      SOL
                    </span>
                    <span className="create-manage-coin-hero-wallet-balance2">
                      1,000.00
                    </span>
                  </button>
                </div>
                <div className="hero-wallet-actions">
                  <button className="btn btn-secondary btn-sm">
                    {' '}
                    Fix Visibility Issues
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button className="btn btn-sm btn-accent">
                    Publish Controls
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">Token Configuration Studio</h2>
            <p className="section-subtitle">
              {' '}
              Set every parameter with precision. Deploy with confidence. Launch
              with power.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="features-grid">
            <div className="features-card">
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="8" cy="8" r="6"></circle>
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path>
                    <path d="m16.71 13.88l.7.71l-2.82 2.82"></path>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Token Identity</h3>
              <p className="features-description">
                {' '}
                Define name, symbol, decimals, and total supply with real-time
                validation and gas estimation.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-fields">
                <input
                  type="text"
                  placeholder="Token Name"
                  className="features-input"
                />
                <input
                  type="text"
                  placeholder="Symbol (e.g. FUNN)"
                  className="features-input"
                />
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              </div>
              <h3 className="features-title">Liquidity Setup</h3>
              <p className="features-description">
                {' '}
                Configure initial liquidity, LP lock duration, and automated
                market maker parameters for smooth launches.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-slider">
                <label>Initial Liquidity</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="50"
                  className="features-range"
                />
                <span className="features-value">50%</span>
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 8V4H8"></path>
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                    <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Bot Arsenal</h3>
              <p className="features-description">
                {' '}
                Enable sniping bots, volume bots, and anti-dump protection with
                custom trigger thresholds and timing controls.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-toggles">
                <label className="features-toggle">
                  <input type="checkbox" checked="true" />
                  <span>Sniping Bot</span>
                </label>
                <label className="features-toggle">
                  <input type="checkbox" checked="true" />
                  <span>Volume Bot</span>
                </label>
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Pre-Launch Access</h3>
              <p className="features-description">
                {' '}
                Set buy-before-launch limits, whitelist addresses, and configure
                guest trading permissions with price caps.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-fields">
                <input
                  type="number"
                  placeholder="Max Buy Per Wallet"
                  className="features-input"
                />
                <input
                  type="number"
                  placeholder="Pre-Launch Price"
                  className="features-input"
                />
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Advanced Controls</h3>
              <p className="features-description">
                {' '}
                Fine-tune transaction fees, max wallet size, anti-whale
                mechanics, and automated burning schedules.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-grid-mini">
                <div className="features-stat">
                  <span className="features-stat-label">Buy Tax</span>
                  <span className="features-stat-value">2%</span>
                </div>
                <div className="features-stat">
                  <span className="features-stat-label">Sell Tax</span>
                  <span className="features-stat-value">3%</span>
                </div>
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Launch Scheduler</h3>
              <p className="features-description">
                {' '}
                Schedule precise launch times, set countdown timers, and
                configure automated smart contract deployment sequences.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-date">
                <input type="datetime-local" className="features-input" />
                <button className="btn btn-secondary btn-sm">Set Launch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="support-section">
        <div className="support-container">
          <div className="support-wrapper">
            <div className="support-sidebar">
              <div className="support-sidebar-header">
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
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </g>
                </svg>
                <h2 className="section-title">Visibility Rescue Center</h2>
              </div>
              <p className="section-subtitle">
                {' '}
                Can&apos;t see your coin? Run these diagnostics to resolve
                indexing, metadata, and blockchain sync issues.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="support-status">
                <div className="support-status-item">
                  <span className="support-status-dot active"></span>
                  <span>Blockchain Connected</span>
                </div>
                <div className="support-status-item">
                  <span className="support-status-dot active"></span>
                  <span>Contract Verified</span>
                </div>
                <div className="support-status-item">
                  <span className="support-status-dot pending"></span>
                  <span>Metadata Syncing</span>
                </div>
              </div>
              <button className="btn btn-primary">
                One-Click Troubleshoot
              </button>
            </div>
            <div className="support-main">
              <div className="support-card">
                <div className="support-card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </g>
                  </svg>
                  <h3>Index Status Check</h3>
                </div>
                <p className="support-card-description">
                  {' '}
                  Verify if your token is indexed by blockchain explorers and
                  DEX aggregators. Force reindex if needed.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="support-progress">
                  <div className="create-manage-coin-support-progress-bar support-progress-bar"></div>
                </div>
                <button className="btn btn-secondary btn-sm">
                  Force Reindex
                </button>
              </div>
              <div className="support-card">
                <div className="support-card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  <h3>Blockchain Confirmations</h3>
                </div>
                <p className="support-card-description">
                  {' '}
                  Check transaction confirmations and block finality status.
                  Minimum 12 confirmations required.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="support-confirmations">
                  <span className="support-confirmations-count">28/12</span>
                  <span className="support-confirmations-status">
                    Confirmed
                  </span>
                </div>
              </div>
              <div className="support-card">
                <div className="support-card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    ></path>
                  </svg>
                  <h3>Metadata Refresh</h3>
                </div>
                <p className="support-card-description">
                  {' '}
                  Update token name, symbol, logo, and description across all
                  integrated platforms and marketplaces.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-sm btn-accent">
                  Refresh Metadata
                </button>
              </div>
              <div className="support-card">
                <div className="support-card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                    ></path>
                  </svg>
                  <h3>Manual Reindex</h3>
                </div>
                <p className="support-card-description">
                  {' '}
                  Trigger manual reindexing across all connected DEXs and
                  explorers. Use when automatic indexing fails.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-outline btn-sm">
                  Start Manual Reindex
                </button>
              </div>
              <div className="support-card">
                <div className="support-card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9l-5 5l-4-4l-3 3"></path>
                    </g>
                  </svg>
                  <h3>Contract Diagnostics</h3>
                </div>
                <p className="support-card-description">
                  {' '}
                  Run comprehensive smart contract health checks, gas
                  optimization analysis, and security audits.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-outline btn-sm">
                  Run Diagnostics
                </button>
              </div>
              <div className="support-card">
                <div className="support-card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <h3>Visibility Verified</h3>
                </div>
                <p className="support-card-description">
                  {' '}
                  Final verification that your token appears correctly on all
                  major platforms with accurate data.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="support-verified">
                  <span className="support-verified-badge">
                    {' '}
                    ✓ All Systems Operational
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2 className="section-title">Launch Control Timeline</h2>
            <p className="section-subtitle">
              {' '}
              Configure pre-launch parameters, enable advanced features, and
              schedule your token&apos;s debut with military precision.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="process-timeline">
            <div className="process-timeline-line"></div>
            <div className="process-step process-step-left">
              <div className="process-step-marker"></div>
              <div className="process-step-card">
                <div className="process-step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="process-step-title">Buy Before Launch Access</h3>
                <p className="process-step-description">
                  {' '}
                  Enable early bird buying with custom price and limit controls.
                  Whitelist VIP wallets or allow guest participation with caps.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="process-step-meta">
                  <span className="process-step-tag">Pre-Launch</span>
                  <span className="process-step-time">T-24h</span>
                </div>
              </div>
            </div>
            <div className="process-step process-step-right">
              <div className="process-step-marker"></div>
              <div className="process-step-card">
                <div className="process-step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    ></path>
                  </svg>
                </div>
                <h3 className="process-step-title">
                  Whitelist &amp; Guest Management
                </h3>
                <p className="process-step-description">
                  {' '}
                  Configure whitelist tiers, guest trading permissions, and
                  referral rewards. Set different limits per user class.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="process-step-meta">
                  <span className="process-step-tag">Access Control</span>
                  <span className="process-step-time">T-12h</span>
                </div>
              </div>
            </div>
            <div className="process-step process-step-left">
              <div className="process-step-marker"></div>
              <div className="process-step-card">
                <div className="process-step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="8" cy="8" r="6"></circle>
                      <path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path>
                      <path d="m16.71 13.88l.7.71l-2.82 2.82"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="process-step-title">Pre-Launch Pricing</h3>
                <p className="process-step-description">
                  {' '}
                  Set pre-launch token price, maximum buy per wallet, and total
                  allocation for early participants before public sale.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="process-step-meta">
                  <span className="process-step-tag">Pricing</span>
                  <span className="process-step-time">T-6h</span>
                </div>
              </div>
            </div>
            <div className="process-step process-step-right">
              <div className="process-step-marker"></div>
              <div className="process-step-card">
                <div className="process-step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="process-step-title">Schedule Launch Time</h3>
                <p className="process-step-description">
                  {' '}
                  Pick exact launch timestamp, enable countdown timer, and
                  configure automated deployment sequence with failsafes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="process-step-meta">
                  <span className="process-step-tag">Timing</span>
                  <span className="process-step-time">T-2h</span>
                </div>
              </div>
            </div>
            <div className="process-step process-step-left">
              <div className="process-step-marker"></div>
              <div className="process-step-card">
                <div className="process-step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="process-step-title">Bot Activation</h3>
                <p className="process-step-description">
                  {' '}
                  Enable sniping bots for instant liquidity grabs and volume
                  bots to maintain healthy trading activity post-launch.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="process-step-meta">
                  <span className="process-step-tag">Automation</span>
                  <span className="process-step-time">T-30m</span>
                </div>
              </div>
            </div>
            <div className="process-step process-step-right">
              <div className="process-step-marker"></div>
              <div className="process-step-card">
                <div className="process-step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                    ></path>
                  </svg>
                </div>
                <h3 className="process-step-title">Simulation Preview</h3>
                <p className="process-step-description">
                  {' '}
                  Test your pump.fun behavior in sandbox mode. Preview price
                  action, bot activity, and transaction flow before going live.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="process-step-meta">
                  <span className="process-step-tag">Testing</span>
                  <span className="process-step-time">T-10m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">Publish Workflow &amp; Safety</h2>
            <p className="section-subtitle">
              {' '}
              Triple-checked publishing process with safety gates, audit trails,
              and rollback insurance.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="services-grid">
            <div className="services-card">
              <div className="services-card-header">
                <div className="services-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                </div>
                <h3>Safety Checks</h3>
              </div>
              <p className="services-description">
                {' '}
                Automated pre-publish validation: smart contract security scan,
                gas optimization, liquidity verification, and anti-rug checks.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="services-checklist">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>Contract Security</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>Gas Optimization</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>Liquidity Lock</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>Anti-Rug Verified</span>
                </li>
              </ul>
              <div className="services-progress-container">
                <span className="services-progress-label">
                  Validation Progress
                </span>
                <div className="services-progress">
                  <div className="create-manage-coin-services-progress-fill services-progress-fill"></div>
                </div>
              </div>
            </div>
            <div className="services-card">
              <div className="services-card-header">
                <div className="services-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
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
                </div>
                <h3>Audit Checklist</h3>
              </div>
              <p className="services-description">
                {' '}
                Comprehensive audit trail covering tokenomics, ownership
                structure, team verification, and compliance with platform
                standards.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <details className="services-accordion">
                <summary>
                  <span>Contract Verification</span>
                </summary>
                <p>
                  {' '}
                  Source code verified on blockchain explorer with matching
                  bytecode and ABI documentation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </details>
              <details className="services-accordion">
                <summary>
                  <span>Ownership Renounce</span>
                </summary>
                <p>
                  {' '}
                  Optional ownership renunciation for decentralized control.
                  Configure multi-sig or DAO governance.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </details>
              <details className="services-accordion">
                <summary>
                  <span>Tax Configuration</span>
                </summary>
                <p>
                  {' '}
                  Review buy/sell tax percentages, treasury allocation, and
                  automatic liquidity provision settings.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </details>
              <details className="services-accordion">
                <summary>
                  <span>Team Tokens Lock</span>
                </summary>
                <p>
                  {' '}
                  Team allocation locked for specified vesting period with
                  transparent unlock schedule.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </details>
            </div>
            <div className="services-card">
              <div className="services-card-header">
                <div className="services-icon">
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
                      <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </g>
                  </svg>
                </div>
                <h3>Publish &amp; Rollback</h3>
              </div>
              <p className="services-description">
                {' '}
                One-click publish with instant on-chain deployment. Full
                transaction history and emergency rollback capabilities for
                critical fixes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="services-stats">
                <div className="services-stat-item">
                  <span className="services-stat-value">12</span>
                  <span className="services-stat-label">Published Tokens</span>
                </div>
                <div className="services-stat-item">
                  <span className="services-stat-value">0</span>
                  <span className="services-stat-label">Failed Deploys</span>
                </div>
              </div>
              <div className="services-history">
                <h4>Recent Publish History</h4>
                <div className="services-history-item">
                  <span className="services-history-name">MOON Token</span>
                  <span className="services-history-status success">Live</span>
                </div>
                <div className="services-history-item">
                  <span className="services-history-name">ROCKET Coin</span>
                  <span className="services-history-status success">Live</span>
                </div>
                <div className="services-history-item">
                  <span className="services-history-name">PUMP Token</span>
                  <span className="services-history-status pending">
                    Pending
                  </span>
                </div>
              </div>
              <button className="btn btn-accent">Emergency Rollback</button>
            </div>
          </div>
        </div>
      </div>
      <div className="integration-section">
        <div className="integration-container">
          <div className="integration-header">
            <h2 className="section-title">Connect &amp; Integrate</h2>
            <p className="section-subtitle">
              {' '}
              Link your Telegram bot, manage wallets, switch currencies, and
              configure API integrations.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="integration-grid">
            <div className="integration-card">
              <div className="integration-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </g>
                </svg>
              </div>
              <h3 className="integration-title">Telegram Bot Connection</h3>
              <p className="integration-description">
                {' '}
                Connect your Telegram bot for automated alerts, trade
                notifications, and community management. ID: 7764037225
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="integration-input-group">
                <input
                  type="text"
                  placeholder="Bot Token"
                  value="8593746038:AAEyKOh6ne8APvkJpc3..."
                  className="integration-input"
                />
                <button className="btn btn-primary">Connect</button>
              </div>
              <div className="integration-connected">
                <span className="integration-status-indicator active"></span>
                <span>Bot Connected &amp; Active</span>
              </div>
            </div>
            <div className="integration-card">
              <div className="integration-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="integration-title">Wallet Management</h3>
              <p className="integration-description">
                {' '}
                Sign in with Google, play as guest, or import existing wallet.
                All methods start with 1,000 USDT/SOL balance.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="integration-wallet-options">
                <button className="btn btn-secondary">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Google Sign-In
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn btn-outline">
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
                      d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Play as Guest
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
              </div>
              <button className="btn btn-link">Import Existing Wallet</button>
            </div>
            <div className="integration-card">
              <div className="integration-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="8" cy="8" r="6"></circle>
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path>
                    <path d="m16.71 13.88l.7.71l-2.82 2.82"></path>
                  </g>
                </svg>
              </div>
              <h3 className="integration-title">Base Currency Switch</h3>
              <p className="integration-description">
                {' '}
                Toggle between USDT and SOL as your base currency. Balances
                convert instantly at real-time rates.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="integration-currency-toggle">
                <button className="integration-currency-btn active">
                  <span className="create-manage-coin-integration-currency-symbol1">
                    USDT
                  </span>
                  <span className="create-manage-coin-integration-currency-balance1">
                    1,000.00
                  </span>
                </button>
                <button className="integration-currency-btn">
                  <span className="create-manage-coin-integration-currency-symbol2">
                    SOL
                  </span>
                  <span className="create-manage-coin-integration-currency-balance2">
                    1,000.00
                  </span>
                </button>
              </div>
              <div className="integration-exchange-rate">
                <span>Exchange Rate: 1 SOL = 98.45 USDT</span>
              </div>
            </div>
            <div className="integration-card">
              <div className="integration-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="integration-title">API &amp; Token Settings</h3>
              <p className="integration-description">
                {' '}
                Configure API endpoints, webhook URLs, and authentication tokens
                for third-party integrations and custom bots.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="integration-api-list">
                <div className="integration-api-item">
                  <span>REST API</span>
                  <span className="integration-api-status active">Active</span>
                </div>
                <div className="integration-api-item">
                  <span>WebSocket</span>
                  <span className="integration-api-status active">Active</span>
                </div>
                <div className="integration-api-item">
                  <span>Webhooks</span>
                  <span className="integration-api-status inactive">
                    Inactive
                  </span>
                </div>
              </div>
              <button className="btn btn-outline">Manage API Keys</button>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-section">
        <div className="stats-container">
          <div className="stats-header">
            <h2 className="section-title">Live Token Analytics</h2>
            <p className="section-subtitle">
              {' '}
              Real-time stats for created tokens with king-of-the-hill
              leaderboard and transaction monitoring.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="stats-grid">
            <div className="stats-card">
              <div className="stats-card-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </g>
                </svg>
                <h3>Holders &amp; Volume</h3>
              </div>
              <div className="stats-metrics">
                <div className="stats-metric">
                  <span className="stats-metric-value">2,847</span>
                  <span className="stats-metric-label">Total Holders</span>
                  <span className="stats-metric-change positive">+12.5%</span>
                </div>
                <div className="stats-metric">
                  <span className="stats-metric-value">$1.2M</span>
                  <span className="stats-metric-label">24h Volume</span>
                  <span className="stats-metric-change positive">+34.2%</span>
                </div>
                <div className="stats-metric">
                  <span className="stats-metric-value">$45.8M</span>
                  <span className="stats-metric-label">Market Cap</span>
                  <span className="stats-metric-change positive">+8.7%</span>
                </div>
              </div>
              <div className="stats-chart">
                <div className="create-manage-coin-stats-chart-bar1 stats-chart-bar"></div>
                <div className="create-manage-coin-stats-chart-bar2 stats-chart-bar"></div>
                <div className="create-manage-coin-stats-chart-bar3 stats-chart-bar"></div>
                <div className="create-manage-coin-stats-chart-bar4 stats-chart-bar"></div>
                <div className="create-manage-coin-stats-chart-bar5 stats-chart-bar"></div>
                <div className="create-manage-coin-stats-chart-bar6 stats-chart-bar"></div>
                <div className="create-manage-coin-stats-chart-bar7 stats-chart-bar"></div>
              </div>
            </div>
            <div className="stats-card">
              <div className="stats-card-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <h3>King of the Hill</h3>
              </div>
              <div className="stats-leaderboard">
                <div className="stats-leaderboard-item">
                  <div className="stats-leaderboard-rank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                      </g>
                    </svg>
                    <span>1</span>
                  </div>
                  <div className="stats-leaderboard-info">
                    <span className="stats-leaderboard-name">PEPE MOON</span>
                    <span className="stats-leaderboard-value">
                      $8.2M Volume
                    </span>
                  </div>
                  <span className="stats-leaderboard-change">+125%</span>
                </div>
                <div className="stats-leaderboard-item">
                  <div className="stats-leaderboard-rank">
                    <span>2</span>
                  </div>
                  <div className="stats-leaderboard-info">
                    <span className="stats-leaderboard-name">SHIBA ROCKET</span>
                    <span className="stats-leaderboard-value">
                      $6.4M Volume
                    </span>
                  </div>
                  <span className="stats-leaderboard-change">+98%</span>
                </div>
                <div className="stats-leaderboard-item">
                  <div className="stats-leaderboard-rank">
                    <span>3</span>
                  </div>
                  <div className="stats-leaderboard-info">
                    <span className="stats-leaderboard-name">DOGE PUMP</span>
                    <span className="stats-leaderboard-value">
                      $4.9M Volume
                    </span>
                  </div>
                  <span className="stats-leaderboard-change">+76%</span>
                </div>
                <div className="stats-leaderboard-item">
                  <div className="stats-leaderboard-rank">
                    <span>4</span>
                  </div>
                  <div className="stats-leaderboard-info">
                    <span className="stats-leaderboard-name">FLOKI KING</span>
                    <span className="stats-leaderboard-value">
                      $3.2M Volume
                    </span>
                  </div>
                  <span className="stats-leaderboard-change">+54%</span>
                </div>
              </div>
              <button className="btn btn-outline btn-sm">
                View Full Leaderboard
              </button>
            </div>
            <div className="stats-card">
              <div className="stats-card-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                  ></path>
                </svg>
                <h3>Launch Activity</h3>
              </div>
              <div className="stats-activity-grid">
                <div className="stats-activity-card">
                  <span className="stats-activity-number">47</span>
                  <span className="stats-activity-label">New Launches</span>
                  <span className="stats-activity-period">Last 24h</span>
                </div>
                <div className="stats-activity-card">
                  <span className="stats-activity-number">32</span>
                  <span className="stats-activity-label">Graduating</span>
                  <span className="stats-activity-period">In Progress</span>
                </div>
                <div className="stats-activity-card">
                  <span className="stats-activity-number">18</span>
                  <span className="stats-activity-label">Graduated</span>
                  <span className="stats-activity-period">Last 7d</span>
                </div>
                <div className="stats-activity-card">
                  <span className="stats-activity-number">$2.8M</span>
                  <span className="stats-activity-label">Total Raised</span>
                  <span className="stats-activity-period">All Time</span>
                </div>
              </div>
              <div className="stats-recent-launches">
                <h4>Recent Launches</h4>
                <div className="stats-launch-item">
                  <span className="stats-launch-name">WOJAK Token</span>
                  <span className="stats-launch-time">2m ago</span>
                </div>
                <div className="stats-launch-item">
                  <span className="stats-launch-name">CHAD Coin</span>
                  <span className="stats-launch-time">8m ago</span>
                </div>
                <div className="stats-launch-item">
                  <span className="stats-launch-name">GIGGA Token</span>
                  <span className="stats-launch-time">15m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <div className="cta-icon-cluster">
                <div className="cta-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                </div>
                <div className="cta-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                </div>
                <div className="cta-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                </div>
              </div>
              <h2 className="section-title">Ready to Launch Your Token?</h2>
              <p className="section-subtitle">
                {' '}
                All parameters configured. Bots armed. Safety checks passed.
                Time to go live and make history.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-summary">
                <div className="cta-summary-item">
                  <span className="cta-summary-label">Token Name:</span>
                  <span className="cta-summary-value">FUNN Token</span>
                </div>
                <div className="cta-summary-item">
                  <span className="cta-summary-label">Initial Supply:</span>
                  <span className="cta-summary-value">1,000,000,000</span>
                </div>
                <div className="cta-summary-item">
                  <span className="cta-summary-label">Liquidity:</span>
                  <span className="cta-summary-value">500 USDT</span>
                </div>
                <div className="cta-summary-item">
                  <span className="cta-summary-label">Bots Active:</span>
                  <span className="cta-summary-value">Sniping + Volume</span>
                </div>
              </div>
              <div className="cta-actions">
                <button className="btn btn-primary btn-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Publish Token Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn btn-outline btn-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Save Draft
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn btn-accent btn-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Run Simulation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="create-manage-coin-container15">
        <div className="create-manage-coin-container16">
          <Script
            html={`<style>
        @keyframes pulse {0%,100% {opacity: 1;}
50% {opacity: 0.5;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="create-manage-coin-container17">
        <div className="create-manage-coin-container18">
          <Script
            html={`<script defer data-name="token-management">
(function(){
  const walletButtons = document.querySelectorAll(".hero-wallet-btn")
  walletButtons.forEach((button) => {
    button.addEventListener("click", () => {
      walletButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
    })
  })

  const currencyButtons = document.querySelectorAll(".integration-currency-btn")
  currencyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currencyButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
    })
  })

  const rangeInputs = document.querySelectorAll(".features-range")
  rangeInputs.forEach((input) => {
    const valueDisplay = input.parentElement.querySelector(".features-value")
    input.addEventListener("input", (e) => {
      if (valueDisplay) {
        valueDisplay.textContent = e.target.value + "%"
      }
    })
  })

  const processCards = document.querySelectorAll(".process-step-card")
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = entry.target.closest(
          ".process-step-left"
        )
          ? "translateX(0)"
          : "translateX(0)"
      }
    })
  }, observerOptions)

  processCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = card.closest(".process-step-left")
      ? "translateX(-50px)"
      : "translateX(50px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })

  const troubleshootButton = document.querySelector(
    ".support-sidebar .btn-primary"
  )
  if (troubleshootButton) {
    troubleshootButton.addEventListener("click", () => {
      const progressBar = document.querySelector(".support-progress-bar")
      if (progressBar) {
        progressBar.style.width = "0%"
        setTimeout(() => {
          progressBar.style.width = "75%"
        }, 100)
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="create-manage-coin-container19"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="create-manage-coin-icon247"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="create-manage-coin-text59">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default CreateManageCoin
