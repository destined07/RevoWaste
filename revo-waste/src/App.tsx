import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="rw-app">
      <Header />
      <main className="rw-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
