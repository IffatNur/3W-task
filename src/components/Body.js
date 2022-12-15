import React from 'react';
import Form from './Form';
import History from './History';

const Body = () => {
    return (
      <div>
        <div className="w-50 p-5">
          <div>
            <h1>Request testnet LINK</h1>
            <p>
              Get testnet LINK for an account on one of the supported blockchain
              testnets so you can create and test your own oracle and
              Chainlinked smart contract
            </p>
          </div>
        </div>
        <Form></Form>
      </div>
    );
};

export default Body;