import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>header</h1>
      <Component {...pageProps} />;
    </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  // console.log(Object.keys(appContext));
  // console.log(appContext);

  const client = buildClient(appContext.ctx);

  const { data } = await client.get('api/users/currentuser');

  const pageProps = await appContext.Component.getInitialProps(appContext.ctx);

  console.log(pageProps);

  return data;
};

export default AppComponent;
