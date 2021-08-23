import axios from "axios";
import config from "../../config";

function getPostsApi() {
    return axios.get(`${config.url}${config.productsEndpoint}`);
}

function getBlogApi(id) {
    return axios.get(`${config.url}${config.productsEndpoint}/${id}`);
}

function getCommentsApi(postId) {
    return axios.get(`${config.url}${config.commentsEndpoint}`, {params: { postId }});
}

export {getPostsApi, getCommentsApi, getBlogApi};