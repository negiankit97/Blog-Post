import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        maxWidth: 500
    }
}))
const Comment = (props) => {
    const classes = useStyles();
    return (
        <Grid container item xs={12}>
            <Paper className={classes.paper} variant="outlined" elevation={0}>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>{props.name}</Typography>
                    <Typography variant="body2" gutterBottom>{props.email}</Typography>
                    <Typography variant="body2" gutterBottom>{props.body}</Typography>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Comment;