import bannerImg from '../assets/imgfolder/bannerrightimg.png'
import phoneIcon from '../assets/imgfolder/phoneicon.png'
import bannerLine from '../assets/imgfolder/bannerline.png'
import checkboxIcon from '../assets/imgfolder/Vectorcheckbox.png'
import { scrollTo } from '../utils/scroll'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">

        <div className="hero__left">
          <h1 className="hero__heading">
            Turning Business into<br />AI-Powered Machine.
          </h1>

          <div className="hero__subtext-wrap">
            <img src={bannerLine} alt="" className="hero__bannerline" />
            <p className="hero__subtext">
              <span className="muted">We design </span>
              <span className="white">AI systems that save time, cut costs, and make your business run smoother</span>
              <span className="muted"> — without the complexity.</span>
            </p>
          </div>

          <a href="#get-started" className="hero__cta" onClick={scrollTo('get-started')}>
            <img src={phoneIcon} alt="" className="hero__cta-icon" />
            Book a Free Strategy Call
          </a>

          <div className="hero__tags">
            <span className="hero__tag">
              <img src={checkboxIcon} alt="" className="hero__tag-icon" />
              Workflow Automation
            </span>
            <span className="hero__tag">
              <img src={checkboxIcon} alt="" className="hero__tag-icon" />
              AI Integration
            </span>
            <span className="hero__tag">
              <img src={checkboxIcon} alt="" className="hero__tag-icon" />
              Data Sync
            </span>
          </div>
        </div>

        <div className="hero__right">
          <img src={bannerImg} alt="AI Powered Machine" className="hero__img" />
        </div>

      </div>
    </section>
  )
}
