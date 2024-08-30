import api from '../Api/axios';

const getPosts = async () => {
  try {
    const response = await api.get('/api/categories');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar blog:', error);
    throw error;
  }
};

export { getPosts };
