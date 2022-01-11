import './App.css';

function App() {
  return (
    <>
      <nav className='navbar is-black is-fixed-top'>
        <div className='navbar-brand'>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <a class="navbar-item">About Me</a>
            <a class="navbar-item">Skills</a>
            <a class="navbar-item">My Apps</a>
            <a class="navbar-item">Resume</a>
          </div>
        </div>
      </nav>
      <main className='is-flex is-flex-direction-column is-align-items-center'>
        <div className="background">
          <div className="me-me">
            <h1 className='name title is-1'>Alexander Maniwang</h1>
            <p className='about-me title is-3'>Software Engineer</p>
          </div>
        </div>
        {/* put a line right here to seperate content */}
        {/* <section>
          <div className='skills section'>
            <p className='title is-3'>Proficiencies</p>
          </div>
        </section> */}
        <p className='title is-2'>Apps</p>
        <div className="project-one is-flex">
          <div className="project-details">
            <p className="title is-3">Genshin Builds</p>
            <p>Genshin builds was designed to plan and create teams customizing <br />each playable character for a better experience <br /> within the game Genshin Impact.</p>
            <div>
              <a href="https://genshin-team-builder.herokuapp.com/">
                <button class="button is-primary">
                  Go To App
                </button>
              </a>
              <a href="https://github.com/WangManLex/genshin-builds">
                <button class="button is-link">
                  Github
                </button>
              </a>
            </div>
          </div>
          <img src="images/GenshinBuilds.png" alt="Placeholder image" />
        </div>
        {/* put a line right here to seperate content */}
        <hr />
        <div className="project-two is-flex">
          <div className="project-details">
            <p className="title is-3">AniWorld</p>
            <p>AniWorld is an anime search website where you're able to track animes <br />if you are currently watching or have watched. Google OAuth <br />is used to save profile information as well.</p>
            <div>
              <a href="https://ani-world.herokuapp.com/">
                <button class="button is-primary">
                  Go To App
                </button>
              </a>
              <a href="https://github.com/WangManLex/AniWorld">
                <button class="button is-link">
                  Github
                </button>
              </a>
            </div>
          </div>
          <img src="images/AniWorld.png" alt="AniWorld Landing Page" />
        </div>
        {/* put a line right here to seperate content */}
        <hr />
        <div className="project-three is-flex">
          <div className="project-details">
            <p className="title is-3">Farming Sim</p>
            <p>With Farming Sim, you can plant any kind of plant you'd like as well as give it any fertilizer<br/> you'd like. By using Python and Django, this app demonstrates CRUD.</p>
            <div>
              <a href="https://python-farming-sim.herokuapp.com/">
                <button class="button is-primary">
                  Go To App
                </button>
              </a>
              <a href="https://github.com/WangManLex/farming-sim">
                <button class="button is-link">
                  Github
                </button>
              </a>
            </div>
          </div>
          <img src="images/FarmingSim.png" alt="AniWorld Landing Page" />
        </div>
        {/* put a line right here to seperate content */}
        <hr></hr>
        <div className="project-four is-flex">
          <a href="https://github.com/WangManLex/Blackjack">Blackjack</a>
          <img src="images/BlackJack.png" alt="Placeholder image" />
        </div>
        {/* put a line right here to seperate content */}
        <hr></hr>
        <div className='reach section'>
          <p className='title is-2'>Get In Touch</p>
          <button className="button is-success is-focused">
            alexandermaniwang99@gmail.com
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
