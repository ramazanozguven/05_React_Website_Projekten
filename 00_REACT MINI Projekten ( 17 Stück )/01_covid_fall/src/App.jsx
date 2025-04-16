import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [veri, setVeri] = useState();
  const [tarih, setTarih] = useState("2021-01-01");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setVeri(res.data[tarih]))
      .catch((err) => console.log(err));
  }, [veri, tarih]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h3 className="text-center text-white display-4">
              Covid 19 Suchmaschine
            </h3>

            <input
              type="text"
              placeholder="Datum im Format DD/MM/YYY eingeben..."
              className="form-control"
              onChange={(e) => setTarih(e.target.value)}
            />
            <table className="table mt-2">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Anzahl der Tests</th>
                  <th scope="col">Anzahl der Patienten</th>
                  <th scope="col">Anzahl der Todesfälle</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th
                    scope="row"
                    className={veri === undefined ? "bg-danger" : "bg-success"}
                  >
                    1
                  </th>
                  <td
                    className={veri === undefined ? "bg-danger" : "bg-success"}
                  >
                    {veri === undefined ? "Daten erwartet..." : veri.totalTests}
                  </td>
                  <td
                    className={veri === undefined ? "bg-danger" : "bg-success"}
                  >
                    {veri === undefined ? "Daten erwartet..." : veri.patients}
                  </td>
                  <td
                    className={veri === undefined ? "bg-danger" : "bg-success"}
                  >
                    {veri === undefined ? "Daten erwartet..." : veri.deaths}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-white">
              HINWEIS: Um die tägliche Zahl der Covid 19-Fälle zu sehen, geben
              Sie bitte das korrekte Datumsformat ein, z. B. 20/10/2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
