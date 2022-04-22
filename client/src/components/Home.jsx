import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SortAndFilterButtons } from "./SortAndFilter";
import "./Home.css"
function Home() {
  
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/entities").then((res) => {
      setData(res.data);
      console.log(res.data);

    })
   .catch((err)=>{
     console.log(err)
   })
  };
 

  // sort by cost;
  const [filterSort, setFilter] = useState({
    parameter: "",
    value: null,
  });
  const handleSort = (parameter, value) => {
    setFilter({ parameter, value });
    // console.log(filterSort);
  };
  
  return (
    <div>
        
      <h1 style={{ textAlign: "center" }}><i>Wiggle Bubble Pets Services</i></h1>
      <SortAndFilterButtons handleSort={handleSort} />
     <br></br>
         
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Capacity</th>
            <th>Cost/day</th>
            <th>Verified</th>
            <th>Rating</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          { data
            .sort((a, b) => {
              if (filterSort.parameter == "City" && filterSort.value == 1) {
                return a["City"].localeCompare(b["City"]);
              } else if (
                filterSort.parameter == "City" &&
                filterSort.value == -1
              ) {
                return b["City"].localeCompare(a["City"]);
              } else if (
                filterSort.parameter == "Cost_per_day" &&
                filterSort.value == 1
              ) {
                return a["Cost_per_day"] - b["Cost_per_day"];
              } else if (
                filterSort.parameter == "Cost_per_day" &&
                filterSort.value == -1
              ) {
                return b["Cost_per_day"] - a["Cost_per_day"];
              }
              else if (
                filterSort.parameter == "Rating" &&
                filterSort.value == 1
              ) {
                return a["Rating"] - b["Rating"];
              }
              else if (
                filterSort.parameter == "Rating" &&
                filterSort.value == -1
              ) {
                return b["Rating"] - a["Rating"];
              }
            }).map((e, index) => {
            return (
              <tr key={e.id} className="entity">
                <td className="id">{e.id}</td>
                <td className="name">{e.Name} </td>
                <td className="city">{e.City}</td>
                <td className="address">{e.Address}</td>
                <td className="capacity">{e.Capacity}</td>
                <td className="cost">{e.Cost_per_day}</td>
                <td className="verified">{e.Verified}</td>
                <td className="houseImage">{e.Rating}</td>
                <td
                  onClick={() => {
                    navigate(`/listing/${e.id}`);
                  }}
                >
                  {"Click"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
