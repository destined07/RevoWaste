import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/theme.css';
import App from './App';
import Home from './pages/Home';
import Training from './pages/Training';
import ReportDump from './pages/ReportDump';
import Facilities from './pages/Facilities';
import PlateMonitor from './pages/PlateMonitor';
import Attendance from './pages/Attendance';
import Incentives from './pages/Incentives';
import Shop from './pages/Shop';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'training', element: <Training /> },
      { path: 'report', element: <ReportDump /> },
      { path: 'facilities', element: <Facilities /> },
      { path: 'plate-monitor', element: <PlateMonitor /> },
      { path: 'attendance', element: <Attendance /> },
      { path: 'incentives', element: <Incentives /> },
      { path: 'shop', element: <Shop /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
