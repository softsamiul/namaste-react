// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Namaste React from external react"
//   );
const parent = React.createElement(
    "h1",
    {id: "parent"},
    [
        React.createElement("div", {id: "child"}, React.createElement('h1', {id: "heading"}, "I'm h1 heading inside nested sections")),
        React.createElement("div", {id: "child2"}, React.createElement('h1', {id: "heading2"}, "I'm h1 heading inside nested 2 sections"))
    ]
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(parent);