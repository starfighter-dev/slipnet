import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import "bootstrap/dist/css/bootstrap.min.css";
import './slipnet.css'

function App() {
  const posts = getPosts();
  return (
    <>
      <Header />

      <div className="row main-body">
        <div className="col-12 col-lg-10">
          {posts.map((post, i) => (
            <Post
              key={i}
              title={post.title}
              who={post.who}
              date={post.date}
              body={post.body}
            />
          ))}
        </div>
        <div className="col-2 d-none d-lg-block linkydinky">
          <h3>..stuff..</h3>
          <ul className="side-links">
            <li><a target="_blank" href="https://www.starfighter.dev/">My work</a></li>
            <li><a target="_blank" href="https://github.com/starfighter-dev">GitHub</a></li>
            <li><a target="_blank" href="/mje-pubkey.txt">PGP Key</a></li>
          </ul>
          <h3>..social..</h3>
          <ul className="side-links">
            <li><a target="_blank" href="https://www.twitter.com/d33bx">Twitting</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  )
}

//<h3 className="mb-4">..twitter..</h3>
//<a className="twitter-timeline" data-tweet-limit="5" data-theme="dark" href="https://twitter.com/d33bx?ref_src=twsrc%5Etfw">Tweets by d33bx</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

function getPosts() {
  return [
    {
      title: 'Been a while',
      who: 'slippy',
      date: '24 Jul 2023',
      body:
         <>
         <p>I think it's fair to say, a lot has happened since I posted here previously. Life - what a thing. In any case, something very important has happened:</p>
         <p><a href="https://tosche.net/fonts/comic-code" target="_blank">Comic Code Font</a></p>
         <p>I wish you well, Internet.</p>
         </>
    },
    {
      title: 'Incoming',
      who: 'slippy',
      date: '17 Feb 2021',
      body:
        <>
          <p>Looking forward to welcoming my daughter to the world shortly. Here are a couple of videos we made - the first a baby announcement from October 2020, and secondly our 'gender reveal' (which happily didn't cause any disruption to families in California.)</p>
          <p><iframe width="560" height="315" src="https://www.youtube.com/embed/fL_arATyylc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>
          <p><iframe width="560" height="315" src="https://www.youtube.com/embed/RiU1hYB0syQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>
        </>
    },
    {
      title: 'I have a thing for countdowns...',
      who: 'slippy',
      date: '24 Sep 2020',
      body:
        <>
          <p>I really like counting down to things. I had a website set up to countdown to our move to the UK, our valentines dinner in "The Great Hall", the cancelled GnR concert this year - and now, the PS5.</p>
          <p>
            <a href="/ps5" target="_blank">Breathe with me!</a>
          </p>
          <p>It other news, I'm currently bumbling my way through the PyGame library for Python. Check out my GitHub for my bumblings. I'm pleasantly surprised by how straightforward it is to use, I may even make a modern version of my masterpiece game 'Super Spud', originally released for the Amstrad CPC. When I say 'masterpiece', well....</p>
        </>
    },
    {
      title: 'This makes me happy',
      who: 'slippy',
      date: '19 Aug 2020',
      body:
        <>
          <p>It's the simple things, eh?</p>
          <p>
            <img className="img-fluid" src="img/sfirc.png" alt="irc" />
          </p>
        </>
    },
    {
      title: 'Resurrected',
      who: 'slippy',
      date: '7 Aug 2020',
      body:
        <>
          <p>I pulled an old slipnet design, circa 2001-05 from the way back machine and modernised it a bit.. why not, eh? <a href="https://web.archive.org/web/20050829163957/http://www.slipnet.org.uk/" target="_blank">Here it is</a>, if you're so inclined.</p>
          <p><img className="img-fluid" src="img/mr.gif" alt="mr robot" /></p>
        </>
    },
    {
      title: 'Not much here',
      who: 'slippy',
      date: '19 July 2019',
      body:
        <>
          <p>I'm hoping one day to turn this into a blog-type-thing about life, my endeavors with work, and fascination with Taco Bell. But right now, it resembles a 90's 'home page'. Sorry.</p>
          <p>In the meantime, here are some links to things I do:</p>
          <ul>
            <li><a href="https://www.starfighter.dev/">My work</a> - Need some software? I'm like the A-Team, but there's one of me, and I can't weld.</li>
            <li><a href="https://github.com/starfighter-dev">GitHub</a> - I'm trying to put some simple stuff out on GitHub, which people might find useful. Perhaps.</li>
            <li><a href="https://www.twitter.com/d33bx">My twitter thing</a></li>
            <li>Steal my identity via <a href="https://www.facebook.com/slippy">Facebook</a> (PS Please don't)</li>
            <li>I'm slippy_v on PSN</li>
            <li>My switch friend code is SW-3987-9617-8666</li>
            <li>US keyboard layout and need a <a href="/quid">quid</a>?<sup> It just copies one to your clipboard when you click the page.</sup></li>
            <li>Some weird <a href="/life">JS experiment</a>, which can look pretty. Or not.</li>
            <li>Recently, I have been learning more than I ever wanted to about how cars work.</li>
            <li>I have a Sega Game Gear with an LCD screen mod.</li>
          </ul>

          <p>Here's some other stuff I like:</p>

          <ul>
            <li><a href="http://www.mapcrunch.com/">A random view of the world every day</a></li>
            <li><a href="http://www.chiptune.com/">http://www.chiptune.com/</a></li>
            <li><a href="/people.jpg" target="_blank">People</a></li>
          </ul>
          <p>
            Through the Swamp of Despair, the Wood of Humiliation and the Chasm of Hopelessness!
          </p>
          <p>Cheers,</p>
          <p>Martin</p>


        </>
    }
  ];
}

export default App
