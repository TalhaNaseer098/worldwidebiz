import techStackIcon from '../assets/imgfolder/servicestopimg.png'
import serviceShineImg from '../assets/imgfolder/serviceshineimg.png'
import phoneIcon from '../assets/imgfolder/phoneicon.png'
import { scrollTo } from '../utils/scroll'

const techRows = [
  { label: 'Voice AI',           techs: ['Vapi', 'Retell', 'Bland', 'Eleven Labs', 'Whisper'] },
  { label: 'Conversational AI',  techs: ['Anthropic Claude', 'OpenAI GPT', 'Gemini'] },
  { label: 'Telephony',          techs: ['Twilio', 'Telnyx', 'Plivo'] },
  { label: 'CRM',                techs: ['GoHighLevel', 'HubSpot', 'Salesforce', 'Pipedrive', 'Zoho'] },
  { label: 'Workflow',           techs: ['n8n', 'Make', 'Zapier', 'Custom'] },
  { label: 'Outbound',           techs: ['Smartlead', 'Instantly', 'Apollo', 'Clay'] },
  { label: 'Integrations',       techs: ['APIs', 'Webhooks', 'MCP', 'Custom Middleware'] },
  { label: 'Observability',      techs: ['LangFuse', 'PostHog', 'Custom Dashboards'] },
]

export default function TechStack() {
  return (
    <section id="techstack" className="techstack">
      <div className="container techstack__inner">

        <div className="techstack__heading-wrap">
          <img src={serviceShineImg} alt="" className="techstack__shine-img" />
          <img src={techStackIcon} alt="" className="techstack__icon" />
          <h2 className="techstack__heading">Our Tech Stack</h2>
        </div>

        <div className="techstack__box">
          {techRows.map((row, i) => (
            <div
              key={row.label}
              className={`techstack__row${i === techRows.length - 1 ? ' techstack__row--last' : ''}`}
            >
              <span className="techstack__label">{row.label}</span>
              <div className="techstack__pills">
                {row.techs.map(tech => (
                  <span key={tech} className="techstack__pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a href="#get-started" className="techstack__cta" onClick={scrollTo('get-started')}>
          <img src={phoneIcon} alt="" className="techstack__cta-icon" />
          Book a Free Strategy Call
        </a>

      </div>
    </section>
  )
}
