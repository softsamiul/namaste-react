import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Dummy title</h1>

const DummyComponent = () => (<div className="container">
    <Title />
    <h1>First Component</h1>
</div>)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<DummyComponent />)