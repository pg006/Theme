import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Current = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div>
      <Form.Group>
        <Form.Label>Current Password</Form.Label>
        <InputGroup
          className="wrap-input100 validate-input"
          id="Password-toggle"
        >
          <InputGroup.Text
            id="basic-addon2"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="bg-white text-muted"
          >
            <Link to="#">
              <i
                className={`zmdi ${
                  showPassword ? "zmdi-eye" : "zmdi-eye-off"
                } text-default`}
                aria-hidden="true"
              ></i>
            </Link>
          </InputGroup.Text>
          <Form.Control
            className="input100"
            type={showPassword ? "text" : "password"}
            placeholder="Current Password"
          />
        </InputGroup>
        {/* <!-- <input type="password" className="form-control" value="password"> --> */}
      </Form.Group>
    </div>
  );
};
