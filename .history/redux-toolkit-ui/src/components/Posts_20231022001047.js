import React from "react";
import PostItem from "./PostItem";
import { useDispatch } from "react-redux";
import { getPosts } from "../features/posts/ostSlice";
const Posts = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(getPosts)}
        type="submit"
        className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm"
      >
        Get posts
      </button>
      <PostItem />
    </div>
  );
};

export default Posts;
