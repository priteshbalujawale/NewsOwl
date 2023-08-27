// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import Footer from './Components/Footer';

function App() {
  // process.env.
  const apiKey=process.env.REACT_APP_NEWS_API;
  const pageSize=9;
  const [progress,setProgress]=useState(10)
  const [searchValue,setSearchValue] = useState('');
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  const handleCategoryChange = () => {
    setSearchValue('');
  };
  return (
    <>
    <Router>
    <LoadingBar
        color='red'
        height={5}
        progress={progress}
      />
      <Navbar onSearch={handleSearch} onCategoryChange={handleCategoryChange}/>
      
  <Routes>
          <Route path="/" element={ <News searchValue={searchValue} setProgress={setProgress}  pageSize={pageSize} country={'in'} category={''} key="general" apiKey={apiKey}/>} />
          <Route path="/business" element={ <News searchValue={searchValue} setProgress={setProgress}  pageSize={pageSize} country={'in'} category={'business'} key="business"apiKey={apiKey}/>} />
          <Route path="/sports" element={ <News searchValue={searchValue} setProgress={setProgress}  pageSize={pageSize} country={'in'} category={'sports'} key="sports" apiKey={apiKey}/>} />
          <Route path="/technology" element={ <News searchValue={searchValue} setProgress={setProgress}  pageSize={pageSize} country={'in'} category={'technology'} key="technology" apiKey={apiKey}/>} />
          <Route path="/science" element={ <News searchValue={searchValue} setProgress={setProgress}  pageSize={pageSize} country={'in'} category={'science'} key="science" apiKey={apiKey} />} />
          <Route path="/health" element={ <News searchValue={searchValue} setProgress={setProgress}  pageSize={pageSize} country={'in'} category={'health'} key="health" apiKey={apiKey}/>} />
          <Route path="/entertainment" element={ <News searchValue={searchValue} setProgress={setProgress}  pageSize={pageSize} country={'in'} category={'entertainment'} key="entertainment" apiKey={apiKey}/>} />
          
    </Routes>
    <Footer/>
      </Router>
    </>
  );
}

export default App;
