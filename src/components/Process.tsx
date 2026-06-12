import processBoxIcon from '../assets/imgfolder/processboxrightimg.png'

const processSteps = [
  {
    days: 'Days 1–3:',
    title: 'Plan Your AI System',
    items: [
      'Discovery call',
      'Business process review',
      'Automation roadmap',
      'Solution planning',
      'Project scope finalized',
    ],
  },
  {
    days: 'Days 4–7:',
    title: 'Build Your AI Workforce',
    items: [
      'AI chatbot setup',
      'Voice agent deployment',
      'Lead funnel creation',
      'CRM configuration',
      'Workflow automation',
    ],
  },
  {
    days: 'Days 8–12:',
    title: 'Connect Everything',
    items: [
      'Website integration',
      'CRM synchronization',
      'Channel deployment',
      'AI training',
      'Testing & refinements',
    ],
  },
  {
    days: 'Days 13–15:',
    title: 'Launch & Support',
    items: [
      'Full QA across channels',
      'Team training',
      'System deployment',
      'Performance monitoring',
      'Ongoing support',
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container process__inner">

        <div className="process__header">
          <h2 className="process__heading">The Process</h2>
          <p className="process__desc">
            From strategy to deployment, we build AI systems that capture leads,
            automate conversations, and streamline operations.
          </p>
        </div>

        <div className="process__grid">
          {processSteps.map((step) => (
            <div key={step.title} className="process__card">
              <img src={processBoxIcon} alt="" className="process__card-icon" />
              <h3 className="process__card-title">
                {step.days}<br />{step.title}
              </h3>
              <ul className="process__card-list">
                {step.items.map((item) => (
                  <li key={item} className="process__card-item">
                    <span className="process__card-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
