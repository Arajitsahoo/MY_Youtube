import React from "react";
import Comment from "./Comment";
import { COMMENT_DATA } from "../utils/constants";

const CommentLIst = ({ data }) => {
    // console.log(data);
  return (
    <div className="m-3 cursor-pointer ">
      {data.map((c, index) => (
        
          <div key={index} className="m-2">
            <Comment comments={c} />
            {c.replies && c.replies.length > 0 && (
            <div className="ml-10 border-l border-black">
              <CommentLIst data={c.replies} />
            </div>
          )}
          </div>
        )
      )}
    </div>
  );
};

export default CommentLIst;
