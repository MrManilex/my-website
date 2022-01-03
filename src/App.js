import './App.css';

function App() {
  return (
    <main>
      <nav>
        <li>About Me</li>
        <li>Proficiencies</li>
        <li>My Projects</li>
      </nav>
      <section>
        <div className='about-me'>
          <p>About Me!!!!!</p>
        </div>
      </section>
      <section>
        <div className='skills'>
          {/* coding skills go here */}
        </div>
      </section>
      <section>
        <div className='projects'>
          {/* put my best projects here */}
        </div>
      </section>
      <div className='reach'>
        <p>Reach Me Here:</p>
      </div>
    </main>
  );
}

export default App;
