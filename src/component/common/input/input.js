import TextField from '@material-ui/core/TextField';

const Input = ({
    label,
    value,
    onChangeHandler
}) => {
    return (
        <TextField
         label={label}
         value={value}
         onChange={onChangeHandler}
        />
    )
}

export default Input