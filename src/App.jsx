import React from "react";
import Routes from "./Routes";
import { Toaster } from 'react-hot-toast';

function App() {
const toastTheme = {
  duration: 3000,
  style: {
    background: '#fff',
    color: '#EC7E2E',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: 500,
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
  },
  success: {
    style: {
      background: '#F0FFF4',
      color: '#38A169',
    },
    iconTheme: {
      primary: '#38A169',
      secondary: '#fff',
    },
  },
  error: {
    style: {
      background: '#FFF5F5',
      color: '#E53E3E',
    },
    iconTheme: {
      primary: '#E53E3E',
      secondary: '#fff',
    },
  },
  loading: {
    style: {
      background: '#EBF8FF',
      color: '#3182CE',
    },
    iconTheme: {
      primary: '#3182CE',
      secondary: '#fff',
    },
  },
};

  return (
    <>
      <Routes />
      <Toaster position="bottom-right" toastOptions={toastTheme} />
    </>
  );
}

export default App;
