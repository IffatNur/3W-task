import React from 'react';
import Table from "react-bootstrap/Table";

const History = () => {
    return (
      <div>
        <p>Request History</p>
        <div className="d-flex gap-3">
          <button type="submit" className="btn btn-primary rounded-0">
            ETH Transaction History
          </button>
          <button type="submit" className="btn btn-primary rounded-0">
            TestLink Transaction History
          </button>
        </div>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Hash</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12:30 AM</td>
              <td> 487</td>
              <td>4s8er5s5fe57rjmxnfuewrurks</td>
            </tr>
            <tr>
              <td>2 </td>
              <td>10:30 AM </td>
              <td>875 </td>
              <td>sf7s7ers4e7r7wser</td>
            </tr>
            <tr>
              <td>3</td>
              <td> 11:30 AM </td>
              <td>797 </td>
              <td>se4s7er7</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
};

export default History;