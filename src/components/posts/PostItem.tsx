import React from "react";
import { Link } from "react-router-dom";

interface PostItemProps {
    title: string;
    id: number;
}

const PostItem: React.FC<PostItemProps> = ({ title, id }) => {
    return (
        <li>
            <Link to={`/${id}`}>
                {title}
            </Link>
        </li>
    );
};

export default PostItem;