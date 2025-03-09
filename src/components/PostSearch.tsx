'use client'

import React, {useState} from "react";
import {usePosts} from "@/store";
import useSWR from "swr";
import {getPostsBySearch} from "@/services/getPosts";

type Props = {
  onSearch: (value: any[]) => void;
}

const PostSearch = () => {
  const [search, setSearch] = useState('');
  // const getPostsBySearch = usePosts(state => state.getPostsBySearch);
 const {mutate} = useSWR('posts')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = await getPostsBySearch(search);
    setSearch(posts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default PostSearch;
