import { getPostsApi, getBlogApi, getCommentsApi } from "../service/apis";
import { 
    FETCH_BLOG_SUCCESS, 
    FETCH_BLOG_FAILURE, 
    FETCH_BLOGS_SUCCESS, 
    FETCH_BLOGS_FAILURE,
    FILTER_POST_SUCCESS,
    FILTER_POST_FAILURE,
    SET_ACTIVE_SEARCH, 
    LOADING_STATE
} from "../actions/constants";
import { filteredPosts } from "../util/helpers";

// action creator for fetching blogs
const fetchBlogs = () => async (dispatch) => {
    try {
        dispatch({
            type: LOADING_STATE
        });
        const response = await getPostsApi();
        return dispatch({
            type: FETCH_BLOGS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_BLOGS_FAILURE,
            payload: {
                error
            }
        });
    }
}

// action creator for fetching a single blog
const fetchBlog = (id) => async (dispatch) => {
    try {
        dispatch({
            type: LOADING_STATE
        });
        const response = await getBlogApi(id);
        const comments = await getCommentsApi(id);
        
        dispatch({
            type: FETCH_BLOG_SUCCESS,
            payload: {
            selectedBlog: response.data,
            comments: comments.data
            }
        });
    } catch (error) {
        dispatch({
            type: FETCH_BLOG_FAILURE,
            payload: {
                error
            }
        });
    }
}

// action creator for filtering search
const filteredSearch = (search) => async(dispatch) => {
    if(!search) {
        return dispatch({
            type: SET_ACTIVE_SEARCH,
            isActiveSearch: false,
            filteredBlogs: []
        });
    }
    try{
        dispatch({
            type: LOADING_STATE
        });

        const payload = filteredPosts(search);
        dispatch({
            type: FILTER_POST_SUCCESS,
            payload
        });
    }catch(error){
        dispatch({
            type: FILTER_POST_FAILURE,
            payload: error
        });
    }
}

export { fetchBlogs, fetchBlog, filteredSearch }