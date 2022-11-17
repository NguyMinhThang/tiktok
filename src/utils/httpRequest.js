import axios from 'axios';
console.log(process.env.REACT_APP_BASE_URL);
const htttpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, options = []) => {
    const response = await htttpRequest.get(path, options);
    return response.data;
};
export default htttpRequest;
