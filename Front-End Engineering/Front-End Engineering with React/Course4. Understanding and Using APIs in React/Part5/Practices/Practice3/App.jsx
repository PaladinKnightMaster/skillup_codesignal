```
import useFetchAuthor from './useFetchAuthor';

const AuthorDetails = () => {
  const {author, loading} = useFetchAuthor('382dffad-4988-45c8-912f-c26477ac0d6d');

  return loading ? <div>Fetching data from the stars...</div> : <div>{author.firstName} {author.lastName}</div>;
};

export default AuthorDetails;
```
import useFetchAuthor from './useFetchAuthor';

const AuthorDetails = () => {
  const {author, loading} = useFetchAuthor('382dffad-4988-45c8-912f-c26477ac0d6d');

  return loading ? <div>Fetching data from the stars...</div> : <div>{author.firstName} {author.lastName}</div>;
};

export default AuthorDetails;
