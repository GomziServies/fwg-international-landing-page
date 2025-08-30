import React from "react";
import Routes from "./Routes";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#EC7E2E',
          },
          success: {
            iconTheme: {
              primary: '#38A169',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#E53E3E',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
}

export default App;
