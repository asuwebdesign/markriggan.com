import Image from 'next/image'

import IllustrationBranding from './illustrations/illustration--branding.svg'
import IllustrationCreative from './illustrations/illustration--creative.svg'
import IllustrationResearch from './illustrations/illustration--research.svg'
import IllustrationWeb from './illustrations/illustration--web.svg'

import LogoDribbble from './logos/logo--dribbble.svg'
import LogoLinkedIn from './logos/logo--linkedin.svg'
import LogoMedium from './logos/logo--medium.svg'
import LogoTwitter from './logos/logo--twitter.svg'

export default function Home() {
  return (
    <>
    <a href="#main">Skip to main content</a>
    <header>
      <h1>Mark Riggan</h1>
    </header>
    <main id="main">
      <section>
        <h1>Reimagine possible.</h1>
        <p>Connecting brands with people through handcrafted digital experiences.</p>

        <div>
          <h2>Human-centered design.</h2>
          <p>Award-winning designs that are data-influenced and made for humans first.</p>
        </div>
        <div>
          <h2>Top notch code.</h2>
          <p>Architected and built with the latest technologies for scalability and longevity.</p>
        </div>
        <div>
          <h2>Tailored to your business.</h2>
          <p>Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
        </div>
      </section>
      <section>
        <h1>Viable to valuable.</h1>
        <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>

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
      </section>
      <section>
        <h1>Simplifying complexity. Delightfully.</h1>
        <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>

        <div><IllustrationBranding /> <h2>Branding Strategy &amp; Identity</h2></div>
        <div><IllustrationCreative /> <h2>Creative &amp; Experience Design</h2></div>
        <div><IllustrationResearch /> <h2>Research, Data &amp; Analysis</h2></div>
        <div><IllustrationWeb /> <h2>Websites &amp; Digital Platforms</h2></div>
        <div><h2>Creative process Delightfully simple.</h2></div>
        <div><h2>Personal manifesto Uncompromising design.</h2></div>
      </section>
      <section>
        <h1>Hashtag: winning.</h1>
        <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>
        
        {/* List of awards */}
      </section>
      <section>
        <h1>Some light reading.</h1>
        <p>Building identities and experiences to elevate and empower organizations of all shapes and sizes.</p>

        {/* List of Medium articles */}
        <article>
          <h1>Don't make me squint: How to choose accessible brand colors for your audience.</h1>
        </article>
        <article>
          <h1>4 reasons why being arrogant could actually be a positive thing</h1>
        </article>
        <article>
          <h1>Four simple words that'll drive you to being a better creative person.</h1>
        </article>
        <article>
          <h1>Reimagining digital strategy and how we document data architecture</h1>
        </article>
        <article>
          <h1>How your brand's credibility starts with great visual design</h1>
        </article>
      </section>
    </main>
    <footer>
      <small>Copyright</small>

      <div>
        <ul>
          <li><a href="#"><LogoDribbble /> Dribbble</a></li>
          <li><a href="#"><LogoMedium /> Medium</a></li>
          <li><a href="#"><LogoLinkedIn /> LinkedIn</a></li>
          <li><a href="#"><LogoTwitter /> Twitter</a></li>
        </ul>
      </div>

      <button>Toggle audio</button>
    </footer>
    </>
  )
}
