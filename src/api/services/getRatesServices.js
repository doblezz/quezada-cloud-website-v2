import axios from 'axios';
import ratesOffline from '../../assets/rates/ratesOffline.json';

// Definir las URLs de las APIs y el JSON local
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiUrlAlt = import.meta.env.VITE_REACT_APP_API_URL_ALT;
const ratesLocal = ratesOffline;

// Función para realizar la petición a la API principal
const fetchRates = async () => {
  try {
    // Hacer la solicitud a la API principal
    const response = await axios.get(apiUrl);
    // Devolver los datos de la respuesta
    return response.data;
  } catch (error) {
    // Manejar errores en la petición a la API principal
    console.error(`Error en la petición a ${apiUrl}: ${error.message}`);
    
    try {
      // Hacer la solicitud a la API alternativa
      const response = await axios.get(apiUrlAlt);
      // Devolver los datos de la respuesta
      return response.data;
    } catch (error) {
      // Manejar errores en la petición a la API alternativa
      console.warn(`Error en la petición a ${apiUrlAlt}.`);
      console.warn('Cargando JSON local con valores en 0.0000');
      // Devolver el JSON local en caso de fallo en ambas APIs
      return ratesLocal;
    }
  }
};

// Exportar la función fetchRates para su uso en otros archivos
export { fetchRates };
