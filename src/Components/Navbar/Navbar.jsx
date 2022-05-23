import React from 'react'

const Navbar = (props) => {
   return (
      <>
         <div className="navbar fixed shadow-lg bg-black text-neutral-content w-full z-50">
            <div className="px-2 mx-2 navbar-start">
               <span className="text-lg font-bold">
                  Alexander Maniwang
               </span>
            </div>
            <div className="px-2 mx-2 navbar-end lg:flex">
               <div className="flex items-stretch">
                  <a className="btn btn-ghost btn-sm rounded-btn" href='#about-me'>
                     About Me
                  </a>
                  <a className="btn btn-ghost btn-sm rounded-btn" href='#portfolio'>
                     Portfolio
                  </a>
                  {/* <a className="btn btn-ghost btn-sm rounded-btn" href='#skills'>
                     Skills
                  </a> */}
                  <a className="btn btn-ghost btn-sm rounded-btn" href='#contact'>
                     Contact
                  </a>
               </div>
            </div>
         </div>
      </>
   );
}

export default Navbar;
