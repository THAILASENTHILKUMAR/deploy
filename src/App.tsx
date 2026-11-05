import { useState } from "react";
import "./App.css";

function App() {
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="app">
      <header>
        <h1>College Event Management</h1>
        <p>Connect • Participate • Celebrate</p>
      </header>

      <nav>
        <a href="#events">Events</a>
        <a href="#register">Registration</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section id="events">
          <h2>Upcoming Events</h2>

          <div className="events">
            <div className="card">
              <h3>Tech Fest 2026</h3>
              <p>Date: 15 November 2026</p>
              <p>Venue: College Auditorium</p>
            </div>

            <div className="card">
              <h3>Cyber Security Workshop</h3>
              <p>Date: 20 November 2026</p>
              <p>Venue: Seminar Hall</p>
            </div>

            <div className="card">
              <h3>Sports Meet</h3>
              <p>Date: 25 November 2026</p>
              <p>Venue: College Ground</p>
            </div>
          </div>
        </section>

        <section id="register">
          <h2>Event Registration</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Student Name" required />
            <input type="email" placeholder="Email" required />

            <select required>
              <option value="">Select Event</option>
              <option>Tech Fest 2026</option>
              <option>Cyber Security Workshop</option>
              <option>Sports Meet</option>
            </select>

            <button type="submit">Register</button>
          </form>

          {registered && (
            <p className="success">Registration successful!</p>
          )}
        </section>

        <section id="contact">
          <h2>Contact Information</h2>
          <p>Email: events@college.edu</p>
          <p>Phone: +91 98765 43210</p>
          <p>College Campus, Coimbatore</p>
        </section>
      </main>

      <footer>
        <p>© 2026 College Event Management</p>
      </footer>
    </div>
  );
}

export default App;