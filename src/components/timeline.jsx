import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Executive (DevOps Practices) @ PETRONAS Digital, Malaysia <span>2020-Present</span></h2>
                        <p>Laying cement works for PETRONAS on topics such as Infrastructure as Code (IaC), Secrets Management, Configuration Management, Self-Service Portal, Continuous Monitoring via ELK to name a few. Certified as a AWS Solution Architect, I see myself as the bridge between Automation, Development, Operations and Architect.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>DevOps Architect @ Astro-MEASAT Broadcast Network Systems, Malaysia <span>2017-2020</span></h2>
                        <p>Joined as a Technology Associate, I spent 10 months working on various projects such as SSO, Payment Gateway, E-wallet and so on. My most memorable experience has to be staying overnight in broadcasting facility next to MEASAT to configure and setup transcoders for the upcoming 4K channel for all 7M Malaysians across the land!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>R&D Engineer @ Perpetuum Limited, United Kingdom <span>2016-2017</span></h2>
                        <p>These days green technologies have advanced to harvesting energy from solar, wind, thermal, geothermal, and even microstresses (Google: piezoelectric materials). Being involved in a nearby university, I joined Perpetuum Limited as a R&D Contractor to apply noise-vibration energy harvestation technologies worldwise, mainly in the transportation field. Funded by the European Union (EU), WARNTRAK has span across UK, US, Canada, South America, Australia, New Zealand and European countries!</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}