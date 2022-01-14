import React from 'react'

const Navbar = (props) => {
   return (
      <>
         <div class="navbar shadow-lg bg-black text-neutral-content">
            <div class="px-2 mx-2 navbar-start">
               <span class="text-lg font-bold">
                  Alexander Maniwang
               </span>
            </div>
            <div class="hidden px-2 mx-2 navbar-end lg:flex">
               <div class="flex items-stretch">
                  <a class="btn btn-ghost btn-sm rounded-btn">
                     About Me
                  </a>
                  <a class="btn btn-ghost btn-sm rounded-btn">
                     Portfolio
                  </a>
                  <a class="btn btn-ghost btn-sm rounded-btn">
                     Skills
                  </a>
                  <a class="btn btn-ghost btn-sm rounded-btn">
                     Contact
                  </a>
               </div>
            </div>
         </div>
      </>
   );
}

export default Navbar;
