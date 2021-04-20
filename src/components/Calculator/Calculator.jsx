import "./Calculator.css";

import React from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import buttons from "../Button/buttons";
import DisplayContext from "../../context/DisplayContext";
import ButtonContext from "../../context/ButtonContext";

const Calculator = () => {
  return (
    <div className="calculator">
      <DisplayContext.Consumer>
        {({ formula, result }) => <Display formula={formula} result={result} />}
      </DisplayContext.Consumer>
      <div className="math">
        <ButtonContext.Consumer>
          {(handleButtonClick) =>
            buttons.map((button, index) => (
              <Button
                key={index}
                id={button.id}
                label={button.label}
                className={button.className}
                handleClick={(e) => handleButtonClick(button)}
              />
            ))
          }
        </ButtonContext.Consumer>
      </div>
    </div>
  );
};

export default Calculator;
