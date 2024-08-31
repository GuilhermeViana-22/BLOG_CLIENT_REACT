import api from '../Api/axios.js';

const getCategories = async () => {
  try {
    const response = await api.get('/api/categories');
    return response.data;
  } catch (error) {
    console.error('Não foi possível encontrar as categorias, houve um erro na busca:', error);
    throw error;
  }
};

export { getCategories }; // Exportação nomeada
