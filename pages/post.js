import { Fragment } from 'react';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Content = (props) => {
  let { name='', summary='', image={} } = props.show || {};
  return (
    <Fragment>
      <h1>{name}</h1>
      <p>{summary.replace(/<[/]?p>/g, '')}</p>
      <img src={image.medium} />
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

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://api.tvmaze.com/show/${id}`);
  const show = await res.json();
  return {
    show
  };
}

export default Post;