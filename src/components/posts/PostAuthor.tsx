import React from "react";
import {generateAvatarColor} from "../../util/helper";
import CommentSvgIcon from "../../assets/icons/CommentSvgIcon";
import {Link} from "react-router-dom";

interface PostAuthorProps {
    name: string;
    username: string;
    commentsLenght: number;
}

const PostAuthor: React.FC<PostAuthorProps> = ({name, commentsLenght, username}) => {
    const firstLetter = name.substring(0, 1);

    return <>
        <div className="post-author border-b">
            <div className="flex gap-10 mb-10">
                <div
                    style={{backgroundColor: generateAvatarColor(firstLetter)}}
                    className="avatar"
                >{firstLetter}</div>
                <div>
                    <p className="name">{name}</p>
                    <p>@{username}</p>
                </div>
            </div>
        </div>
        <div className="border-b">
            <Link to="#comments" className="flex items-center gap-10 w-fit">
                <CommentSvgIcon/>
                {commentsLenght}
            </Link>
        </div>
    </>
}

export default PostAuthor;