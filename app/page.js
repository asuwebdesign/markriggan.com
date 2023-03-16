"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
const axios = require('axios')

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

  const SHOTS_PER_PAGE = 12
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isError, setIsError] = useState(false)
  const [postsFetched, setPostsFetched] = useState(false)
  const [dribbblePage, setDribbblePage] = useState(1)
  const [dribbblePosts, setDribbblePosts] = useState([])
  const placeholderArr = Array.from({ length: SHOTS_PER_PAGE }, (v, i) => i)

  useEffect(() => {
    let didCancel = false
    let dribbbleRes = {}

    async function getDribbblePosts() {
      try {
        if (!postsFetched) {
          dribbbleRes = await axios.get(`https://api.dribbble.com/v2/user/shots?access_token=5d8cb2b13590c1ca7f7c64ddce445aff8cc88695c6a8a6dc72e3c6ce46a6ba94&per_page=12`,)
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
          <section className="projects">
            <h2 className="visually-hidden">Featured projects</h2>
            <div className="project">
              <h3 className="project__title">Project 1</h3>
            </div>
            <div className="project">
              <h3 className="project__title">Project 2</h3>
            </div>
            <div className="project">
              <h3 className="project__title">Project 3</h3>
            </div>
            <div className="project">
              <h3 className="project__title">Project 4</h3>
            </div>
          </section>

          <section className="shots">
            <h2 className="visually-hidden">Dribbble shots</h2>
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
          </section>


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
                  <div className="award__subtitle">{award.subtitle}</div>
                  <div className="award__organization">{award.organization}</div>
                  <div className="award__date">{award.date}</div>
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
