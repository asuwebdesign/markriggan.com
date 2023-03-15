import Image from 'next/image'

import { awards } from './data/awards'

import IllustrationBranding from './illustrations/illustration--branding.svg'
import IllustrationCreative from './illustrations/illustration--creative.svg'
import IllustrationResearch from './illustrations/illustration--research.svg'
import IllustrationWeb from './illustrations/illustration--web.svg'

import LogoDribbble from './logos/logo--dribbble.svg'
import LogoLinkedIn from './logos/logo--linkedin.svg'
import LogoMedium from './logos/logo--medium.svg'
import LogoTwitter from './logos/logo--twitter.svg'

import ImageUnicorn from './images/image--unicorn.png'

export default function Home() {
  return (
    <>
    <a className="visually-hidden" href="#main">Skip to main content</a>
    <header className="header">
      <h1>Mark Riggan</h1>
    </header>
    <main id="main">
      <section className="section section--intro">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Reimagine possible<span>.</span></h1>
            <p className="section__description">Connecting brands with people through handcrafted digital experiences.</p>
          </div>          

          <div className="highlights">
            <div className="highlight">
              <h2 className="highlight__title">Human-centered design.</h2>
              <p className="highlight__description">Award-winning designs that are data-influenced and made for humans first.</p>
            </div>
            <div className="highlight">
              <h2 className="highlight__title">Top notch code.</h2>
              <p className="highlight__description">Architected and built with the latest technologies for scalability and longevity.</p>
            </div>
            <div className="highlight">
              <h2 className="highlight__title">Tailored to your business.</h2>
              <p className="highlight__description">Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
            </div>
          </div>

          <Image src={ImageUnicorn} alt="Portrait of the unicorn" />
        </div>
      </section>
      <section className="section">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Viable to valuable.</h1>
            <p className="section__description">Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
          </div>          
          

          {/* Featured projects */}
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>

          {/* Latest Dribbble shots */}
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>

          {/* Featured client logos */}
        </div>
      </section>
      <section className="section">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Simplifying complexity. Delightfully.</h1>
            <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
          </div>

          <div className="skills">
            <div className="skill">
              <IllustrationBranding />
              <h2 className="skill__title">Branding Strategy &amp; Identity</h2>
              <span className="dots dots--skill" aria-hidden="true"></span>
            </div>
            <div className="skill">
              <IllustrationCreative />
              <h2 className="skill__title">Creative &amp; Experience Design</h2>
              <span className="dots dots--skill" aria-hidden="true"></span>
            </div>
            <div className="skill">
              <IllustrationResearch />
              <h2 className="skill__title">Research, Data &amp; Analysis</h2>
              <span className="dots dots--skill" aria-hidden="true"></span>
            </div>
            <div className="skill">
              <IllustrationWeb />
              <h2 className="skill__title">Websites &amp; Digital Platforms</h2>
              <span className="dots dots--skill" aria-hidden="true"></span>
            </div>
            <div className="skill">
              <h2 className="skill__title">Creative process Delightfully simple.</h2>
              <span className="dots dots--skill-ext" aria-hidden="true"></span>
            </div>
            <div className="skill">
              <h2 className="skill__title">Personal manifesto Uncompromising design.</h2>
              <span className="dots dots--skill-ext" aria-hidden="true"></span>
            </div>
            <span className="dots dots--section" aria-hidden="true"></span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Hashtag: winning.</h1>
            <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
          </div>
          
          {/* List of awards */}
          <div className="awards">
            {awards.map((award, key) => {
              return (
                <div key={key} className="award">
                  <h2 className="award__title">{award.title}</h2>
                  {award.subtitle}
                  {award.organization}
                  {award.date}
                </div>
              )
            })}
            <span className="dots dots--section" aria-hidden="true"></span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__wrapper">
          <h1 className="section__title">Some light reading.</h1>
          <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>

          {/* List of Medium articles */}
          <div className="articles">
            <article className="article">
              <h1>{`Don't make me squint: How to choose accessible brand colors for your audience.`}</h1>
            </article>
            <article className="article">
              <h1>{`4 reasons why being arrogant could actually be a positive thing`}</h1>
            </article>
            <article className="article">
              <h1>{`Four simple words that'll drive you to being a better creative person.`}</h1>
            </article>
            <article className="article">
              <h1>{`Reimagining digital strategy and how we document data architecture`}</h1>
            </article>
            <article className="article">
              <h1>{`How your brand's credibility starts with great visual design`}</h1>
            </article>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <small>Copyright</small>

      <div className="social">
        <ul className="social__list">
          <li className="social__list-item">
            <a href="https://dribbble.com/markr" target="_blank">
              <LogoDribbble />
              <span className="visually-hidden">Dribbble</span>
            </a>
          </li>
          <li className="social__list-item">
            <a href="https://medium.com/@Asuwebdesign" target="_blank">
              <LogoMedium />
              <span className="visually-hidden">Medium</span>
            </a>
          </li>
          <li className="social__list-item">
            <a href="https://www.linkedin.com/in/markriggan" target="_blank">
              <LogoLinkedIn />
              <span className="visually-hidden">LinkedIn</span>
            </a>
          </li>
          <li className="social__list-item">
            <a href="https://twitter.com/asuwebdesign" target="_blank">
              <LogoTwitter />
              <span className="visually-hidden">Twitter</span>
            </a>
          </li>
        </ul>
      </div>

      <button>Toggle audio</button>
    </footer>
    </>
  )
}
