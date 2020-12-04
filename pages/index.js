import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = (props) => {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const Index = (props) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {
          props.shows.map(showInfo => {
            let show = showInfo.show;
            return <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          })
        }
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`show data fetched. Count: ${data.length}`);
  return {
    shows: data
  }
}

export default Index;