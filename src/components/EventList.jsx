import EventCard from "./EventCard";

// Props: "events" is an array of event objects
function EventList({ events }) {
  return (
    <div className="card-grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
