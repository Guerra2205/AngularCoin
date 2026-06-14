import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = 'e31a553d9ff767063400fdb0';
  private apiUrl = 'https://v6.exchangerate-api.com/v6';

  constructor(private http: HttpClient) {}

  getRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.apiKey}/latest/${baseCurrency}`);
  }

  getHistory(): any[] {
    const data = localStorage.getItem('conversionHistory');
    return data ? JSON.parse(data) : [];
  }

  saveHistory(conversion: any): void {
    const history = this.getHistory();
    history.unshift(conversion);
    localStorage.setItem('conversionHistory', JSON.stringify(history));
  }
}