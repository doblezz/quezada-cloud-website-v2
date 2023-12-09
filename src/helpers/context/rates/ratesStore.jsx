import { makeAutoObservable, runInAction } from 'mobx';
import { fetchRates } from '../../../api/services/getRatesServices';

class RatesStore {
  rates = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRates() {
    try {
      const ratesData = await fetchRates();
      const todasRatesEnCero = ratesData.every(rate => rate.purchaseRate === "00.0000" && rate.saleRate === "00.0000");

      if (todasRatesEnCero) {
        console.log("success: rates offline");
      } else {
        console.log("success: rates online");
      }

      runInAction(() => {
        this.rates = ratesData;
      });
    } catch (error) {
      console.error('Error al obtener las rates:', error);
    }
  }
}

const ratesStore = new RatesStore();
export default ratesStore;
