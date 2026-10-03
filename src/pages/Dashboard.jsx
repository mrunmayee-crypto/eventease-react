import EventList from "../components/EventList";
import events from "../data/events";
import { useAuth } from "../context/AuthContext";

// This page is wrapped in <ProtectedRoute> in App.jsx
function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <section className="dashboard-hero">
        <div className="container">
          <p className="dashboard-badge">Login Successful</p>
          <h1>Welcome, {user.name}!</h1>
          <p>You are signed in to the EventEase dashboard.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="user-info">
            <h3>Your Demo Session</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p className="small-note">
              Saved in localStorage as "eventease_demo_session". Clicking Logout
              removes it.
            </p>
          </div>

          <h2 className="section-title">All Upcoming Events</h2>
          <EventList events={events} />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
