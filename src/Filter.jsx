import Switch from '@mui/material/Switch';
import { useState } from 'react';
import './index.css'

export default function ControlledSwitches({listToSort, setList}) {
  const [checked, setChecked] = useState(false);


  const handleChange = () => {

    const isSortedDesc = (!checked);
    setChecked(isSortedDesc);   
    const newList = [...listToSort]
    if (isSortedDesc){
        newList.sort((a,b) => (a.id - b.id))

    } else {
        newList.sort((a,b) => (b.id - a.id))
    }
    setList(newList)
    
  };

  

  return (
    <div className='older-switch'>
        <h4>Show older
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /></h4>

     </div>

  );
}