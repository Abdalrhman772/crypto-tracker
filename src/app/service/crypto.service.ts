import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private baseUrl: string = 'https://api.coingecko.com/api/v3/coins';

  constructor(private http: HttpClient) {}

  getCurrency(currency: string) {
    return this.http.get<any>(
      `${this.baseUrl}/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`
    );
  }
  getTrendingCurrency(currency: string) {
    return this.http.get<any>(
      `${this.baseUrl}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
  }
  getGraphicalCurrencyData(coinId: string, currency: string, days: number) {
    return this.http.get<any>(
      `${this.baseUrl}/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
    );
  }
  getCurrencyById(coinId: string) {
    return this.http.get<any>(`${this.baseUrl}/${coinId}`);
  }
}
