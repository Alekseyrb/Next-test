'use client'

import {useEffect, useState} from "react";
import {getPost} from "@/services/getPosts";

export default function Home() {
  const [page, setPage] = useState('');

  useEffect(() => {
    getPost().then(res => setPage(res.title))
  }, []);

  return (
    <>
      <h1>Welcome to Next Js</h1>
      {page}
    </>
  );
}
