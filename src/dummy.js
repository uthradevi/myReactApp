// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Router,
//   Switch,
//   Route,
//   Link
// } from "react-router";
// function Navbar() {
//   return (
//     <Router>
//     <div >
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo03"
//             aria-controls="navbarTogglerDemo03"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <a className="navbar-brand" href="#Elementdata">
//             Puppies
//           </a>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#Elementdata">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#Elementdata">
//                   Logs
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link disabled"
//                   href="#Elementdata"
//                   tabIndex="-1"
//                   aria-disabled="true"
//                 >
//                   Events
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
  
//       </nav>

//       <div className="card mb-3">
//         <img
//           src="https://images.indianexpress.com/2021/04/puppy-1903313_1280.jpg"
//           className="img-top"
//           alt="..."
//         />
//         <h3 className="first-txt">Puppies Home</h3>
//         <div className="card-body">
//           <h5 className="card-title"> Most Popular Dog Breeds!!</h5>
//           <p className="card-text">
//             Dogs can teach kids responsibility, compassion, and cooperation —
//             all while being the best playmates anyone could ask for. Before you
//             adopt any pup, however, it's always a good idea to research the best
//             kind of dog breed for your children and lifestyle. Some dogs do
//             better as playmates for rambunctious older kids, while others have
//             gentle, patient souls more suited for little ones. If you have young
//             children at home, consider adopting an older dog as well.
//             Temperaments can vary based on the individual animal, but these 20
//             family-friendly breeds are a great place to start your pet adoption
//             search, according to the American Kennel Club. How you choose can
//             depend on your living arrangements, schedule, activity levels, and
//             budget. When you welcome a new pet into the family, expect to
//             provide your pup with consistent, loving training as well. Your
//             child will also benefit from learning how to interact safely and
//             respectfully with animals. Don't forget to create a family schedule
//             for walking, playing, feeding, and grooming! With sweet, loving dog
//             breeds like these, your crew won't be able to imagine life without
//             their canine pal.
//           </p>
//           <p className="card-text">
//             <small className="text-muted">Go through it</small>
//           </p>
//         </div>
//       </div>
//     </div>
//     <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/blog">
//             <Blog />
//           </Route>
//           <Route path="/events">
//             <Events />
//           </Route>
//         </Switch>
//     </Router>

//   );
// }
// function Home(){
//   return(
//     <div>home</div>
//   )
// }
// function Blog(){
//   return(
//     <div>blog</div>
//   )
// }
// function Events(){
//   return(
//     <div>events</div>
//   )
// }

// export default Navbar;
// import { data } from "jquery";
//--------------------------------------------store.js-----------------------------------
// import * as redux from "redux";
// //Actions
// export const COUNTER_INCREAMENT = "counter/increament";
// export const COUNTER_DECREAMENT = "counter/decreament";

// const countinitialstate = {
//   count: 0,
// };
// // console.log(countinitialstate.count)
// //reducer
// const countreducer = (state = countinitialstate, action) => {
//   switch (action.type) {
//     case COUNTER_INCREAMENT: {
//       return { ...state, count: state.count + 1 };
//     }

//     case COUNTER_DECREAMENT: {
//       return { ...state, count: state.count - 1 };
//     }

//     default: {
//       return state;
//     }
//   }
// };
// const testreducer = (state = [], action) => {
//     switch (action.type) {
//       case "push": {
//         const data=[...state];
//         data.push(action.value);
//         return [...data];        
//       }
  
//       case 'pop': {
//          const data=[...state];
//          data.pop();
//         return [...data];
//       }
  
//       default: {
//         return state;
//       }
//     }
//   };

// const rootReducer=(state={},action)=>{
//    return{
//     counter:countreducer(state.counter,action),
//     tester: testreducer (state.tester,action)

//    } }
// // store
// const store = redux.createStore(rootReducer);
// // store.dispatch({type:COUNTER_INCREAMENT});

// export default store;

