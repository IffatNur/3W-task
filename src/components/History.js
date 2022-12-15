import React, { useState } from 'react';
import Table from "react-bootstrap/Table";

const History = () => {
    const [history, setHistory] = useState(true);
    const handleETHHistory = () => {
      setHistory(true);
    };
    const handleTestLinkHistory = () => {
      setHistory(false);
    };
    return (
      <div className='mt-3'>
        <p>
          <b>Request History</b>
        </p>
        <div className="d-flex gap-3">
          <button
            type="submit"
            onClick={handleETHHistory}
            className="btn btn-primary rounded-0"
          >
            ETH Transaction History
          </button>
          <button
            type="submit"
            onClick={handleTestLinkHistory}
            className="btn btn-primary rounded-0"
          >
            TestLink Transaction History
          </button>
        </div>
        {history === true ? (
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
        ) : (
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
                <td>08:30 AM</td>
                <td>748</td>
                <td>7s7effkeurusue4</td>
              </tr>
              <tr>
                <td>2 </td>
                <td>10:23 AM</td>
                <td>974</td>
                <td>sfe7r7sr4fer</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11:10 AM</td>
                <td>874</td>
                <td>s4e7s8er</td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
    );
};

export default History;