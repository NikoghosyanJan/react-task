import {redirect, useParams} from "react-router-dom";
import {useApi} from "../hooks/useApi";
import {POSTS, USERS} from "../api/endpoints";
import Loader from "../components/shared/Loader";
import PostSummary from "../components/posts/PostSummary";
import PostAuthor from "../components/posts/PostAuthor";
import PostComments from "../components/posts/PostComments";

export default function Post() {
    const params = useParams();
    const {data, isLoading, isError} = useApi(POSTS + "/" + params.id);
    const {data: comments} = useApi(POSTS + "/" + params.id + "/comments");
    const {data: user} = useApi(data ? USERS + "/" + data.userId : "");

    if (isLoading || !data) {
        return <Loader/>;
    }

    if (isError) {
        redirect("/error");
    }

    return (
        <main className="post-page page-main">
            {user && <PostAuthor
                name={user.name}
                username={user.username}
                commentsLenght={comments?.length || 0}
            />}
            {data && <PostSummary
                title={data.title}
                body={data.body}
            />}
            {comments && <PostComments
                comments={comments}
            />}
        </main>
    )
}