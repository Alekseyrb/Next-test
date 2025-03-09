import type {Metadata} from "next";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";


export const metadata: Metadata = {
  title: "Blog | Next App",
};

// const getData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: {
//       revalidate: 0,
//     }
//   });
//
//   if (!response.ok) {
//     throw new Error('Not Found');
//   }
//   return response.json();
// }

const Blog = () => {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch/>
      <Posts/>
    </>
  )
}

export default Blog;


// const Blog = async () => {
//   const posts = await getData();
//
//   return (
//     <>
//       <h1>Blog page</h1>
//       <ul>
//         {posts.map((post:any) => {
//           return (
//             <li key={post.id}>
//               <Link href={`/blog/${post.id}`}>{post.title}</Link>
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }
//
// export default Blog;

