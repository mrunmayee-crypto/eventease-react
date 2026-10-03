import { Link } from "react-router-dom";
import EventList from "../components/EventList";
import events from "../data/events";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();
  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Manage. Discover. Experience.</h1>
          <p>
            EventEase is a simple event managing and ticketing system. Explore
            upcoming events, book your tickets in seconds and enjoy hassle-free
            entry to the best tech, business and entertainment events.
          </p>

          <div className="hero-buttons">
            {user ? (
              <Link to="/dashboard" className="btn btn-light">Go to Dashboard</Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-light">Register Now</Link>
                <Link to="/login" className="btn btn-ghost">Login</Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <EventList events={upcomingEvents} />
        </div>
      </section>
    </>
  );
}

export default Home;
