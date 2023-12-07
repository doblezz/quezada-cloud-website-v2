import axios from 'axios';
import RatesOff from '../../assets/rates/ratesOffline.json';

let previousRatesData = RatesOff; // Almacena las tasas anteriores

async function fetchData() {
  const urlRates = "https://acqbackend.onrender.com/api/rates";
  try {
    const response = await axios.get(urlRates, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error al obtener las tasas:', error.message);
    // Si hay un error, devuelve un objeto con tasas en 00.00
    return RatesOff;
  }
}

async function fetchAndUpdateRates() {
  const ratesData = await fetchData();

  // Compara las tasas actuales con las anteriores
  if (!areRatesEqual(ratesData, previousRatesData)) {
    // Actualiza las tasas solo si son diferentes
    updateRates(ratesData);
    console.log('Tasas actualizadas:', ratesData);

    // Actualiza las tasas anteriores
    previousRatesData = ratesData;
  } else {
    console.log('Las tasas no han cambiado');
  }
}

// Función para verificar si las tasas son iguales
function areRatesEqual(rates1, rates2) {
  // Implementa tu lógica de comparación aquí
  // Puedes comparar propiedades específicas o utilizar una biblioteca como lodash para hacer una comparación profunda
  return JSON.stringify(rates1) === JSON.stringify(rates2);
}

// Función para realizar la actualización de tasas (aquí debes implementar la lógica de actualización)
function updateRates(newRates) {
  // Implementa la lógica para actualizar las tasas en tu aplicación
  // Por ejemplo, puedes almacenarlas en una base de datos, actualizar el estado de tu aplicación, etc.
  // ...
}

// Llama a la función por primera vez
fetchAndUpdateRates();

// Configura el intervalo para llamar a la función cada 1 minuto (60,000 milisegundos)
setInterval(fetchAndUpdateRates, 60000);
