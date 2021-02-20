import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>[Mannuel's website]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h1>[Services]</h1>
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>[History]</h1>
    </div>
  );
}

export function NotFound() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Not found {location.pathname}</h1>
      <Link to="/">go to homepage</Link>
    </div>
  );
}
