import React from "react";
import data from "./data/data.json";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <div>
      <main>
        {data.map((item) => {
          return (
            <Card
              key={item.name}
              name={item.name}
              picture={item.picture}
              function={item.function}
              blurb={item.blurb}
              quote={item.quote}
              background={item.background}
            />
          );
        })}
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
};

export default App;
