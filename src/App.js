import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolioexp from "./components/Portfolioexp";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Competences from "./components/Competences";

function App() {
  return (
    <div className="mb-10 bg-slate-50">
      <div className="max-w-[18rem] sm:max-w-[25rem] md:max-w-[42rem] lg:max-w-[60rem] xl:max-w-[76rem] mx-auto">
        <Header />
        <Main />
        <Competences />
        <Portfolioexp />
        <Contact />
      </div>
    </div>
  );
}

export default App;
