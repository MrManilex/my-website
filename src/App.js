import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Title from './Components/Title/Title.jsx'
import React, { useState } from 'react';

function App() {
  const [aniWorld, setAniWorld] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setAniWorld(!aniWorld)
  }

  return (
    <>
      <Navbar />
      <main className='bg-black'>
        <div className="hero min-h-screen">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <div className='avatar w-7/12'>
                <img src="images/IMG_0544.jpeg" alt="Placeholder" className="mask mask-circle" />
              </div>
              <p className="h-32 name text-5xl font-bold">
                Alexander Maniwang
              </p>
              <div className="mb-5 text-2xl" id='about-me'>
                <Title />
              </div>
            </div>
          </div>
        </div>

        <div className="divider w-8/12 m-auto"></div>

        <div className="text-center">
          <h2 className="text-4xl m-5">About Me</h2>
          <p className="w-7/12 m-auto"> My passion for technological advancements and efficiency does not only reside within the Software Engineering world but is applied in all of tech. I strive for building effiencient applications as well as providing the best customer service to those who are in need in any job I am in. <br/> <br/> I am also an innovative Software Engineer with a passion for problem-solving that drives me to create high quality applications that are instinctively user-friendly. My background in retail and restaurant settings help me better understand consumer and customer needs and helps me focus under pressure, stay organized, and receive constant feedback. I have a constant drive to sculpt and mitigate actions to create a more efficient and straightforward engagement for customers.</p>
          <div>
            <a href="https://www.linkedin.com/in/alexandermaniwang/" target='_blank' rel='noreferrer'>
              <button className="btn btn-primary m-5">LinkedIn</button>
            </a>
            <a href="https://github.com/MrManilex" target='_blank' rel='noreferrer'>
              <button className="btn btn-accent m-5">GitHub</button>
            </a>
            <a href="https://drive.google.com/file/d/1gh0r0U2SmZtlIo0EcLp9uI0rIOmj3gXx/view?usp=sharing" target='_blank' rel='noreferrer'>
              <button className="btn btn-secondary m-5" id='portfolio'>Resume</button>
            </a>
          </div>
        </div>

        <div className="divider w-8/12 m-auto"></div>
        <h2 className="text-center text-4xl m-5">Portfolio</h2>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="images/GenshinBuilds-2.png" className="w-9/12 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Genshin Builds</h1>
              <p className='py-6'>Genshin Builds was designed to plan and create teams customizing each playable character for a better experience within the game Genshin Impact. This project was created in collaboration with two other individuals using a <span className='btn-primary'>MERN</span> stack format and an <span className='btn-primary'>API.</span></p>
              <div className="card-actions">
                <a href="https://genshin-team-builder.herokuapp.com/" target='_blank' rel='noreferrer'>
                  <button className='btn btn-primary'>
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
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img src="images/AniWorld-2.png" className="w-2/3 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">AniWorld</h1>
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Deprecated - See New Development</span>
                </div>
              </div>
              <p className="py-6">AniWorld is an anime search website where you're able to track animes if you are currently watching or have watched. <span className='btn-primary'>Google OAuth</span> is used to save profile information as well. By using the <span className='btn-primary'>API</span> called AniApi, information about each anime can be retrieved and displayed in each details page.</p>
              <div className="card-actions">
                <a href="https://ani-world.herokuapp.com/" target='_blank' rel='noreferrer'>
                  <button className="btn btn-primary">
                    Go To App
                  </button>
                </a>
                <a href="https://github.com/WangManLex/AniWorld" target='_blank' rel='noreferrer'>
                  <button className="btn">
                    Github
                  </button>
                </a>
                <label htmlFor="my-modal-5" className="btn modal-button">New Development</label>
              </div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="images/FarmingSim-2.png" className="w-9/12 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Farming Simulator</h1>
              <p className='py-6'>With Farming Sim, you can plant any kind of plant you'd like as well as give it any fertilizer you'd like. By using <span className='btn-primary'>Python</span> and <span className='btn-primary'>Django</span>, this app demonstrates <span className='btn-primary'>CRUD</span>.</p>
              <div className="card-actions">
                <a href="https://python-farming-sim.herokuapp.com/" target='_blank' rel='noreferrer'>
                  <button className="btn btn-primary">
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
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img src="images/BlackJack.png" className="w-9/12 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">BlackJack</h1>
              <p className="py-6">Blackjack was created using <span className='btn-primary'>JavaScript</span>, <span className='btn-primary'>HTML</span>, and <span className='btn-primary'>CSS</span> to tackle the concepts of game logic.</p>
              <div className="card-actions">
                <a href="https://wangmanlex.github.io/Blackjack/" target='_blank' rel='noreferrer'>
                  <button className="btn btn-primary">
                    Go To App
                  </button>
                </a>
                <a href="https://mrmanilex.github.io/Blackjack/" target='_blank' rel='noreferrer'>
                  <button className="btn" id='skills'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider w-8/12 m-auto"></div>

        <div className="text-center">
          <h2 className="text-4xl m-5">Skills</h2>
          <div className='flex flex-wrap justify-center my-5'>
            <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" />
            <img src="https://img.icons8.com/color/144/000000/react-native.png" />
            <img src="https://img.icons8.com/color/144/000000/nodejs.png" />
            <img src="https://img.icons8.com/color/144/000000/python--v1.png" />
            <img src="https://img.icons8.com/ios-filled/150/000000/github.png" className="rounded-full bg-neutral-content" />
            <img src="https://img.icons8.com/color/144/000000/mongodb.png" />
          </div>
        </div>

        <div className="divider w-8/12 m-auto" id='contact'></div>
        {/* -------- REACH ME ------------ */}
        <div className='flex-column text-center'>
          <p className='text-4xl m-9'>Get In Touch</p>
          <a href="https://www.linkedin.com/in/alexandermaniwang/" target='_blank' rel='noreferrer'>
            <button className="btn btn-primary m-5">LinkedIn</button>
          </a>
          <button className="btn btn-primary mb-9 mx-2">
            alexandermaniwang99@gmail.com
          </button>
        </div>
      </main>
      <footer className="p-10 footer bg-neutral text-neutral-content">
        <div>
          <span>© 2022 Alexander Maniwang</span>
        </div>
        <div>
          <span className="neutral-content"> All icons used by <a href="https://icons8.com/">Icons8**</a>
          </span>
        </div>
      </footer>

      {/* modals  */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-max">
          <div className='flex'>
            <div className='mr-4'>
              <h3 className="text-4xl font-bold">AniWorld-MERN</h3>
              <p className="py-4">By utilizing <span className='btn-primary'>Anilist API</span> which uses <span className='btn-primary'>GraphQL</span>, user requests requires queries to specify a custom search. AniWorld will now also signup and/or login users and store user data in <span className='btn-primary'>MongoDB</span> while hashing and protecting their data.</p>
              <a href="https://github.com/WangManLex/aniworld-front-end">
                <button className='btn m-2'>Front-End Code</button>
              </a>
              <a href="https://github.com/WangManLex/aniworld-back-end">
                <button className='btn m-2'>Back-End Code</button>
              </a>
            </div>
            <img src='images/AniWorldMERN.png' className="w-3/4 rounded-lg shadow-2xl" />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">Close</label>
          </div>
        </div>
      </div>
    </>
  );
}



export default App;
