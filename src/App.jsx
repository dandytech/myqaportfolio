import { useEffect } from "react";
import "./styles.css";
import initPortfolio from "./effects.js";

import photo from "./assets/dan-Photo.jpeg";
import photo2 from "./assets/daniel.jpeg";
import photo3 from "./assets/dan2.jpeg";
import photo4 from "./assets/java.png";

export default function App() {
  useEffect(() => {
    initPortfolio();
  }, []);
  return (
    <>
      <header id="hd">
        <a className="logo" href="#intro" aria-label="Daniel, back to top">
          Daniel
        </a>
        <a className="nl" href="#work">
          Work
        </a>
        <a className="nl" href="#about">
          About
        </a>
        <a
          className="cv"
          href={`${import.meta.env.BASE_URL}Daniel-Nwankwo-CV.pdf`}
          target="_blank"
          rel="noopener"
        >
          View CV
        </a>
        <a
          className="pill"
          href="mailto:dannkwo@gmail.com?subject=Project%20enquiry"
        >
          <span className="dot"></span>Contact me
        </a>
      </header>

      <a
        className="wa"
        id="wa"
        href="mailto:dannkwo@gmail.com?subject=Project%20enquiry"
        aria-label="Email Daniel"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      </a>

      <main>
        <section id="intro" className="on-n">
          <div className="words" style={{marginTop: "-60px"}}>
            <div className="wrow">
              <span className="sw" style={{ "--i": "0" }}>
                <span
                  style={{
                    color: "",
                    display: "block",
                    marginBottom: "0px",
                  }}
                >
                  Quality Assurance
                </span>
              </span>
            </div>
            <div className="wrow">
              <span className="sw" style={{ "--i": "1" }}>
                <span>Web</span>
              </span>
            </div>
            <div className="wrow">
              <span className="sw" style={{ "--i": "2" }}>
                <span>API</span>
              </span>
            </div>
            <div className="wrow">
              <span className="sw" style={{ "--i": "3" }}>
                <span>Mobile</span>
              </span>
            </div>
          </div>
          <div className="stage">
            <div className="drop">
              <div className="lan"></div>
              <div className="clip"></div>
              <div className="holder">
                <button
                  className="flip "
                  id="flip"
                  aria-label="Flip the ID card"
                >
                  <div className="face front">
                    <div className="photo">
                      <div
                        className="ph"
                        role="img"
                        aria-label="Portrait of Daniel Nwankwo"
                      >
                        <img
                          src={photo}
                          alt="Portrait of Daniel Nwankwo"
                          width={200}
                        />
                      </div>
                    </div>
                    <div className="corner">
                      <span>SOFTWARE QA TESTER</span>
                      <span>LAGOS, NIGERIA</span>
                    </div>
                    <div className="name">DANIEL</div>
                    <div className="role">Web, Mobile and API Testing</div>
                    <div className="tag">
                      <span className="dot"></span>4+ YEARS IN QA
                    </div>
                    <div className="sig">Daniel Nwankwo</div>
                    <div className="bar" data-bar></div>
                    <div className="idn">
                      <span>ID 0001</span>
                      <span>QA ENGINEER</span>
                    </div>
                  </div>
                  <div className="face rear">
                    <h3>What I do</h3>
                    <div className="row">
                      <b>Manual testing</b>Functional, regression, exploratory
                    </div>
                    <div className="row">
                      <b>Test automation</b>Selenium, Playwright, Appium
                    </div>
                    <div className="row">
                      <b>API and load testing</b>Postman and Apache JMeter
                    </div>
                    <div className="row">
                      <b>Security testing</b>Vulnerability and risk checks
                    </div>
                    <div className="row">
                      <b>Playbook and user manual preparation</b>Test playbooks,
                      guides, documentation
                    </div>
                    <div className="row">
                      <b>And more</b>Test cases, defect reports, QA leadership
                    </div>
                    <div className="hand">
                      Catching defects before users do.
                    </div>
                    <div className="idn">
                      <span>DANIEL AMAECHI NWANKWO</span>
                    </div>
                    <div className="bar" data-bar></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="foot">
            <span className="type" id="typ"></span>
            <span className="scr">
              Scroll<i></i>
            </span>
          </div>
        </section>

        <section id="about" className="on-w">
          <div className="two">
            <div className="collage">
              <div className="c1 rv l">
                <div className="ph" role="img" aria-label="Daniel at work">
                  <img src={photo2} alt="Photo: Daniel" width={405} />
                </div>
              </div>
              <div className="c2 rv r">
                <div
                  className="ph"
                  role="img"
                  aria-label="Daniel testing workspace"
                >
                  <img src={photo4} alt="Photo: workspace" width={400} />
                </div>
              </div>
              <div className="note rv s" style={{ transitionDelay: ".5s" }}>
                hi, I am Daniel
              </div>
            </div>
            <div>
              <h2
                id="ty"
                data-t="I find the bugs before your users do."
                aria-label="I find the bugs before your users do."
              ></h2>
              <p className="rv">
                I am a detail-oriented software QA tester with over four years
                across functional, automation, performance, API and security
                testing. I turn client requirements into clear test cases and
                work closely with cross-functional teams.
              </p>
              <p className="rv">
                I use Selenium, Playwright, Appium, Postman and Apache JMeter to
                make testing faster and releases safer.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="on-n">
          <div className="rows">
            <div className="srow rv l">
              <div className="tile">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </div>
              <div>
                <h3>Functional testing</h3>
                <p>
                  Requirement analysis, test design, regression and exploratory
                  testing on web and mobile apps
                </p>
              </div>
            </div>
            <div className="srow rv r">
              <div className="tile">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-5-5" />
                </svg>
              </div>
              <div>
                <h3>Test automation</h3>
                <p>
                  Selenium and Playwright for web, Appium for mobile, reusable
                  suites that keep regression cycles short
                </p>
              </div>
            </div>
            <div className="srow rv l">
              <div className="tile">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                </svg>
              </div>
              <div>
                <h3>API and performance</h3>
                <p>
                  Postman API checks and Apache JMeter load tests on ledger sync
                  and currency exchange modules
                </p>
              </div>
            </div>
            <div className="srow rv r">
              <div className="tile">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="8" height="8" />
                  <rect x="13" y="3" width="8" height="8" />
                  <rect x="3" y="13" width="8" height="8" />
                  <rect x="13" y="13" width="8" height="8" />
                </svg>
              </div>
              <div>
                <h3>QA leadership</h3>
                <p>
                  Project lead on payment initiatives, with timelines managed
                  and daily risk metrics for stakeholders
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="on-w">
          <div className="stats">
            <div className="rv">
              <b data-n="4" data-s="+">
                0
              </b>
              <span>Years in software QA</span>
            </div>
            <div className="rv" style={{ transitionDelay: ".1s" }}>
              <b data-n="15" data-s="+">
                0
              </b>
              <span>Products tested</span>
            </div>
            <div className="rv" style={{ transitionDelay: ".2s" }}>
              <b data-n="5" data-s="">
                0
              </b>
              <span>Testing tools in daily use</span>
            </div>
            <div className="rv" style={{ transitionDelay: ".3s" }}>
              <b data-n="3" data-s="">
                0
              </b>
              <span>Companies, QA lead on key projects</span>
            </div>
          </div>
        </section>

        <section id="marquee" className="on-n" aria-label="Tools">
          <div className="mq" id="mq"></div>
        </section>

        <section id="work" className="on-w">
          <div className="pin">
            <div className="wh">
              <h2>Selected work</h2>
              <p className="rv">
                Products I have tested, from cross-border payments to oil and
                gas software.
              </p>
            </div>
            <div className="track" id="track"></div>
            <div className="pr">
              <div className="prog">
                <i id="pg"></i>
              </div>
              <button
                className="vaw"
                id="vaw"
                type="button"
                aria-expanded="false"
                aria-controls="allworks"
              >
                <span>View all works</span> <i>&#8599;</i>
              </button>
            </div>
          </div>
        </section>

        <section id="allworks" className="on-w" hidden>
          <h2>All works</h2>
          <div className="agrid" id="agrid"></div>
        </section>

        <section id="about-me" className="on-n">
          <div className="two">
            <div className="me" id="me">
              <div className="ph" role="img" aria-label="Portrait of Daniel">
                <img src={photo3} alt="Photo: Daniel" width={360} />
              </div>
            </div>
            <div>
              <h2 className="rv">About me</h2>
              <span className="badge rv">&#10022; Based in Ikeja, Lagos</span>
              <p className="rv">
                At Cowris Technologies I tested the Borderless app, translating
                complex cross-border financial requirements into test cases and
                cutting transaction errors through API, regression and
                exploratory testing.
              </p>
              <div className="rv">
                <div className="love">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-8-5.400-8-11a4.500 4.500 0 018-2.800A4.500 4.500 0 0120 10c0 5.600-8 11-8 11z" />
                  </svg>
                  Turning complex requirements into clear test cases
                </div>
                <div className="love">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-8-5.400-8-11a4.500 4.500 0 018-2.800A4.500 4.500 0 0120 10c0 5.600-8 11-8 11z" />
                  </svg>
                  Automating regression cycles so releases move faster
                </div>
                <div className="love">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-8-5.400-8-11a4.500 4.500 0 018-2.800A4.500 4.500 0 0120 10c0 5.600-8 11-8 11z" />
                  </svg>
                  Daily risk reports that stakeholders can act on
                </div>
                <p className="edu">
                  Cowris Technologies, QA Engineer (2025 to 2026). Seamflex
                  Consulting, QA Analyst (2025). Greenmouse Technologies, QA
                  Tester (2022 to 2025).
                  <br />
                  HND Computer Science, Akanu Ibiam Federal Polytechnic, Upper
                  Credit (3.48). Selenium WebDriver with Java, Rahul Shetty
                  Academy (2023).
                </p>
              </div>
              <div className="soc rv">
                <a
                  href="https://www.linkedin.com/in/daniel-amaechi-nwankwo-29756b190/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a href="mailto:dannkwo@gmail.com">Email</a>
                <a href="tel:+2347065123746">Call</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="on-w">
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <h2 className="sp">
              Need a tester who ships with confidence? Let us talk.
            </h2>
            <div className="btns">
              <a
                className="btn s mag"
                href="mailto:dannkwo@gmail.com?subject=Project%20enquiry"
              >
                Contact me <i>&#8599;</i>
              </a>
              <a
                className="btn mag"
                href="https://www.linkedin.com/in/daniel-amaechi-nwankwo-29756b190/"
                target="_blank"
                rel="noopener"
              >
                View LinkedIn <i>&#8599;</i>
              </a>
            </div>
            <div className="cols">
              <div>
                <small>Email</small>
                <a href="mailto:dannkwo@gmail.com">dannkwo@gmail.com</a>
              </div>
              <div>
                <small>Phone</small>
                <a href="tel:+2347065123746">+234 706 512 3746</a>
              </div>
              <div>
                <small>LinkedIn</small>
                <a
                  href="https://www.linkedin.com/in/daniel-amaechi-nwankwo-29756b190/"
                  target="_blank"
                  rel="noopener"
                >
                  Daniel-Amaechi-Nwankwo
                </a>
              </div>
            </div>
            <div className="end">
              <span>&copy; 2026 Daniel Nwankwo</span>
              <a href="#intro">Back to top &#8593;</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
