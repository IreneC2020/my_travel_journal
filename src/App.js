import Navbar from "./components/Navbar";
import data from "./components/data";
import Card from "./components/Card";

export default function App() {
  const cards = data.map(item =>{
    return(
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar/>
      <section className="cards">
        {cards}
      </section>
    </div>
  )
}

 