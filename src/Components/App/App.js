import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Search from '../Search/Search';
import { ReactComponent as Logo } from '../Header/logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/" element={<Logo />} />
//           <Route path="/search/:subreddit" element={<Search />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Logo />} />
        <Route path="/search/:subreddit" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
