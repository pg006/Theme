import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Password = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  return (
    <React.Fragment>
      <div>
        <Form.Group>
          <InputGroup
            className="wrap-input100 validate-input"
            id="Password-toggle"
          >
            <InputGroup.Text
              id="basic-addon2"
              onClick={togglePasswordVisibility}
              className="bg-white text-muted"
            >
              <Link to="#">
                <i
                  className={`zmdi ${
                    isPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
                  } text-default`}
                  aria-hidden="true"
                ></i>
              </Link>
            </InputGroup.Text>
            <Form.Control
              className="input100 border-start-0 ms-0"
              type={isPasswordShown ? "text" : "password"}
              placeholder="Password"
            />
          </InputGroup>
        </Form.Group>
      </div>
    </React.Fragment>
  );
};

export default Password;
