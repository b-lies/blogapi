import React, {useEffect, useState} from "react";
import axiosInstance from "./Axios";
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

export default function BlogData() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
    return(
        <div className="postData">
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    )
}