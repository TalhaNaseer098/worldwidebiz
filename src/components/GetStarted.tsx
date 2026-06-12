import { useEffect } from 'react'
import readyImg from '../assets/imgfolder/readytoautomateimg.png'

export default function GetStarted() {
  useEffect(() => {
    if (document.querySelector('script[src*="form_embed"]')) return
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="get-started" className="getstarted">
      <div className="container">
        <div className="getstarted__box">

          <div className="getstarted__left">
            <h2 className="getstarted__heading">Ready to Automate Your Business?</h2>
            <p className="getstarted__desc">
              Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.
            </p>
            <img src={readyImg} alt="" className="getstarted__img" />
          </div>

          <div className="getstarted__right">
            <div className="getstarted__form-wrap">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/uGgHhdxKiKpdsLeh1125"
                style={{ width: '100%', height: '854px', border: 'none', borderRadius: '8px' }}
                id="inline-uGgHhdxKiKpdsLeh1125"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form"
                data-height="854"
                data-layout-iframe-id="inline-uGgHhdxKiKpdsLeh1125"
                data-form-id="uGgHhdxKiKpdsLeh1125"
                title="Website Form"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
