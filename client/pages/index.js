import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  await axios.get('/api/users/currentuser');
  return <h1>landing page!</h1>;
};

// LandingPage.getInitialProps = async () => {
//   const response = await axios.get('/api/users/currentuser');

//   console.log('i am on the server');

//   return response.data;
// };

export default LandingPage;
