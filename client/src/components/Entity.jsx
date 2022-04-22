import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Entity = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = () => {
    axios.get(`http://localhost:8080/entities/${id}`).then((res) => {
      console.log(res.data);
      setDetails({ ...res.data });
    });
  };

  return (
    <>
      <h1>Details Of Our Pet Boarding</h1>
      <table className="table" border="1">
        <thead>
          <th>Type</th>
          <th>Weight</th>
          <th>Roaming_Place</th>
          <th>Sleeping_Place</th>
          <th>Potty_Breaks</th>
          <th>Walks_per_day</th>
          <th>Home_Type</th>
          <th>Area_Size</th>
          <th>Emergency_Transport</th>
        </thead>
         
        <tr>
            <td>{details.Type}</td>
            <td>{details.Weight}</td>
            <td>{details.Roaming_Place}</td>
            <td>{details.Sleeping_Place}</td>
            <td>{details.Potty_Breaks}</td>
            <td>{details.Walks_per_day}</td>
            <td>{details.Home_Type}</td>
            <td>{details.Area_Size}</td>
            <td>{details.Emergency_Transport}</td>
          </tr>
      </table>
     
    </>
  );
};
