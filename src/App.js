import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Portfolioexp from './components/Portfolioexp';
import Contact from './components/Contact';

function App() {
  return (
    <div className="mb-10 bg-slate-50">
      <div className="max-w-[25rem] md:max-w-[42rem] lg:max-w-[84rem] mx-auto">
        <Header />
        <Main />
        <Portfolioexp/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
