import servicestopImg from '../assets/imgfolder/servicestopimg.png'
import serviceShineImg from '../assets/imgfolder/serviceshineimg.png'
import foundationStar from '../assets/imgfolder/foundationleftsidestar.png'
import maskCenterBox from '../assets/imgfolder/maskcenterbox.png'
import growthStar from '../assets/imgfolder/growthengineleftimg.png'
import workforceStar from '../assets/imgfolder/workforceleftimg.png'
import checkboxIcon from '../assets/imgfolder/checkboxPackages.png'

const packages = [
  {
    id: 'foundation',
    name: 'Foundation',
    icon: foundationStar,
    iconClass: 'packages__name-icon--foundation',
    price: 'From $1000',
    retainer: null,
    desc: 'The essential AI systems every business needs to capture, engage, and qualify leads automatically.',
    button: 'Choose Foundation',
    features: [
      'AI Lead Generation Funnel',
      'Knowledge Base Chatbot',
      'Lead Qualification Automation',
      'Customer Inquiry Handling',
      'Contact Capture Workflows',
    ],
    timeline: 'Timeline: 7 days',
    popular: false,
    greyBorder: false,
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    icon: growthStar,
    iconClass: 'packages__name-icon--growth',
    price: 'From $2,500',
    retainer: '+ $500/mo retainer',
    desc: 'Multi-channel AI systems designed to generate conversations, qualify prospects, and book more meetings.',
    button: 'Choose Growth Engine',
    features: [
      'Everything in Foundation',
      'AI Voice Receptionist',
      'AI Outbound SDR',
      'AI Cold Email System',
      'Automated Follow-Up Sequences',
      'Meeting Booking Automation',
    ],
    timeline: 'Timeline: 15 days',
    popular: true,
    greyBorder: false,
  },
  {
    id: 'workforce',
    name: 'Workforce',
    icon: workforceStar,
    iconClass: 'packages__name-icon--workforce',
    price: 'From $5,000',
    retainer: '+ $1,000/mo retainer',
    desc: 'A complete AI-powered workforce operating across sales, support, content, and business operations.',
    button: 'Talk To Us',
    features: [
      'Everything in Growth Engine',
      'Content Repurposing Engine',
      'AI E-commerce Assistant',
      'Custom AI Solutions',
      'Advanced Workflow Automation',
      'Multi-Department AI Systems',
      'Ongoing Optimization & Support',
    ],
    timeline: 'Timeline: 30 days',
    popular: false,
    greyBorder: true,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="packages">
      <div className="container packages__inner">

        {/* Heading — same as Services / TechStack */}
        <div className="packages__heading-wrap">
          <img src={serviceShineImg} alt="" className="packages__shine-img" />
          <img src={servicestopImg} alt="" className="packages__icon" />
          <h2 className="packages__heading">Packages</h2>
        </div>

        {/* Cards */}
        <div className="packages__grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`packages__card-wrap${pkg.popular ? ' packages__card-wrap--popular' : ''}`}
            >
              {pkg.popular && (
                <div className="packages__popular-badge">Most Popular</div>
              )}
              <div className={`packages__card${pkg.popular ? ' packages__card--popular' : ''}${pkg.greyBorder ? ' packages__card--grey' : ''}`}>
                {pkg.popular && (
                  <img src={maskCenterBox} alt="" className="packages__card-mask" />
                )}

                {/* Top content — fixed height so button aligns across all cards */}
                <div className="packages__card-top">
                  <div className="packages__name-row">
                    <img src={pkg.icon} alt="" className={`packages__name-icon ${pkg.iconClass}`} />
                    <span className="packages__name">{pkg.name}</span>
                  </div>
                  <p className="packages__price">{pkg.price}</p>
                  <p className="packages__retainer">
                    {pkg.retainer ?? ' '}
                  </p>
                  <p className="packages__desc">{pkg.desc}</p>
                </div>

                {/* CTA Button */}
                <button className="packages__btn">{pkg.button}</button>

                {/* Features */}
                <ul className="packages__features">
                  {pkg.features.map((f) => (
                    <li key={f} className="packages__feature-item">
                      <img src={checkboxIcon} alt="" className="packages__feature-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Timeline */}
                <p className="packages__timeline">{pkg.timeline}</p>

              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="packages__footnote">
          * Final price and timeline depend on workflow scope. After the audit call, we'll send a written proposal — that's where everything is confirmed. No surprises after.
        </p>

      </div>
    </section>
  )
}
