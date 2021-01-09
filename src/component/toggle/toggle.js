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

export default Toogle;