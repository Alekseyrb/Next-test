import {NextResponse} from "next/server";

export async function GET(req: Request) {
  const api_key = process.env.API_KEY;

  const movies = await fetch(`https://jsonplaceholder.typicode.com/posts/${api_key}`).then(res => res.json());

  return NextResponse.json(movies)
}

// apikey=78b88ea340ebf14b7c75b70b3f22b7f3
// const movies = await fetch('https://gateway.marvel.com:443/v1/public/');
