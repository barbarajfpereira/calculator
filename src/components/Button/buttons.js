const buttons = [
  {
    id: "clear",
    label: "AC",
    className: "clear"
  },
  {
    id: "divide",
    label: "/",
    className: "operator"
  },
  {
    id: "multiply",
    label: "*",
    className: "operator"
  },
  {
    id: "seven",
    label: "7"
  },
  {
    id: "eight",
    label: "8"
  },
  {
    id: "nine",
    label: "9"
  },
  {
    id: "subtract",
    label: "-",
    className: "operator"
  },
  {
    id: "four",
    label: "4"
  },
  {
    id: "five",
    label: "5"
  },
  {
    id: "six",
    label: "6"
  },
  {
    id: "add",
    label: "+",
    className: "operator"
  },
  {
    id: "one",
    label: "1"
  },
  {
    id: "two",
    label: "2"
  },
  {
    id: "three",
    label: "3"
  },
  {
    id: "zero",
    label: "0",
    className: "zero"
  },
  {
    id: "decimal",
    label: "."
  },
  {
    id: "equals",
    label: "=",
    className: "equal"
  }
];

const isNumber = (id) => {
  const numberIds = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];

  return numberIds.includes(id);
};

const isOperator = (id) => {
  const operatorIds = ["add", "subtract", "divide", "multiply"];
  return operatorIds.includes(id);
};

const isDecimal = (id) => id === "decimal";

const isEquals = (id) => id === "equals";

const isAllClear = (id) => id === "clear";

export default buttons;

export { isNumber, isOperator, isDecimal, isEquals, isAllClear };
