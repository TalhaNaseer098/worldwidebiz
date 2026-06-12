import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="policy-page">
        <div className="container policy-page__container">

          <div className="policy-page__hero">
            <h1 className="policy-page__title">Terms of Service</h1>
            <p className="policy-page__date">Last Updated: June 2026</p>
          </div>

          <p className="policy-page__intro">
            By accessing this website or using services provided by <strong>Worldwide Biz Consultants Inc</strong>, you agree to these Terms of Service.
          </p>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">1. Services</h2>
            <p><strong>Worldwide Biz Consultants Inc</strong> provides services including but not limited to:</p>
            <ul className="policy-page__list">
              <li>AI Automation Solutions</li>
              <li>AI Voice Agents</li>
              <li>AI Chatbots</li>
              <li>AI Lead Generation Systems</li>
              <li>AI Outbound SDR Solutions</li>
              <li>AI Cold Email Systems</li>
              <li>CRM Automation</li>
              <li>Content Automation</li>
              <li>AI Consulting</li>
              <li>Custom AI Solutions</li>
            </ul>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">2. Service Scope</h2>
            <p>Project scope, pricing, timelines, and deliverables are defined in individual proposals, agreements, or statements of work.</p>
            <p>Any work outside the agreed scope may require a separate proposal and additional fees.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">3. No Guarantee of Results</h2>
            <p>While we strive to provide high-quality solutions, Worldwide Biz Consultants Inc does not guarantee:</p>
            <ul className="policy-page__list">
              <li>Specific revenue outcomes</li>
              <li>Lead volume</li>
              <li>Sales performance</li>
              <li>Advertising results</li>
              <li>Business growth metrics</li>
            </ul>
            <p>Results depend on many factors beyond our control.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">4. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul className="policy-page__list">
              <li>Provide accurate information</li>
              <li>Provide required access to systems and accounts</li>
              <li>Supply requested materials and approvals promptly</li>
              <li>Maintain necessary third-party subscriptions where applicable</li>
            </ul>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">5. Intellectual Property</h2>
            <p>Upon full payment, clients receive ownership of final deliverables specifically created for their project.</p>
            <p><strong>Worldwide Biz Consultants Inc</strong> retains ownership of:</p>
            <ul className="policy-page__list">
              <li>Internal frameworks</li>
              <li>Templates</li>
              <li>Methodologies</li>
              <li>Reusable code</li>
              <li>Proprietary systems and processes</li>
            </ul>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">6. Third-Party Services</h2>
            <p>Our solutions may integrate with third-party platforms including:</p>
            <ul className="policy-page__list">
              <li>OpenAI</li>
              <li>GoHighLevel</li>
              <li>HubSpot</li>
              <li>Twilio</li>
              <li>Meta</li>
              <li>Google</li>
              <li>Microsoft</li>
              <li>Other approved providers</li>
            </ul>
            <p>We are not responsible for outages, policy changes, or interruptions caused by third-party platforms.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">7. Payments</h2>
            <p>Payment terms are outlined in client proposals and service agreements.</p>
            <p>Late or unpaid balances may result in paused services until payment is received.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">8. Limitation of Liability</h2>
            <p>Worldwide Biz Consultants Inc shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of our services.</p>
            <p>Maximum liability shall not exceed the amount paid by the client for services directly related to the claim.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">9. Termination</h2>
            <p>Either party may terminate services according to the terms outlined in the applicable service agreement.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">10. Changes to Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. Updated versions will be posted on this website.</p>
          </div>

          <div className="policy-page__block">
            <h2 className="policy-page__h2">11. Contact Information</h2>
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
