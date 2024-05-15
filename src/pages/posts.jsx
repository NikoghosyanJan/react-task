import {redirect} from "react-router-dom";
import {useApi} from "../hooks/useApi";
import {POSTS} from "../api/endpoints";
import "../styles/posts.scss";
import PostItem from "../components/posts/PostItem";
import Loader from "../components/shared/Loader";

export default function Posts() {
    const {data, isLoading, isError} = useApi(POSTS);

    if (isLoading || !data) {
        return <Loader/>;
    }

    if (isError) {
        redirect("/error");
    }

    return (
        <main className="posts-page page-main">
            <h1 className="title">Read our latest Posts</h1>
            <ul className="posts-list">
                {data.map(item =>
                    <PostItem
                        key={item.id}
                        title={item.title}
                        id={item.id}
                    />
                )}
            </ul>
        </main>
    )
}