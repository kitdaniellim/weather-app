import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  const history = useHistory();
  const routeChange = () => {
    const path = props.to;
    history.push(path);
  };

  return (
    <div className="mx-2">
      <Button
        variant="outline-primary"
        onClick={props.onClick ? props.onClick : routeChange}
      >
        <h4 className="m-0">{props.label}</h4>
      </Button>
    </div>
  );
};

export default CustomButton;
