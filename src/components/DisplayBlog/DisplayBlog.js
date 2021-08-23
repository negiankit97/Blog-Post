import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ProductCard from "../ProductCard"
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: theme.spacing(15, 2),
    },
    mssg: {
        height: "100%",
        paddingTop: theme.spacing(6)
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        width: "100%",
        height: "100%"
    }
}));

function renderMssg(isActiveSearch, filteredBlogs) {
    if (isActiveSearch && !filteredBlogs.length) return <Typography style={{textAlign: "center"}} variant="h5">No blogs found for the above search.</Typography>
}

const DisplayBlog = ({ blogs, filter }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {renderMssg(filter, blogs)}
            {!!blogs.length && (<Grid container spacing={2}>
                <Paper className={classes.paper} variant="outlined" elevation={0}>
                    <Grid container item xs={12} spacing={3}>
                        {
                            blogs.map((blog) => <ProductCard key={blog.id} {...blog} />)
                        }
                    </Grid>
                </Paper>
            </Grid>
            )}
        </div>
    )
}

export default DisplayBlog;