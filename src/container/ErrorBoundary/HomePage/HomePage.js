import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../../../components/Header/Header";
import MainContent from "../MainContent/MainContent";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(3,0),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    content: {
        paddingTop: theme.spacing(4,0)
    }
}));

const HomePage = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid container item xs={12} spacing={3}>
                    <Header title="Blogs"/>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <MainContent/>
                </Grid>
            </Grid>
        </div>
    )
};

export default HomePage;