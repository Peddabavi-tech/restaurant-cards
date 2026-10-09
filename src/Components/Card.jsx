function Card({ restaurant }) {
  return (
    <article className="restaurant-card">
      <img
        className="restaurant-image"
        src={restaurant.image}
        alt={restaurant.name}
      />

      <div className="restaurant-info">
        <div className="restaurant-heading">
          <h2>{restaurant.name}</h2>
          <span className="rating"> {restaurant.rating}/5 </span>
        </div>

        <p className="cuisine">{restaurant.cuisine}</p>

        <p className="description">{restaurant.description}</p>

        <div className="restaurant-footer">
          <span> {restaurant.deliveryTime}</span>
          <span>{restaurant.price}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
