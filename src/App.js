import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Form from './form';

function App() {
  return (
    <div>
      <ToastContainer />
      <Form />
    </div>
  );
}

export default App;
