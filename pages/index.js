import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = (props) => {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const Index = () => {
  const posts = [
    {
      id: 'hello-nextjs',
      title: 'Hello Next.js'
    },
    {
      id: 'learn-nextjs',
      title: 'Learn Next.js is awsome'
    },
    {
      id: 'deploy-nextjs',
      title: 'Deploy apps with Zeit'
    }
  ];
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {
          posts.map(post => {
            return <PostLink key={post.id} id={post.id} title={post.title}></PostLink>
          })
        }
      </ul>
    </Layout>
  );
}

export default Index;