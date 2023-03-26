// Packages
// ============================================================================
"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
const axios = require('axios')


// Data
// ============================================================================
import { awards } from './data/awards'


// Illustrations
// ============================================================================
import IllustrationBranding from './illustrations/illustration--branding.svg'
import IllustrationCreative from './illustrations/illustration--creative.svg'
import IllustrationResearch from './illustrations/illustration--research.svg'
import IllustrationWeb from './illustrations/illustration--web.svg'
import IllustrationCircle from './illustrations/illustration--circle.svg'
import IllustrationSquare from './illustrations/illustration--square.svg'
import IllustrationTriangle from './illustrations/illustration--triangle.svg'
import IllustrationCross from './illustrations/illustration--cross.svg'
import IllustrationProcess from './illustrations/illustration--process.svg'
import IllustrationManifesto from './illustrations/illustration--manifesto.svg'


// Logos
// ============================================================================
import LogoMarkRiggan from './logos/logo--mark-riggan.svg'
import LogoDribbble from './logos/logo--dribbble.svg'
import LogoLinkedIn from './logos/logo--linkedin.svg'
import LogoMedium from './logos/logo--medium.svg'
import LogoTwitter from './logos/logo--twitter.svg'
import LogoABB from './logos/logo--abb.svg'
import LogoBlueCross from './logos/logo--bcbsnc.svg'
import LogoCampbell from './logos/logo--campbell.svg'
import LogoDisney from './logos/logo--disney.svg'
import LogoDuke from './logos/logo--duke.svg'
import LogoHwy55 from './logos/logo--hwy55.svg'
import LogoHonda from './logos/logo--honda.svg'
import LogoLexisNexis from './logos/logo--lexisnexis.svg'
import LogoLulu from './logos/logo--lulu.svg'
import LogoNCGov from './logos/logo--ncgov.svg'
import LogoNCState from './logos/logo--ncstate.svg'
import LogoNVidia from './logos/logo--nvidia.svg'
import LogoOracle from './logos/logo--oracle.svg'
import LogoRedHat from './logos/logo--redhat.svg'


// Images
// ============================================================================
import ImageUnicorn from './images/image--unicorn.png'
import ImageAccessibleBrandColors from './images/image--accessible-brand-colors.webp'
import ImageArrogance from './images/image--arrogance.webp'
import ImageDigitalStrategy from './images/image--digital-strategy.webp'
import ImageGoodDesign from './images/image--good-design.webp'
import ImageSimpleWords from './images/image--simple-words.webp'


// Home page
// ============================================================================
export default function Home() {


  // Dribbble shots
  // --------------------------------------------------------------------------
  const SHOTS_PER_PAGE = 18
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isError, setIsError] = useState(false)
  const [postsFetched, setPostsFetched] = useState(false)
  const [dribbblePage, setDribbblePage] = useState(1)
  const [dribbblePosts, setDribbblePosts] = useState([])
  const placeholderArr = Array.from({ length: SHOTS_PER_PAGE }, (v, i) => i)


  // Effects
  // --------------------------------------------------------------------------
  useEffect(() => {
    let didCancel = false
    let dribbbleRes = {}

    async function getDribbblePosts() {
      try {
        if (!postsFetched) {
          dribbbleRes = await axios.get(`https://api.dribbble.com/v2/user/shots?access_token=5d8cb2b13590c1ca7f7c64ddce445aff8cc88695c6a8a6dc72e3c6ce46a6ba94&per_page=18`,)
          setPostsFetched(true)
        }

        if (!didCancel) {
          setDribbblePosts([...dribbblePosts, ...dribbbleRes.data])

          if (isLoading) setIsLoading(false)
          if (isLoadingMore) setIsLoadingMore(false)
        }
      } catch (error) {
        console.warn(error)
        if (!didCancel) {
          if (isLoading) setIsLoading(false)
          if (isLoadingMore) setIsLoadingMore(false)
          setPostsFetched(true)
          setIsError(true)
        }
      }
    }

    if (!postsFetched && !didCancel) {
      getDribbblePosts()
    }

    return () => {
      didCancel = true
    }


  }, [
    dribbblePosts,
    postsFetched,
    dribbblePage,
    isLoading,
    isError,
    isLoadingMore,
  ])


  // Output
  // --------------------------------------------------------------------------
  return (
    <>
    <a className="visually-hidden" href="#main">Skip to main content</a>
    <header className="header">
      <div className="header__logo">
        <LogoMarkRiggan />
      </div>
      <h1 className="visually-hidden">Mark Riggan</h1>
    </header>
    <main id="main">

      {/* Intro section */}
      <section className="section section--intro">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Reimagine possible<em className="statement">.</em></h1>
            <p className="section__description">Connecting brands with people through handcrafted digital experiences.</p>
          </div>          

          <div className="highlights">
            <div className="highlight">
              <h2 className="highlight__title">Human-centered design<em className="statement">.</em></h2>
              <p className="highlight__description">Award-winning designs that are data-influenced and made for humans first.</p>
            </div>
            <div className="highlight">
              <h2 className="highlight__title">Top notch code<em className="statement">.</em></h2>
              <p className="highlight__description">Architected and built with the latest technologies for scalability and longevity.</p>
            </div>
            <div className="highlight">
              <h2 className="highlight__title">Tailored to your business<em className="statement">.</em></h2>
              <p className="highlight__description">Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
            </div>
          </div>

          <Image src={ImageUnicorn} alt="Portrait of the unicorn" placeholder="blur" priority />
        </div>
        <div className="dots dots--hero">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </section>

      {/* Projects section */}
      <section className="section section--projects">
        <h2 className="visually-hidden">Featured projects</h2>
        <div className="projects">          
          <div className="project">
            <h3 className="visually-hidden">Project 1</h3>
            <Image src="https://cdn.dribbble.com/userupload/5596308/file/original-4af6f71bf2785b1c6ca663004e7f27ad.png?compress=1&resize=752x" alt="Project 1 photo" fill />
          </div>
          <div className="project">
            <h3 className="visually-hidden">Project 2</h3>
            <Image src="https://cdn.dribbble.com/userupload/5596308/file/original-4af6f71bf2785b1c6ca663004e7f27ad.png?compress=1&resize=752x" alt="Project 1 photo" fill />
          </div>
          <div className="project">
            <h3 className="visually-hidden">Project 3</h3>
            <Image src="https://cdn.dribbble.com/userupload/5596308/file/original-4af6f71bf2785b1c6ca663004e7f27ad.png?compress=1&resize=752x" alt="Project 1 photo" fill />
          </div>
          <div className="project">
            <h3 className="visually-hidden">Project 4</h3>
            <Image src="https://cdn.dribbble.com/userupload/5596308/file/original-4af6f71bf2785b1c6ca663004e7f27ad.png?compress=1&resize=752x" alt="Project 1 photo" fill />
          </div>
          <div className="project">
            <h3 className="visually-hidden">Project 5</h3>
            <Image src="https://cdn.dribbble.com/userupload/5596308/file/original-4af6f71bf2785b1c6ca663004e7f27ad.png?compress=1&resize=752x" alt="Project 1 photo" fill />
          </div>
          <div className="project">
            <h3 className="visually-hidden">Project 6</h3>
            <Image src="https://cdn.dribbble.com/userupload/5596308/file/original-4af6f71bf2785b1c6ca663004e7f27ad.png?compress=1&resize=752x" alt="Project 1 photo" fill />
          </div>
        </div>
      </section>

      {/* Dribbble shots section */}
      <section className="section section--shots">
        <div className="section__wrapper">
          <h2 className="visually-hidden">Dribbble shots</h2>
          <div className="shots">
            {!isLoading && dribbblePosts.map((post) => (
              <article key={post.id} className="shot">
                <a className="shot__link" href={post.html_url} target="_blank" rel="noreferrer">
                  <figure className="shot__figure">
                    <Image
                      src={post.images.hidpi}
                      width={220}
                      height={165}
                      alt={`screenshot of ${post.title}`}
                      placeholder="blur"
                      blurDataURL={post.images.teaser}
                    />
                  </figure>
                  <div className="shot__overlay">
                    <h3 className="shot__title">{post.title}</h3>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients section */}
      <section className="section section--clients">
        <div className="section__wrapper">
          <h2 className="visually-hidden">Featured clients</h2>
          <div className="clients">
            <div className="client">
              <LogoABB />
              <h3 className="visually-hidden">ABB</h3>
            </div>
            <div className="client">
              <LogoBlueCross />
              <h3 className="visually-hidden">BlueCross BlueShield NC</h3>
            </div>
            <div className="client">
              <LogoCampbell />
              <h3 className="visually-hidden">Campbell University</h3>
            </div>
            <div className="client">
              <LogoDisney />
              <h3 className="visually-hidden">Walt Disney</h3>
            </div>
            <div className="client">
              <LogoDuke />
              <h3 className="visually-hidden">Duke University</h3>
            </div>
            <div className="client">
              <LogoHwy55 />
              <h3 className="visually-hidden">Hwy 55</h3>
            </div>
            <div className="client">
              <LogoHonda />
              <h3 className="visually-hidden">Honda</h3>
            </div>
            <div className="client">
              <LogoLexisNexis />
              <h3 className="visually-hidden">LexisNexis</h3>
            </div>
            <div className="client">
              <LogoLulu />
              <h3 className="visually-hidden">Lulu</h3>
            </div>
            <div className="client">
              <LogoNCGov />
              <h3 className="visually-hidden">State of North Carolina</h3>
            </div>
            <div className="client">
              <LogoNCState />
              <h3 className="visually-hidden">NC State University</h3>
            </div>
            <div className="client">
              <LogoNVidia />
              <h3 className="visually-hidden">NVidia</h3>
            </div>
            <div className="client">
              <LogoOracle />
              <h3 className="visually-hidden">Oracle</h3>
            </div>
            <div className="client">
              <LogoRedHat />
              <h3 className="visually-hidden">Red Hat</h3>
            </div>
            <div className="client">
              <LogoDuke />
              <h3 className="visually-hidden">Duke University</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section className="section section--skills">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Simplifying complexity<em className="statement">.</em> Delightfully<em className="statement">.</em></h1>
            <p className="section__description">Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
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
              <h2 className="skill__title"><span>Creative process</span> Delightfully simple<em className="statement">.</em></h2>
              <IllustrationProcess />
              <span className="dots dots--skill-ext" aria-hidden="true"></span>
            </div>
            <div className="skill">
              <h2 className="skill__title"><span>Personal manifesto</span> Uncompromising design<em className="statement">.</em></h2>
              <IllustrationManifesto />
              <span className="dots dots--skill-ext" aria-hidden="true"></span>
            </div>
            <span className="dots dots--section" aria-hidden="true"></span>
          </div>
        </div>
      </section>

      {/* Awards section */}
      <section className="section section--awards">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Fueled by passion<em className="statement">.</em> Dedicated to excellence<em className="statement">.</em></h1>
            <p className="section__description">Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
          </div>
          
          <div className="awards">
            {awards.map((award, key) => {
              return (
                <div key={key} className="award">
                  <div className="award__headline">
                    <div className="award__subtitle">{award.subtitle}</div>
                    <h2 className="award__title">{award.title}</h2>
                  </div>
                  <div className="award__organization">{award.organization}</div>
                  <div className="award__date">{award.date}</div>
                </div>
              )
            })}
            <span className="dots dots--section" aria-hidden="true"></span>
          </div>
        </div>
      </section>

      {/* Articles section */}
      <section className="section">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">Thoughts and ideas. Level up.</h1>
            <p className="section__description">Thoughts and advice on users, experience, and everything design.</p>
          </div>
          
          <div className="articles">
            <article className="article">
              <a className="article__link" href="https://medium.com/swlh/guide-to-accessible-brand-colors-cda383d9f00e" target="_blank">
                <div className="article__cover">
                  <Image src={ImageAccessibleBrandColors} alt={'alt for picture'} placeholder="blur" />
                </div>
                <div className="article__headline">
                  <h1 className="article__title">{`Don't make me squint: How to choose accessible brand colors for your audience.`}</h1>
                  <div className="article__meta">
                    <div className="article__category">Accessibility</div>
                    <div className="article__length">5 min read</div>
                  </div>                  
                </div>
              </a>              
            </article>
            <article className="article">
              <a className="article__link" href="https://medium.com/swlh/4-reasons-why-being-arrogant-is-actually-a-positive-thing-d270fda3cba0" target="_blank">
                <div className="article__cover">
                  <Image src={ImageArrogance} alt={'alt for picture'} placeholder="blur" />
                </div>
                <div className="article__headline">
                  <h1 className="article__title">{`4 reasons why being arrogant could actually be a positive thing`}</h1>
                  <div className="article__meta">
                    <div className="article__category">Life lessons</div>
                    <div className="article__length">6 min read</div>
                  </div>                  
                </div>
              </a>              
            </article>
            <article className="article">
              <a className="article__link" href="https://medium.com/swlh/four-simple-words-thatll-drive-you-to-being-a-better-creative-person-82337b07ac57" target="_blank">
                <div className="article__cover">
                  <Image src={ImageSimpleWords} alt={'alt for picture'} placeholder="blur" />
                </div>
                <div className="article__headline">
                  <h1 className="article__title">{`Four simple words that'll drive you to being a better creative person.`}</h1>
                  <div className="article__meta">
                    <div className="article__category">Startup</div>
                    <div className="article__length">5 min read</div>
                  </div>                  
                </div>
              </a>              
            </article>
            <article className="article">
              <a className="article__link" href="https://medium.com/swlh/reimagining-digital-strategy-and-how-we-document-data-architecture-9c40f94454d8" target="_blank">
                <div className="article__cover">
                  <Image src={ImageDigitalStrategy} alt={'alt for picture'} placeholder="blur" />
                </div>
                <div className="article__headline">
                  <h1 className="article__title">{`Reimagining digital strategy and how we document data architecture`}</h1>
                  <div className="article__meta">
                    <div className="article__category">UX</div>
                    <div className="article__length">9 min read</div>
                  </div>                  
                </div>
              </a>
            </article>
            <article className="article">
              <a className="article__link" href="https://medium.com/swlh/how-good-design-shows-your-brand-is-credible-22d497e5a7ac" target="_blank">
                <div className="article__cover">
                  <Image src={ImageGoodDesign} alt={'alt for picture'} placeholder="blur" />
                </div>
                <div className="article__headline">
                  <h1 className="article__title">{`How your brand's credibility starts with great visual design`}</h1>
                  <div className="article__meta">
                    <div className="article__category">Marketing</div>
                    <div className="article__length">6 min read</div>
                  </div>                  
                </div>
              </a>              
            </article>
            <span className="dots dots--section" aria-hidden="true"></span>
          </div>
          <div className="callout">Go behind the scenes at Dribbble</div>
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

      <button className="music">
        <span className="visually-hidden">Toggle music</span>
      </button>
    </footer>
    </>
  )
}
