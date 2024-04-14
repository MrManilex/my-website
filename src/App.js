import './App.css';
// import Navbar from './Components/Navbar/Navbar.jsx'
import React from 'react';

function App() {

  return (
    <>
      <main>
        {/* UNDER CONSTRUCTION SECTION */}
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(images/abstract.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">The portfolio for <span className='text-secondary'>Alexander Maniwang</span> is currently under construction. <br /> <br /> Any inquiries please email: <span className='text-secondary'>alexandermaniwang99@gmail.com</span></p>
              <a href="https://www.linkedin.com/in/alexandermaniwang/" target='_blank' rel='noreferrer'>
                <button className="btn btn-primary m-5">LinkedIn</button>
              </a>
              <a href="https://github.com/MrManilex" target='_blank' rel='noreferrer'>
                <button className="btn btn-primary m-5">Github</button>
              </a>
              
            </div>
          </div>
        </div>

        {/* ABOUT ME */}
        {/* <div className='flex flex-col items-center text-center mx-40 '>
          <h2 className='mt-40 mb-5 text-4xl'>About Me</h2>
          <p className='mb-10'>My passion for technological advancements and efficiency does not only reside within the Software Engineering world but is applied in all of tech. I strive for building effiencient applications as well as providing the best customer service to those who are in need in any job I am in. <br /> <br /> I am also an innovative Software Engineer with a passion for problem-solving that drives me to create high quality applications that are instinctively user-friendly. My background in retail and restaurant settings help me better understand consumer and customer needs and helps me focus under pressure, stay organized, and receive constant feedback. I have a constant drive to sculpt and mitigate actions to create a more efficient and straightforward engagement for customers</p>
        </div>

        <div className="divider divider-neutral"></div> */}

        {/* PROJECTS */}

      </main>
    </>
  );
}



export default App;
