import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className='bg-black'>
        <div className="hero min-h-screen">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <div className='avatar w-6/12'>
                <img src="images/IMG_0544.jpeg" alt="Placeholder" className="mask mask-circle" />
              </div>
              <h1 className="mb-5 text-5xl font-bold">
                Alexander Maniwang
              </h1>
              <p className="mb-5 text-2xl">
                Full-Stack Developer
              </p>
            </div>
          </div>
        </div>
        <svg class="animate-bounce w-6 h-6">
        </svg>
        <div className="divider w-8/12 m-auto"></div>
        <div className="text-center">
          <h2 className="text-4xl m-5">About Me</h2>
          <p className="w-8/12 m-auto">I am an innovative Software Engineer with a passion for problem-solving that drives me to create high quality applications that are instinctively user-friendly. My background in retail and restaurant settings help me better understand consumer and customer needs and helps me focus under pressure, stay organized, and receive constant feedback. I have a constant drive to sculpt and mitigate actions to create a more efficient and straightforward engagement for customers.</p>
          <div>
            <a href="https://www.linkedin.com/in/alexandermaniwang/" target='_blank' rel='noreferrer'>
              <button className="btn btn-primary m-5">LinkedIn</button>
            </a>
            <a href="https://github.com/WangManLex" target='_blank' rel='noreferrer'>
              <button className="btn btn-accent m-5">GitHub</button>
            </a>
            <a href="https://drive.google.com/file/d/1AVuQ9tatLAgcVcXq8w3HxZpI4-E-OzkK/view?usp=sharing" target='_blank' rel='noreferrer'>
              <button className="btn btn-secondary m-5">Resume</button>
            </a>
          </div>
        </div>
        <div className="divider w-8/12 m-auto"></div>
        <div className="w-8/12 m-auto">
          {/* GENSHIN BUILDS */}
          <div className="card text-center shadow-2xl">
            <figure className="px-10 pt-10">
              <img src="images/GenshinBuilds.png" alt="Genshin Builds Landing Page" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Genshin Builds</h2>
              <p>Genshin Builds was designed to plan and create teams customizing each playable character for a better experience within the game Genshin Impact.</p>
              <div className="justify-center card-actions">
                <a href="https://genshin-team-builder.herokuapp.com/" target='_blank' rel='noreferrer'>
                  <button className='btn'>
                    Go To App
                  </button>
                </a>
                <a href="https://github.com/WangManLex/genshin-builds" target='_blank' rel='noreferrer'>
                  <button className='btn'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ANIWORLD  */}
          <div className="card text-center shadow-2xl">
            <figure className="px-10 pt-10">
              <img src="images/AniWorld.png" alt="AniWorld Landing Page" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">AniWorld</h2>
              <p>AniWorld is an anime search website where you're able to track animes if you are currently watching or have watched. Google OAuth is used to save profile information as well.</p>
              <div className="justify-center card-actions">
                <a href="https://ani-world.herokuapp.com/" target='_blank' rel='noreferrer'>
                  <button className="btn">
                    Go To App
                  </button>
                </a>
                <a href="https://github.com/WangManLex/AniWorld" target='_blank' rel='noreferrer'>
                  <button className="btn">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* FARMING SIM  */}
          <div className="card text-center shadow-2xl">
            <figure className="px-10 pt-10">
              <img src="images/FarmingSim.png" alt="FarmingSim Landing Page" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Farming Sim</h2>
              <p>With Farming Sim, you can plant any kind of plant you'd like as well as give it any fertilizer you'd like. By using Python and Django, this app demonstrates CRUD.</p>
              <div className="justify-center card-actions">
                <a href="https://python-farming-sim.herokuapp.com/" target='_blank' rel='noreferrer'>
                  <button className="btn">
                    Go To App
                  </button>
                </a>
                <a href="https://github.com/WangManLex/farming-sim" target='_blank' rel='noreferrer'>
                  <button className="btn">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* BLACKJACK */}
          <div className="card text-center shadow-2xl">
            <figure className="px-10 pt-10">
              <img src="images/BlackJack.png" alt="Blackjack" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Blackjack</h2>
              <p>Blackjack was created using Javascript and made to tackle the concepts of game logic.</p>
              <div className="justify-center card-actions">
                <a href="https://wangmanlex.github.io/Blackjack/" target='_blank' rel='noreferrer'>
                  <button className="btn">
                    Go To App
                  </button>
                </a>
                <a href="https://github.com/WangManLex/Blackjack" target='_blank' rel='noreferrer'>
                  <button className="btn">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="divider w-8/12 m-auto"></div>
        {/* -------- REACH ME ------------ */}
        <div className='flex-column text-center'>
          <p className='text-4xl m-9'>Get In Touch</p>
          <button className="btn btn-primary mb-9">
            alexandermaniwang99@gmail.com
          </button>
        </div>
      </main>
      <footer className="p-10 footer bg-neutral text-neutral-content">
        <div>
          <span>© 2022 Alexander Maniwang</span>
        </div>
      </footer>
    </>
  );
}

export default App;
