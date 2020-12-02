import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const Layout = (props) => {
  return (<div style={layoutStyle}>
    <Header></Header>
    {
      props.children
    }
  </div>);
};

export default Layout;