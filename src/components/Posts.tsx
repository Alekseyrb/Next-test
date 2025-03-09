'use client'

import Link from "next/link";
import {usePosts} from "@/store";
import {useEffect} from "react";
import {shallow} from "zustand/shallow";
import useSWR from "swr";
import {getAllPosts} from "@/services/getPosts";

const Posts = () => {
  // const [posts, loading, getAllPosts] = usePosts((state) => [
  //   state.posts,
  //   state.loading,
  //   state.getAllPosts
  // ], shallow);
  //
  // useEffect(() => {
  //   getAllPosts()
  // }, [getAllPosts]);

  const {data: posts, isLoading} = useSWR('posts', getAllPosts)

  return (isLoading ? <h3>Loading...</h3> :
    <ul>
      {posts.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Posts;
