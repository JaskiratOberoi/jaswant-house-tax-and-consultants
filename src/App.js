import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import StaticCounter from "./components/StaticCounter/StaticCounter";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <StaticCounter Limit={50} /> */}
    </div>
  );
}

export default App;
