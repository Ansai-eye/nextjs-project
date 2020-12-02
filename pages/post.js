import { Fragment } from 'react';
import Layout from '../components/MyLayout';

const Content = (props) => {
  debugger;
  return (
    <Fragment>
      <h1>{props.url.query.title}</h1>
      <p>this is the blog post content</p>
    </Fragment>
  );
};

const Post = (props) => {
  return (
    <Layout>
      <Content url={props.url}></Content>
    </Layout>
  );
};

export default Post;