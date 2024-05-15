import React from "react";

interface PostCommentsProps {
    comments: {
        name: string;
        body: string;
        email: string;
        id: number
    }[];
}

const PostComments: React.FC<PostCommentsProps> = ({comments}) => {

    return(
        <ul id="comments" className="post-comments">
            {comments.map(item => (
                <li key={item.id}>
                    <div className="comment-name flex items-center gap-10">
                        <strong>{item.email}: </strong>
                        <span>{item.name}</span>
                    </div>
                    <p>{item.body}</p>
                </li>
            ))}
        </ul>
    )
}

export default PostComments;