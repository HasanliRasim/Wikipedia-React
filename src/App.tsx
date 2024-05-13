import WikipediaHeader from "./components/WikipediaHeader";
import WikipediaMain from "./components/WikipediaMain";
import WikipediaFooter from "./components/WikipediaFooter";

const App = () => {
  return (
    <div>
        <div>
      <WikipediaHeader/>
    </div>
    <div>
    <WikipediaMain/>
  </div>
  <div>
  <WikipediaFooter/>
  </div>
    </div>
  );
}

export default App;