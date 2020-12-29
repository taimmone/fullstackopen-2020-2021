import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const phonebookService = {
  getAll: () => axios.get(baseUrl).then(({ data }) => data),
  create: newObject => axios.post(baseUrl, newObject).then(({ data }) => data),
  update: (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject).then(({ data }) => data),
  remove: id => axios.delete(`${baseUrl}/${id}`).then(({ data }) => data),
};

export default phonebookService;
