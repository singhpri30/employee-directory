import React from 'react';
import './App.css';
import Table from './component/Table';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Table></Table>
    </div>
  );
}

export default App;
