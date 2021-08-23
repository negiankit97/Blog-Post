import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Fade } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        position: "absolute",
        height: window.outerHeight,
        width: window.outerWidth,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: alpha(theme.palette.common.black, 0.15)
    }
}));

const Loader = () => {
    const classes = useStyles();
    return (
        <Fade in={true} timeout={500}>
            <div className={classes.root}>
                <CircularProgress />
            </div>
        </Fade>
    )
}

export default Loader;