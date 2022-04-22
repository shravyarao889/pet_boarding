import { useState } from "react";
import axios from "axios";
export const CreateEntity = () => {
    const [type, setType ] = useState([])
  const [entity, setEntity] = useState({
    Name: "",
    City: "",
    Address: "",
    Capacity: "",
    Cost_per_day: "",
    Verified: "",
    Rating: "",
    Type: "",
    Weight: "",
    Roaming_Place: "",
    Sleeping_Place: "",
    Potty_Breaks: "",
    Walks_per_day: "",
    Home_Type: "",
    Area_Size: "",
    Emergency_Transport: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(entity);
    axios.post("http://localhost:8080/entities", entity).then((res) => {
      alert("data added successfully");
    });
  }
  function handleChange(e) {
    const { id, value } = e.target;
    setEntity({ ...entity, [id]: value });
  }
  const handleCheck = (e) => {
    
    const {id, checked, value} = e.target;
    
    if( checked== true){
        setType({...type, value})
        setEntity({...entity, [id]: value})
        console.log(entity)
    }
    // if(value=="Cats" && checked== true){
    //     setEntity({...entity, [id]: value})
    //     console.log(entity)
    // }
    // if( value=="Rabbits" && checked== true){
    //     setEntity({...entity, [id]: value})
    //     console.log(entity)
    // }
 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Your Pet Boarding</h1>
        <label>Name</label>
        <input
          type="text"
          className="name"
          id="Name"
          onChange={handleChange}
        ></input>
        <label>City</label>
        <input
          type="text"
          className="city"
          id="City"
          onChange={handleChange}
        ></input>
        <label>Address</label>
        <input
          type="text"
          className="address"
          id="Address"
          onChange={handleChange}
        ></input>
        <label>Capacity</label>
        <input
          type="number"
          className="capacity"
          id="Capacity"
          onChange={handleChange}
        ></input>
        <label>Cost per day</label>
        <input
          type="number"
          className="cost"
          id="Cost_per_day"
          onChange={handleChange}
        ></input>
        <label>Verified</label>
        <select className="verified" id="Verified" onChange={handleChange}>
          <option value=""></option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <br></br>
        <label>Rating</label>
        <input
          type="number"
          id="Rating"
          placeholder="rate out of 5"
          onChange={handleChange}
        ></input>
        <label>Type</label>

        <input type="checkbox" id="Type" name="Dogs" value="Dogs"  onChange={handleCheck}/>
        <label>Dogs</label>
        <input type="checkbox" id="Type" name="Cats" value="Cats" onChange={handleCheck} />
        <label>Cats</label>
        <input type="checkbox" id="Type" name="Rabbits" value="Rabbits" onChange={handleCheck} />
        <label>Rabbits</label>
        <br></br>

        <label>Weight</label>
        <select className="weight" id="Weight" onChange={handleChange}>
          <option value=""></option>
          <option value="1-5kg">1-5KG</option>
          <option value="5-10kg">5-10KG</option>
          <option value="10-20kg">10-20KG</option>
          <option value="20-40kg">20-40KG</option>
          <option value="40+kg">40+ KG</option>
        </select>
        <br></br>
        <label>Roaming Place</label>
        <input type="text" id="Roaming_Place" onChange={handleChange}></input>
        <br></br>
        <label>Sleeping Place</label>
        <input type="text" id="Sleeping_Place" onChange={handleChange}></input>
        <br></br>
        <label>Potty Breaks</label>
        <input type="number" id="Potty_Breaks" onChange={handleChange}></input>
        <br></br>
        <label>Walks per day</label>
        <input type="number" id="Walks_per_day" onChange={handleChange}></input>
        <br></br>
        <label>Home Type</label>
        <input type="text" id="Home_Type" onChange={handleChange}></input>
        <label>Area Size</label>
        <select className="area" id="Area_Size" onChange={handleChange}>
          <option value=""></option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          </select>
          <label>Emergency Transport</label>
          <select className="emergency" id="Emergency_Transport" onChange={handleChange}>
          <option value=""></option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        <br></br>
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
