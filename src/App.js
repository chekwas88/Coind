import React, {Fragment} from 'react';
import Table from './components/Table';
import TableHeader from './components/TableHead';
import TableBody from './components/TableBody';
import TablePopOverMenu from './components/TableMenu';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <TablePopOverMenu /> */}
      <Table>
        <TableHeader>
          <th>Coin</th>
          <th>Price</th>
          <th>Volume</th>
          <th>Supply</th>
        </TableHeader>
        <TableBody>
          <tr>
            <td>Bitcoin</td>
            <td>100</td>
            <td>10000</td>
            <td>1230000000000</td>
          </tr>
          <tr>
            <td>Bitcoin</td>
            <td>100</td>
            <td>10000</td>
            <td>1230000000000</td>
          </tr>
          <tr>
            <td>Bitcoin</td>
            <td>100</td>
            <td>10000</td>
            <td>1230000000000</td>
          </tr>
          <tr>
            <td>Bitcoin</td>
            <td>100</td>
            <td>10000</td>
            <td>1230000000000</td>
          </tr>
          <tr>
            <td>Bitcoin</td>
            <td>100</td>
            <td>10000</td>
            <td>1230000000000</td>
          </tr>
        </TableBody>
      </Table>
    </div>
    </Router>
  );
}

export default App;
