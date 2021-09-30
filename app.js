import "./styles.css";
import { useState } from "react";

const stocks = {
  Auto: [
    { name: "TATAELXI", price: "5021" },
    { name: "TataMotors", price: "345" }
  ],
  IT: [
    { name: "HCLTech", price: "1186" },
    { name: "Wipro", price: "654" }
  ],
  PSU: [
    { name: "ONGC", price: "157" },
    { name: "COAL India", price: "189" }
  ]
};

var arr = Object.keys(stocks);

export default function App() {
  const [selectitem, setitem] = useState("Auto");

  function ClickHandler(item) {
    setitem(item);
    // console.log(selectitem)
  }

  return (
    <div className="App">
      <h1> STOCKS TO WATCH </h1>
      <p> Good Selection + Patience = PROFIT !! </p>
      <div>
        {arr.map((item) => (
          <button
            style={{
              margin: "2rem",
              padding: "0.5rem 1.5rem",
              borderRadius: "0.5rem"
            }}
            onClick={() => ClickHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {
            // console.log(artist.Krsna[0].song)
            stocks[selectitem].map(function (Auto) {
              return (
                <li
                  style={{
                    padding: "0.5rem 0.5rem",
                    borderRadius: "0.5rem ",
                    border: "1px solid",
                    listStyle: "none",
                    width: "30%",
                    margin: "auto",
                    marginBottom: "2rem"
                  }}
                >
                  <div> {Auto.name}</div>
                  <div>{Auto.price}</div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}
