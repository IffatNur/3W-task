import React from "react";
import History from "./History";

const Form = () => {
  return (
    <div className="bg-white p-5 ms-5 me-5 mb-5">
      <form className="w-50">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Wallet Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Wallet Address..."
          />
        </div>
        <fieldset disabled>
          <div className="mb-3 ">
            <label for="disabledTextInput" class="form-label">
              Request Type
            </label>
            <div className="d-flex gap-3">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
                value="20 Test Link"
              />
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
                value="0.5 ETH"
              />
            </div>
          </div>
          <div className="mb-3 w-50"></div>
        </fieldset>
        <button type="submit" className="btn btn-primary rounded-0">
          Send Request
        </button>
        <History></History>
      </form>
    </div>
  );
};

export default Form;
