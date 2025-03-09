export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
}

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)

  if (!response.ok) {
    throw new Error('Not Found');
  }

  return response.json();
}

export const getPost = async () => {
  const response = await fetch("api/movies");

  return response.json();
}
