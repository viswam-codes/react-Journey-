
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * <div id=parent>
 * <div id=child>
 * <h1>I am an h1 tag</h1>
 * <h2>I am an h2 tag </h2>
 * </div>
 * </div>
 */
const header = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

/**
 * <div id=parent>
 * <div id=child>
 * <h1>I am an h1 tag</h1>
 * <h2>I am an h2 tag </h2>
 * </div>
 * <div id=child2>
 * <h1>I am an h1 tag</h1>
 * <h2>I am an h2 tag </h2>
 * </div>
 * </div>
 */

const header2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 nested tag"),
    React.createElement("h2", {}, "I am an h2 nested tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header2);
