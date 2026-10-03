// Props: "event" is an object passed from the parent (EventList)
function EventCard({ event }) {
  return (
    <article className="event-card">
      <span className="badge">{event.category}</span>
      <h3>{event.name}</h3>

      <p className="meta"><strong>Date:</strong> {event.date}</p>
      <p className="meta"><strong>Venue:</strong> {event.venue}</p>
      <p className="desc">{event.description}</p>

      <p className="price">
        ₹{event.price} <span>per ticket</span>
      </p>
    </article>
  );
}

export default EventCard;
