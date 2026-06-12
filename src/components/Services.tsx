import phoneIcon from '../assets/imgfolder/phoneicon.png'
import servicestopImg from '../assets/imgfolder/servicestopimg.png'
import serviceShineImg from '../assets/imgfolder/serviceshineimg.png'
import aiVoiceCardImg from '../assets/imgfolder/Ai Voice Icon.png'
import aiOutboundImg from '../assets/imgfolder/aioutboundimg.png'
import contentRepurposing from '../assets/imgfolder/ContentRepurposingEngine.png'
import aiEcommerce from '../assets/imgfolder/AIE-commerceAssistant (2).png'
import aicoldEmailService from '../assets/imgfolder/aicoldEmailservice.png'
import aicoldEmailStar from '../assets/imgfolder/AiColdEmailstar.png'
import knowledgeBase from '../assets/imgfolder/KnowledgeBaseChatbot.png'
import customAI from '../assets/imgfolder/customAIsolutions.png'
import aileadImg from '../assets/imgfolder/aileadimg.png'
import aileadImgStar from '../assets/imgfolder/aileadimgstar.png'

const topServices = [
  {
    img: aiVoiceCardImg,
    title: 'AI Voice Receptionist',
    desc: 'Never miss a call. Our AI receptionist answers inquiries, qualifies prospects, and books appointments 24/7.',
    imgClass: 'services__card-img--voice',
  },
  {
    img: aiOutboundImg,
    title: 'AI Outbound SDR',
    desc: 'Automate outreach and follow-ups with AI-powered sales development that engages prospects and books meetings.',
    imgClass: 'services__card-img--outbound',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container services__inner">
        <div className="services__heading-wrap">
          <img src={serviceShineImg} alt="" className="services__shine-img" />
          <img src={servicestopImg} alt="" className="services__icon" />
          <h2 className="services__heading">Services We Provide</h2>
        </div>

        <div className="services__grid-top">
          {topServices.map((s) => (
            <div className="services__card services__card--large" key={s.title}>
              <div className="services__card-img-wrap">
                <img src={s.img} alt={s.title} className={`services__card-img ${s.imgClass}`} />
              </div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="services__grid-bottom">

          {/* Card 1: AI Lead Generation Funnel */}
          <div className="services__card services__card--small services__card--lead">
            <div className="services__card-img-wrap services__card-img-wrap--lead">
              <img src={aileadImg} alt="" className="ailead-bg" />
              <div className="services__card-label">
                <span className="services__card-label-text">Ai Lead Generation</span>
                <img src={aileadImgStar} alt="" className="services__card-label-icon" />
              </div>
            </div>
            <h3 className="services__card-title">AI Lead Generation Funnel</h3>
            <p className="services__card-desc">Turn visitors into qualified leads through intelligent funnels designed to capture, nurture, and convert.</p>
          </div>

          {/* Card 2: AI Cold Email System */}
          <div className="services__card services__card--small">
            <div className="services__card-img-wrap services__card-img-wrap--lead">
              <img src={aicoldEmailService} alt="" className="coldemail-bg" />
              <div className="services__card-label">
                <span className="services__card-label-text">Ai Cold Email</span>
                <img src={aicoldEmailStar} alt="" className="services__card-label-icon" />
              </div>
            </div>
            <h3 className="services__card-title">AI Cold Email System</h3>
            <p className="services__card-desc">Launch personalized cold email campaigns that start conversations, generate interest, and drive opportunities.</p>
          </div>

          {/* Card 3: Knowledge Base Chatbot */}
          <div className="services__card services__card--small">
            <div className="services__card-img-wrap">
              <div className="services__card-label">
                <span className="services__card-label-text">Custom Chat Bots</span>
                <img src={knowledgeBase} alt="" className="services__card-label-icon" />
              </div>
            </div>
            <h3 className="services__card-title">Knowledge Base Chatbot</h3>
            <p className="services__card-desc">Provide instant answers using your business knowledge, helping visitors and customers get support anytime.</p>
          </div>

          {/* Card 4: Content Repurposing Engine */}
          <div className="services__card services__card--small">
            <div className="services__card-img-wrap">
              <img src={contentRepurposing} alt="" className="services__card-img--repurposing" />
            </div>
            <h3 className="services__card-title">Content Repurposing Engine</h3>
            <p className="services__card-desc">Transform one piece of content into multiple formats for social media, blogs, emails, and marketing campaigns.</p>
          </div>

          {/* Card 5: AI E-commerce Assistant */}
          <div className="services__card services__card--small">
            <div className="services__card-img-wrap">
              <img src={aiEcommerce} alt="" className="services__card-img--ecommerce" />
            </div>
            <h3 className="services__card-title">AI E-commerce Assistant</h3>
            <p className="services__card-desc">Engage shoppers, answer product questions, recommend items, and improve the customer shopping experience.</p>
          </div>

          {/* Card 6: Custom AI Solutions */}
          <div className="services__card services__card--small">
            <div className="services__card-img-wrap">
              <img src={customAI} alt="" className="services__card-img--customai" />
            </div>
            <h3 className="services__card-title">Custom AI Solutions</h3>
            <p className="services__card-desc">Tailored AI systems designed around your workflows, processes, and business goals to drive efficiency and growth.</p>
          </div>

        </div>

        <a href="#get-started" className="services__cta">
          <img src={phoneIcon} alt="" className="services__cta-icon" />
          Book a Free Strategy Call
        </a>
      </div>
    </section>
  )
}
