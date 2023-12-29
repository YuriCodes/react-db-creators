import { useEffect, useState } from "react";
import './index.css'
import ControlledCheckbox from "./Checked";
import Divider from "@mui/material/Divider";
import ControlledSwitches from "./Filter";
import ScheduledSort from "./ScheduledSort";
import supabase from "./services/client";


function App() {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    const { data } = await supabase
      .from("creators")
      .select("*")
      .order("id", { ascending: false });
    setCreators(data);
  }

  return (
    <div className="main-page-div">
      <h1> Creators DB </h1>
      <ControlledSwitches listToSort={creators} setList={setCreators} />
      <ScheduledSort listToSort={creators} setList={setCreators} scheduled={creators.scheduled}/>

      {creators.map((creator) => (
        <li key={creator.id} id={creator.id}>
          {creator.title}
          <br />
          <a href={creator.url} target="_blank" rel="noreferrer">{creator.url}</a>
          <h5>Date added: <i>{creator.created_at} - Status: </i> 
       
     
             <ControlledCheckbox scheduled={creator.scheduled} id={creator.id} />

            <Divider />
          </h5>
        </li>
      ))}
    </div>
  );
}

export default App;

