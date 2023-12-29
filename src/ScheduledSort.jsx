import { useState } from "react";
import Switch from '@mui/material/Switch';
import './index.css'


function ScheduledSort({listToSort, setList, scheduled}) {
    const [checked, setScheduled] = useState(false);
  
    //console.log(props)
    const handleChange =  () => {

        const isScheduledChecked = (!checked);
        setScheduled(isScheduledChecked);   
        const newList = [...listToSort]


        if (isScheduledChecked){
            newList.sort((a,b) =>{ 
                if(a.scheduled && !b.scheduled) {
                    return -1;
                }else if (!a.scheduled && b.scheduled){
                    return 1;
                }
                
            })
        
        } else if (!isScheduledChecked){
            newList.sort((a,b) => { 
                if(a.scheduled && !b.scheduled) {
                    return 1;
                }else if (!a.scheduled && b.scheduled){
                    return -1;
                }
                
            })
        }
        setList(newList)
       console.log(newList)
      };
    
    
  
    return (
      
        <div className="scheduled-div">
        <h4>Show scheduled
    <Switch
      checked={scheduled}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /></h4>

     </div>
    );
  }
  
  export default ScheduledSort;
  