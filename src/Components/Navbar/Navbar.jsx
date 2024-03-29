import React from 'react'

const Navbar = (props) => {
   return (
      <>
         <div className="navbar fixed shadow-lg bg-black text-neutral-content w-full z-50">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     <li><a className="btn btn-ghost rounded-btn" href='#about-me'>
                        About Me
                     </a></li>
                     <li><a className="btn btn-ghost rounded-btn" href='#portfolio'>
                        Portfolio
                     </a></li>
                     <li><a className="btn btn-ghost rounded-btn" href='#skills'>
                        Skills
                     </a></li>
                     <li><a className="btn btn-ghost rounded-btn" href='#contact'>
                        Contact
                     </a></li>
                  </ul>
               </div>
               <a href='/' className="btn btn-ghost normal-case text-xl">Alexander Maniwang</a>
            </div>
            <div className="navbar-end hidden lg:flex ">
               <ul className="menu menu-horizontal p-0 flex-row">
                  <li><a className="btn btn-ghost rounded-btn" href='#about-me'>
                     About Me
                  </a></li>
                  <li><a className="btn btn-ghost rounded-btn" href='#portfolio'>
                     Portfolio
                  </a></li>
                  <li><a className="btn btn-ghost rounded-btn" href='#skills'>
                     Skills
                  </a></li>
                  <li><a className="btn btn-ghost rounded-btn" href='#contact'>
                     Contact
                  </a></li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default Navbar;
