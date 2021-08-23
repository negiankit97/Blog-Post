import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchBlog } from "../../../actions";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Comment from "../../../components/Comment";
import Loader from "../../../components/Loader/Loader";

const useStyles = makeStyles(theme => ({
    root: {
        width: window.outerWidth,
        height: window.outerHeight,
        padding: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2)
    },
    comment: {
        margin: theme.spacing(2,0)
    }
}));

const Post = (props) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const { id } = useParams();
    const { fetchBlog, comments, loading = true, selectedBlog } = props;
    
    // Side Effect
    useEffect(() => {
        // fetch blog for a particular id
        fetchBlog(parseInt(id));
    }, [fetchBlog, id]);

    // loading
    if (loading) return <Loader />;

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justifyContent="center">
                <Grid container item spacing={2} >
                    {!!selectedBlog && <Typography variant="h5" component="h5">{selectedBlog.title}</Typography>}
                </Grid>
                <Grid container item spacing={2}>
                    <Typography className={classes.comment} variant="button">
                        {!!comments && <Button color="primary" onClick={() => setOpen(true)}>Comment</Button>}
                    </Typography>
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    {
                        open && <Grid container spacing={2}>
                            {!!comments.length && comments.map((comment) => <Comment {...comment} />)}
                        </Grid>
                    }
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({
    selectedBlog: state.selectedBlog,
    comments: state.comments,
    loading: state.loading
});

export default connect(mapStateToProps, { fetchBlog })(Post);