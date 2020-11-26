import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // 'http://ingress-nginx-controller.kube-system.svc.cluster.local/api/users/currentuser',
  console.log(currentUser);

  return <h1>landing page!</h1>;
};

//http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser
LandingPage.getInitialProps = async () => {
  //   const response = await axios.get('/api/users/currentuser');

  if (typeof window === 'undefined') {
    //  we are on server
    //request to ingress...
    const { data } = await axios.get(
      'http://ingress-nginx-controller.kube-system.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'ticketing.dev',
        },
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
