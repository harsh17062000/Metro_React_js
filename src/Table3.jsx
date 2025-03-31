import axios from "axios";
import { useEffect, useState } from "react";

const Table3 = () => {
  let [train, setTrain] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/yellow").then((res) => {
      setTrain(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <table
          style={{
            width: "100%",
            color: "white",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>S.NO</th>
              <th style={{ textAlign: "center" }}>Train Number</th>
              <th style={{ textAlign: "center" }}>Stations</th>
            </tr>
          </thead>
          <tbody>
            {train.map((e) => (
              <tr key={e.id}>
                <td style={{ textAlign: "center" }}>{e.id}</td>
                <td style={{ textAlign: "center" }}>{e.train}</td>
                <td style={{ textAlign: "center" }}>{e.station}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table3;
