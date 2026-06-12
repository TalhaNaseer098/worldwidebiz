import phoneIcon from '../assets/imgfolder/phoneicon.png'
import { scrollTo } from '../utils/scroll'
import aiFirstIcon from '../assets/imgfolder/AI-FirstApproach.png'
import customSolutionsIcon from '../assets/imgfolder/CustomSolutions.png'
import provenProcessIcon from '../assets/imgfolder/ProvenProcess.png'
import seamlessIcon from '../assets/imgfolder/SeamlessIntegration.png'

const cards = [
  {
    icon: aiFirstIcon,
    title: 'AI-First Approach',
    desc: 'We build every solution with AI at the core, ensuring smarter automation and long-term scalability from day one',
  },
  {
    icon: customSolutionsIcon,
    title: 'Custom Solutions',
    desc: 'Every automation is tailored to your business goals, workflows, and tools—never one-size-fits-all solutions.',
  },
  {
    icon: provenProcessIcon,
    title: 'Proven Process',
    desc: 'Our structured, step-by-step process ensures reliable delivery, clear communication, and consistent results.',
  },
  {
    icon: seamlessIcon,
    title: 'Seamless Integration',
    desc: 'We integrate AI smoothly into your existing systems without disrupting workflows or slowing your team down.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">

        <p className="about__label">ABOUT US</p>

        <h2 className="about__heading">
          We build intelligent automation systems that streamline workflows,
          connect tools, reduce manual effort, and help businesses scale faster
          with reliable, efficient ai powered solutions
        </h2>

        <div className="about__cards">
          {cards.map((card) => (
            <div className="about__card" key={card.title}>
              <img src={card.icon} alt={card.title} className="about__card-icon" />
              <h3 className="about__card-title">{card.title}</h3>
              <p className="about__card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <a href="#get-started" className="about__cta" onClick={scrollTo('get-started')}>
          <img src={phoneIcon} alt="" className="about__cta-icon" />
          Book a Free Strategy Call
        </a>

      </div>
    </section>
  )
}
