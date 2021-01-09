import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const SelectBox = ({
    searchLabel,
    value,
    handleChange,
    options
}) => {
    const menuItems = () => {
      const menuOptions = options.map(item => {
        return (<MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>)
      });
      return menuOptions;
    }
    return (
      <>  
        <InputLabel>{searchLabel}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
        >
          {menuItems()}
        </Select>
      </>  
    )
}

export default SelectBox