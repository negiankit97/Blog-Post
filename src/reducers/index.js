import {
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    FETCH_BLOG_FAILURE,
    FETCH_BLOG_SUCCESS,
    FILTER_POST_SUCCESS,
    FILTER_POST_FAILURE,
    SET_ACTIVE_SEARCH,
    LOADING_STATE
} from "../actions/constants";

const initialState = {
    blogs: [],
    comments: null,
    selectedBlog: null,
    loading: false,
    isActiveSearch: false,
    filteredBlogs: null,
    error: {
        isError: false,
        errorMssg: ""
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_STATE:
            return {
                ...state,
                loading: true,
                error: {
                    isError: false,
                    errorMssg: ""
                }
            };
        case SET_ACTIVE_SEARCH:
            return {
                ...state,
                loading: false,
                isActiveSearch: action.isActiveSearch,
                error: {
                    isError: false,
                    errorMssg: ""
                },
                filteredBlogs: action.filteredBlogs
            };
        case FETCH_BLOGS_SUCCESS:
            return {
                ...state,
                blogs: action.payload,
                loading: false,
                error: {
                    isError: false,
                    errorMessage: ""
                },
                isActiveFilter: false
            };
        case FETCH_BLOGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    isError: true,
                    errorMssg: action.payload
                }
            };
            case FILTER_POST_SUCCESS:
            return {
                ...state,
                filteredBlogs: action.payload,
                loading: false,
                error: {
                    isError: false,
                    errorMessage: ""
                },
                isActiveSearch: true
            };
        case FILTER_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    isError: true,
                    errorMssg: action.payload
                }
            };
        case FETCH_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload.comments,
                selectedBlog: action.payload.selectedBlog,
                error: {
                    isError: false,
                    errorMessage: ""
                },
            };
        case FETCH_BLOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    isError: true,
                    errorMssg: action.payload
                }
            };
        default:
            return state;
    }
}

export default reducer;