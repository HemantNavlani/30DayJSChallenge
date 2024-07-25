import axios from 'axios';
const api = "https://api.github.com/users/HemantNavlani"

const fetchData = async () => {
  try {
    const response = await axios.get(api);
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();