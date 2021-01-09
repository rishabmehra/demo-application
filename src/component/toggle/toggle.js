import React from "react";
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';

const Toogle = ({
    checked,
    handleChange
}) => {
    return (
        <Switch
            checked={checked}
            onChange={handleChange}
        />
    )
}

Toogle.propTypes = {
    checked: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
}

export default Toogle;