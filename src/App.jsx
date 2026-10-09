import restaurants from "./data/restaurants";
import Card from "./Components/Card";
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Famous Restaurants Cards</h1>
        <p>Your next level favorite meal.</p>
      </header>

      <section className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </main>
  );
}

export default App;
