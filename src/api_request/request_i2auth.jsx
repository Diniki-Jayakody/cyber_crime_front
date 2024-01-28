import axios from 'axios';

const ApiRequestAuth = async (url, method = 'GET', data = null) => {
    url = "https://fw2svr60sl.execute-api.ap-south-1.amazonaws.com/beta/userLogin"
    data['device_token'] = ""
    data['project_code'] = "6543d314d9850e2dd50661c1AVT60UVT4300"
  try {
    const response = await axios({
      url,
      method,
      data,
    });
    let res = response.data
      if(res.state){
        if(res.data.state){
          alert("success")
          return true
        }
        else{
          alert(res.data.response)
          return false
        }
      }
  } catch (error) {
    throw error;
  }
};

export default ApiRequestAuth;