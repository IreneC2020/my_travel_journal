// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Card from "./components/Card";
// import data from "./components/data";



function App() {
  const cards = data.map(item =>{
    return (
    <Card 
          key={item.id}
          item={item}
    />
    )
})
  return (
    <div className="App">

    </div>
  );
}

export default App;