const Pizza = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("p", {}, props.description),
    ]),
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni",

      description: "Pepperoni, cheese, tomato sauce",
    }),

    React.createElement(Pizza, {
      name: "Margherita",
      description: "Tomato sauce, cheese, basil",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Ham, pineapple, cheese, tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Vegetarian",
      description: "Mushrooms, peppers, onions, olives, cheese, tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Meat Lovers",
      description: "Pepperoni, sausage, bacon, ham, cheese, tomato sauce",
    }),
    React.createElement(Pizza),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
