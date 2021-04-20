import "./App.css";
import React, { Component } from "react";
import Calculator from "./components/Calculator/Calculator";
import DisplayContext from "./context/DisplayContext";
import ButtonContext from "./context/ButtonContext";
import {
  isNumber,
  isOperator,
  isDecimal,
  isEquals,
  isAllClear
} from "./components/Button/buttons";

class App extends Component {
  state = {
    formula: "",
    result: "0",
    lastInput: ""
  };

  handleButtonClick = (button) => {
    const { id, label } = button;

    const newDisplayState = this.getDisplayState(id, label);

    if (newDisplayState === null) {
      return;
    }

    this.setState({
      ...newDisplayState,
      lastInput: id
    });
  };

  getDisplayState = (id, label) => {
    if (isNumber(id)) {
      return this.number(label);
    }

    if (isOperator(id)) {
      return this.operator(id, label);
    }

    if (isAllClear(id)) {
      return this.allClear();
    }

    if (isDecimal(id)) {
      return this.decimal(label);
    }

    if (isEquals(id)) {
      return this.equals();
    }
  };

  number = (label) => {
    const { formula, result, lastInput } = this.state;
    let newFormula;

    newFormula = result === "0" ? label : formula + label;

    let newResult =
      isOperator(lastInput) || result === "0" ? label : result + label;

    if (isEquals(lastInput)) {
      newFormula = label;
      newResult = label;
    }

    return {
      formula: newFormula,
      result: newResult
    };
  };

  decimal = (label) => {
    const { formula, result, lastInput } = this.state;

    if (result.includes(label)) {
      return null;
    }

    let newFormula;

    if (isNumber(lastInput)) {
      newFormula = formula + label;
    } else if (isOperator(lastInput)) {
      newFormula = formula + "0" + label;
    } else {
      newFormula = "0" + label;
    }

    const newResult = isNumber(lastInput) ? result + label : "0" + label;

    return {
      formula: newFormula,
      result: newResult
    };
  };

  operator = (id, label) => {
    const { formula, result, lastInput } = this.state;

    let newFormula;

    if (isEquals(lastInput)) {
      newFormula = result + label;
    } else if (isOperator(lastInput)) {
      const lastOperators = formula.match(/[/*+-]+$/)[0];

      if (id === "subtract") {
        newFormula = lastOperators.length < 2 ? formula + label : formula;
      } else {
        newFormula = formula.replace(lastOperators, "") + label;
      }
    } else {
      newFormula = formula + label;
    }

    const newResult = label;

    return {
      formula: newFormula,
      result: newResult
    };
  };

  allClear = () => ({ formula: "", result: "0" });

  equals = () => {
    const { formula, lastInput } = this.state;

    if (isEquals(lastInput) || isOperator(lastInput) || !formula) {
      return null;
    }

    let newFormula;
    let newResult;

    try {
      // eslint-disable-next-line no-eval
      newResult = eval(formula);
      newFormula = formula + "=" + newResult;
    } catch {
      console.log("Formula eval not successful");
      return null;
    }

    if (typeof newResult === "number") {
      newResult = newResult.toString();
    }

    return {
      formula: newFormula,
      result: newResult
    };
  };

  render() {
    return (
      <div className="App">
        <DisplayContext.Provider value={this.state}>
          <ButtonContext.Provider value={this.handleButtonClick}>
            <Calculator />
          </ButtonContext.Provider>
        </DisplayContext.Provider>
      </div>
    );
  }
}

export default App;
