import { useState } from 'react'
import faqTopImg from '../assets/imgfolder/faqimgtop.png'

const faqs = [
  {
    question: 'Can I request a custom AI solution?',
    answer: 'Yes. We specialize in building custom AI solutions tailored to your business needs. Whether you need sales automation, customer support, lead generation, workflow automation, or a completely unique AI system, we design and implement solutions that fit your goals and existing processes.',
  },
  {
    question: 'How can AI automation help my business?',
    answer: 'AI automation helps reduce manual work, improve response times, increase productivity, and create better customer experiences. From handling inquiries and generating leads to automating follow-ups and internal workflows, AI allows your team to focus on growth instead of repetitive tasks.',
  },
  {
    question: 'Is AI difficult to integrate into my current system?',
    answer: 'Not at all. Our team handles the entire integration process and can connect AI solutions with your existing CRM, website, phone system, email platform, calendar, e-commerce store, and other business tools. We ensure a smooth implementation with minimal disruption.',
  },
  {
    question: 'How long does AI setup take?',
    answer: 'Most AI solutions can be implemented within 1–4 weeks depending on the complexity of the project, required integrations, and customization needs. During our consultation, we\'ll provide a clear timeline based on your specific requirements.',
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
