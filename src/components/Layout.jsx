import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-left" autoClose={2000} />
    </div>
  );
};
