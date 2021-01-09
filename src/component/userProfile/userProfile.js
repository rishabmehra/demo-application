import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
                <Button size="small" color="primary">Edit</Button>
                <Button size="small" color="primary" onClick={() => handleDelete(id) }>Delete</Button>
            </CardActions>
        </Card>
        </div>
    )
}

export default UserProfile