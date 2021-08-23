import store from "../../store";

const filteredPosts = (search) => {
    const { blogs } = store.getState();
    if(!!search) {
        return blogs.filter(blog => blog.title === search); 
    }
}

export {filteredPosts};