import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import supabase from "./services/client";
import './index.css'
function ControlledCheckbox(props) {
  const [checked, setChecked] = useState(props.scheduled);

  //console.log(props)

  const handleChange = async (event) => {
    setChecked(event.target.checked);

    const { data, error } = await supabase
      .from("creators")
      .update({ scheduled: event.target.checked })
      .eq("id", props.id)
      .select();
  };

  return (
    
    <>
      {checked ? "scheduled" : "not scheduled"}

      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
   
      
    </>
  );
}

export default ControlledCheckbox;
