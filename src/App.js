import './App.css';

function App() {
  return (
    <>
      <nav className='navbar is-dark has-shadow'>
        <div className='navbar-brand'>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <a class="navbar-item">About Me</a>
            <a class="navbar-item">Skills</a>
            <a class="navbar-item">My Projects</a>
            <a class="navbar-item">Resume</a>
          </div>
        </div>
      </nav>
      <main className='is-flex is-flex-direction-column is-align-items-center has-background-light'>
        <div>
          <h1 className='name title is-1'>Alexander Maniwang</h1>
          <section>
            <div className='about-me section'>
              <p className='title is-3'>About Me!!!!!</p>
            </div>
          </section>
        </div>
        <section>
          <div className='skills section'>
            <p className='title is-3'>coding skills go here</p>
          </div>
        </section>
        <section>
          <div className='projects section'>
            <p className='title is-3'>put my best projects here</p>
          </div>
        </section>
        <div className='reach section'>
          <p className='title is-3'>Reach Me Here:</p>
        </div>
      </main>
    </>
  );
}

export default App;
