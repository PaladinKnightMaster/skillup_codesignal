/*
import useFetchAuthorPosts from './useFetchAuthorPosts';

const AuthorPosts = () => {
  const { posts, loading } = useFetchAuthorPosts('382dffad-4988-45c8-912f-c26477ac0d6d');

  // TODO: Replace null with logic that returns a loading message or a list of posts.
  return null;
};

export default AuthorPosts;
*/
import useFetchAuthorPosts from './useFetchAuthorPosts';

const AuthorPosts = () => {
  const { posts, loading } = useFetchAuthorPosts('382dffad-4988-45c8-912f-c26477ac0d6d');

  // TODO: Replace null with logic that returns a loading message or a list of posts.
  if (loading) return <div>Loading...</div>;
  if (!posts || posts.length === 0) return <div>No posts found.</div>;
  const postList = posts.map(post => <li key={post.id}>{post.title}</li>);
  return <ul>{postList}</ul>;
};

export default AuthorPosts;