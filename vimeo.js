import axios from 'axios';

// Chave de API do Vimeo (substitua pela sua chave)
const API_KEY = '72436405ce0a635381ef87cdf2d38f61';

export const buscarVideosVimeo = async (query) => {
  try {
    const response = await axios.get('https://api.vimeo.com/videos', {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        query: query,
        per_page: 10,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar vídeos do Vimeo:', error);
    throw error;
  }
};
