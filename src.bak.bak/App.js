import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Your Employees",
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "E-mail",
            accessor: "show.type"
          },
          {
            Header: "Phone Number",
            accessor: "show.language"
          },
          {
            Header: "Picture",
            accessor: "show.runtime"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/?results=10");
      setData(result.results);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;