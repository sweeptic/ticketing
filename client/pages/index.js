import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>landing page!</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    //  we are on server
    //request to ingress...
    const { data } = await axios.get(
      'http://ingress-nginx-controller.kube-system.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );
    return data;
  } else {
    const { data } = await axios.get('/api/users/currentuser');
    return data;
    // we are on browser
  }
};

export default LandingPage;
