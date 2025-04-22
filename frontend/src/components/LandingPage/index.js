import React from 'react'
import './styles.css'

 const LandingPage = () => {
  return (
  <>
 <div className="home-container">
  <section className="hero">
        <h1>Welcome to Startup Launchpad</h1>
        <p>
          Your subscription platform dedicated to teaching aspiring entrepreneurs how to start
          and grow a business. Learn from industry experts and build your startup journey today!
        </p>
        <a href="/#" className="cta-button">Get Started</a>
      </section>
      </div>

      {/* Features Section */}
      <section className="features">
        <h2>What We Offer</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Expert Courses</h3>
            <p>
              Access comprehensive courses designed by successful entrepreneurs to guide you through
              every step of starting your business.
            </p>
          </div>
          <div className="feature-item">
            <h3>Community & Networking</h3>
            <p>
              Join a community of like-minded individuals, share ideas, and collaborate on innovative
              business projects.
            </p>
          </div>
          <div className="feature-item">
            <h3>Live Workshops</h3>
            <p>
              Participate in interactive workshops and Q&amp;A sessions with experts, ensuring you’re always
              at the cutting edge.
            </p>
          </div>
        </div>
      </section>
      
  </>
  )
}
export default LandingPage