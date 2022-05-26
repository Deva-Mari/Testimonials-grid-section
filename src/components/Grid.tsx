import data from "../data/data.json";
import Card from "./Card";
import styles from "../css/Grid.module.css";

const Grid = () =>{
    return(<main className={styles.grid}>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              picture={item.picture}
              function={item.function}
              blurb={item.blurb}
              quote={item.quote}
              background={item.background}
            />
          );
        })}
      </main>)
}

export default Grid;