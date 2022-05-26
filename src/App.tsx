import React from "react";
import data from "./data/data.json";
import Card from "./components/Card";
import Attribution from "./components/Attribution";

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
      <Attribution/>
    </div>
  );
};

export default App;
