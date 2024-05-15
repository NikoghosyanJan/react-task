import React from "react";

interface PostSummaryProps {
    title: string;
    body: string;
}

const PostSummary: React.FC<PostSummaryProps> = ({ title, body }) => {

    return (
        <div className="post-summary border-b">
            <h1 className="title">{title}</h1>
            <h2 className="description">{body}</h2>
        </div>
    )
}

export default PostSummary;