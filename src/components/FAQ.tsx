import { useState } from 'react'
import faqTopImg from '../assets/imgfolder/faqimgtop.png'

const faqs = [
  {
    question: 'Can I request a custom AI solution?',
    answer: 'Yes! We offer full social media management, including content creation, strategy development, scheduling, and engagement. We help grow your presence, connect with your audience, and turn followers into loyal customers.',
  },
  {
    question: 'How can AI automation help my business?',
    answer: 'AI automation streamlines repetitive tasks, reduces operational costs, and frees your team to focus on high-value work. From lead generation to customer support, our systems run 24/7 so your business never stops.',
  },
  {
    question: 'Is AI difficult to integrate into my current system?',
    answer: 'Not at all. We handle the full integration process, connecting our AI systems with your existing tools and workflows. Most integrations are completed within days with minimal disruption to your operations.',
  },
  {
    question: 'How long does AI setup take?',
    answer: 'Setup timelines vary by package: Foundation takes 7 days, Growth Engine takes 15 days, and Workforce takes 30 days. We provide a detailed timeline after your strategy call.',
  },
  {
    question: 'What kind of support do you provide after setup?',
    answer: 'We provide ongoing monitoring, optimization, and technical support. Our retainer plans include regular performance reviews and updates to ensure your AI systems continuously improve over time.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="faq">
      <div className="container faq__inner">

        <div className="faq__left">
          <img src={faqTopImg} alt="" className="faq__icon" />
          <h2 className="faq__heading">FAQs</h2>
          <p className="faq__desc">
            Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
          </p>
        </div>

        <div className="faq__right">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq__item${openIndex === i ? ' faq__item--open' : ''}`}>
              <button
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="faq__question-text">{faq.question}</span>
                <span className="faq__toggle">
                  <span className="faq__toggle-h"></span>
                  <span className="faq__toggle-v"></span>
                </span>
              </button>
              <div className={`faq__answer-wrap${openIndex === i ? ' faq__answer-wrap--open' : ''}`}>
                <p className="faq__answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
