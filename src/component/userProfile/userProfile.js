import React from "react";
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './userprofile.css';

const UserProfile = ({
    id,
    firstName,
    lastName,
    email,
    contactInfo,
    handleDelete,
    handleEdit,        
}) => {
    return (
        <div className="user-profile">
        <Card className="card">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {firstName} {lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {email}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                   {contactInfo}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => handleEdit(id) }>Edit</Button>
                <Button size="small" color="primary" onClick={() => handleDelete(id) }>Delete</Button>
            </CardActions>
        </Card>
        </div>
    )
}

UserProfile.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    contactInfo: PropTypes.string,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
}

export default UserProfile