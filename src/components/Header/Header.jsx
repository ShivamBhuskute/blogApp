// // // import React from 'react'
// // // import {Container, Logo, LogoutBtn} from '../index'
// // // import { Link } from 'react-router-dom'
// // // import {useSelector} from 'react-redux'
// // // import { useNavigate } from 'react-router-dom'

// // // function Header() {
// // //   const authStatus = useSelector((state) => state.auth.status)
// // //   const navigate = useNavigate()

// // //   const navItems = [
// // //     {
// // //       name: 'Home',
// // //       slug: "/",
// // //       active: true
// // //     }, 
// // //     {
// // //       name: "Login",
// // //       slug: "/login",
// // //       active: !authStatus,
// // //   },
// // //   {
// // //       name: "Signup",
// // //       slug: "/signup",
// // //       active: !authStatus,
// // //   },
// // //   {
// // //       name: "All Posts",
// // //       slug: "/all-posts",
// // //       active: authStatus,
// // //   },
// // //   {
// // //       name: "Add Post",
// // //       slug: "/add-post",
// // //       active: authStatus,
// // //   },
// // //   ]


// // //   return (
// // //     <header className='py-3 shadow bg-white border-b-2 border-black'>
// // //       <Container>
// // //         <nav className='flex'>
// // //           <div className='mr-4'>
// // //             <Link to='/'>
// // //               <Logo width='100px'   />

// // //               </Link>
// // //           </div>
// // //           <ul className='flex ml-auto'>
// // //             {navItems.map((item) => 
// // //             item.active ? (
// // //               <li key={item.name}>
// // //                 <button
// // //                 onClick={() => navigate(item.slug)}
// // //                 className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
// // //                 >{item.name}</button>
// // //               </li>
// // //             ) : null
// // //             )}
// // //             {authStatus && (
// // //               <li>
// // //                 <LogoutBtn />
// // //               </li>
// // //             )}
// // //           </ul>
// // //         </nav>
// // //         </Container>
// // //     </header>
// // //   )
// // // }

// // // export default Header

// // import React from 'react';
// // import { Container, Logo, LogoutBtn } from '../index';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';

// // function Header() {
// //   const authStatus = useSelector((state) => state.auth.status);
// //   const navigate = useNavigate();
// //   const location = useLocation(); // Get the current location

// //   const navItems = [
// //     {
// //       name: 'Home',
// //       slug: '/',
// //       active: true
// //     },
// //     {
// //       name: 'Login',
// //       slug: '/login',
// //       active: !authStatus,
// //     },
// //     {
// //       name: 'Signup',
// //       slug: '/signup',
// //       active: !authStatus,
// //     },
// //     {
// //       name: 'All Posts',
// //       slug: '/all-posts',
// //       active: authStatus,
// //     },
// //     {
// //       name: 'Add Post',
// //       slug: '/add-post',
// //       active: authStatus,
// //     },
// //     {
// //       name: 'About',
// //       slug: '/about',
// //     }
// //   ];

// //   return (
// //     <header className="py-3 shadow bg-white border-b-2 border-black">
// //       <Container>
// //         <nav className="flex">
// //           <div className="mr-4">
// //             <Link to="/">
// //               <Logo width="100px" />
// //             </Link>
// //           </div>
// //           <ul className="flex ml-auto">
// //             {navItems.map((item) =>
// //               item.active ? (
// //                 <li key={item.name}>
// //                   <button
// //                     onClick={() => navigate(item.slug)}
// //                     className={`inline-block px-6 py-2 duration-200 rounded-full ${
// //                       location.pathname === item.slug
// //                         ? 'bg-blue-400 text-white' // Active link styles
// //                         : 'hover:bg-blue-100'
// //                     }`}
// //                   >
// //                     {item.name}
// //                   </button>
// //                 </li>
// //               ) : null
// //             )}
// //             {authStatus && (
// //               <li>
// //                 <LogoutBtn />
// //               </li>
// //             )}
// //           </ul>
// //         </nav>
// //       </Container>
// //     </header>
// //   );
// // }

// // export default Header;

// import React from 'react';
// import { Container, Logo, LogoutBtn } from '../index';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();
//   const location = useLocation(); // Get the current location

//   const navItems = [
//     {
//       name: 'Home',
//       slug: '/',
//       active: true
//     },
//     {
//       name: 'Login',
//       slug: '/login',
//       active: !authStatus,
//     },
//     {
//       name: 'Signup',
//       slug: '/signup',
//       active: !authStatus,
//     },
//     {
//       name: 'All Posts',
//       slug: '/all-posts',
//       active: authStatus,
//     },
//     {
//       name: 'Add Post',
//       slug: '/add-post',
//       active: authStatus,
//     },
//     {
//       name: 'About',
//       slug: '/about',
//       active: true // Always active as it's accessible to everyone
//     }
//   ];

//   return (
//     <header className="py-3 shadow bg-white border-b-2 border-black">
//       <Container>
//         <nav className="flex">
//           <div className="mr-4">
//             <Link to="/">
//               <Logo width="100px" />
//             </Link>
//           </div>
//           <ul className="flex ml-auto">
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className={`inline-block px-6 py-2 duration-200 rounded-full ${
//                       location.pathname === item.slug
//                         ? 'bg-blue-400 text-white' // Active link styles
//                         : 'hover:bg-blue-100'
//                     }`}
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-white border-b-2 border-black">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-6 py-2 duration-200 rounded-full ${
                      location.pathname === item.slug
                        ? 'bg-blue-400 text-white' // Active link styles
                        : 'hover:bg-blue-100'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            <li key="About">
              <button
                onClick={() => navigate('/about')}
                className={`inline-block px-6 py-2 duration-200 rounded-full ${
                  location.pathname === '/about'
                    ? 'bg-blue-400 text-white' // Active link styles
                    : 'hover:bg-blue-100'
                }`}
              >
                About
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
