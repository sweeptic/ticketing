import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      setErrors(
        <div className='alert alert-danger'>
          <h4>Oooop....</h4>
          {err.response.data.errors.map((error, index) => (
            <li key={index}> {error.message}</li>
          ))}
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
