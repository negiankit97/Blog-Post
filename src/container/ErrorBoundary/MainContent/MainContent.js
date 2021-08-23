import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DisplayBlog from "../../../components/DisplayBlog";
import { fetchBlogs } from "../../../actions";
import { connect } from "react-redux";
import Loader from "../../../components/Loader/Loader";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 2)  
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const MainContent = props => {
    const classes = useStyles();

    const { loading, blogs, fetchBlogs, isActiveSearch, filteredBlogs } = props;

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    if (loading) return <Loader />;

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <DisplayBlog blogs={isActiveSearch ? filteredBlogs : blogs} filter={isActiveSearch}/>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = state => ({
    blogs: state.blogs,
    loading: state.loading,
    comments: state.comments,
    filteredBlogs: state.filteredBlogs,
    isActiveSearch: state.isActiveSearch
})

export default connect(mapDispatchToProps, { fetchBlogs })(MainContent);