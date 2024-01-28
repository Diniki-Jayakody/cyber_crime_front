import axios from 'axios';

const ApiRequest = async (url, method = 'GET', data = null) => {
    url = "http://localhost:3000/"+url
  try {
    const response = await axios({
      url,
      method,
      data,
    });
    let res = response.data
    alert(res)
    alert(res.state)
    if(res.state){
        navigate("/complain")
    }
    return res.state
  } catch (error) {
    throw error;
  }
};

export default ApiRequest;