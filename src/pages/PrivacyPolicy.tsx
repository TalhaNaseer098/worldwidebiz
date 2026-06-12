import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="policy-page">
        <div className="container policy-page__container">

          <div className="policy-page__hero">
            <h1 className="policy-page__title">Privacy Policy</h1>
            <p className="policy-page__date">Last Updated: June 2026</p>
          </div>

          <p className="policy-page__intro">
            <strong>Worldwide Biz Consultants Inc</strong> ("Company", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you provide through our website, services, and communication channels. By accessing or using <strong>Worldwide Biz Consultants Inc</strong>, you agree to the terms of this policy.
          </p>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">1. Information We Collect</h2>

            <h3 className="policy-page__h3">A. Information You Provide</h3>
            <ul className="policy-page__list">
              <li><strong>Name & Contact:</strong> First and last name, email address, phone number</li>
              <li><strong>Business Details:</strong> Company name, business information, project requirements</li>
              <li><strong>Communication Preferences:</strong> How you prefer to be contacted</li>
            </ul>

            <h3 className="policy-page__h3">B. Information Collected Automatically</h3>
            <ul className="policy-page__list">
              <li><strong>Usage Data:</strong> Website activity, pages visited, and analytics data</li>
              <li><strong>Device & Location Data:</strong> IP address, browser type, device information</li>
              <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies for functionality and analytics</li>
            </ul>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="policy-page__list">
              <li>Respond to inquiries and requests</li>
              <li>Schedule consultations and meetings</li>
              <li>Deliver services and support</li>
              <li>Improve our website and services</li>
              <li>Send service-related communications</li>
              <li>Provide requested information and resources</li>
              <li>Analyze website performance and user experience</li>
            </ul>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">3. AI & Automation Services</h2>
            <p>Some communications may be handled by AI-powered technologies including:</p>
            <ul className="policy-page__list">
              <li><strong>AI Chatbots</strong></li>
              <li><strong>AI Voice Agents</strong></li>
              <li><strong>Automated Email Systems</strong></li>
              <li><strong>Automated SMS Systems</strong></li>
            </ul>
            <p>Information shared through these systems may be stored and processed to provide requested services and improve customer experience.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">4. SMS Communications</h2>
            <p>By providing your phone number, you consent to receive service-related communications, appointment reminders, updates, and follow-ups from Worldwide Biz Consultants Inc.</p>
            <p>Message frequency may vary. Message and data rates may apply.</p>
            <p>You may opt out at any time by replying <strong>STOP</strong>.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">5. Email Communications</h2>
            <p>By submitting your information, you may receive emails related to:</p>
            <ul className="policy-page__list">
              <li>Consultations</li>
              <li>Project updates</li>
              <li>Service information</li>
              <li>Requested resources</li>
              <li>Marketing communications</li>
            </ul>
            <p>You may unsubscribe from marketing emails at any time.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">6. Information Sharing</h2>
            <p>We do not sell, rent, or trade your personal information.</p>
            <p>Information may be shared with trusted service providers only when necessary to deliver services, including:</p>
            <ul className="policy-page__list">
              <li>CRM platforms</li>
              <li>Hosting providers</li>
              <li>Email service providers</li>
              <li>Communication platforms</li>
              <li>Analytics providers</li>
              <li>AI technology providers</li>
            </ul>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">7. Data Security</h2>
            <p>We implement commercially reasonable safeguards designed to protect personal information from unauthorized access, disclosure, or misuse.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">8. Your Rights</h2>
            <p>You may request:</p>
            <ul className="policy-page__list">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of personal information</li>
              <li>Removal from marketing communications</li>
            </ul>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">9. Contact Us</h2>
            <p><strong>Worldwide Biz Consultants Inc</strong></p>
            <p>Website: <a href="https://www.worldwidebizconsultantsinc.com" className="policy-page__link">www.worldwidebizconsultantsinc.com</a></p>
            <p>Email: <a href="mailto:support@worldwidebizconsultantsinc.com" className="policy-page__link">support@worldwidebizconsultantsinc.com</a></p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
