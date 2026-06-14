import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from '../../services.currency';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})
export class ConverterComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'BRL';
  result: number | null = null;
  currencies: string[] = [];
  isOffline: boolean = false;
  errorMessage: string = '';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() { this.loadRates(); }

  loadRates() {
    this.currencyService.getRates(this.fromCurrency).subscribe({
      next: (data: any) => {
        this.currencies = Object.keys(data.conversion_rates);
        localStorage.setItem('rates', JSON.stringify(data.conversion_rates));
        this.isOffline = false;
      },
      error: () => {
        this.isOffline = true;
        this.errorMessage = 'Sem conexão! Usando taxas salvas.';
      }
    });
  }

  convert() {
    const rates = JSON.parse(localStorage.getItem('rates') || '{}');
    if (rates[this.toCurrency]) {
      this.result = this.amount * rates[this.toCurrency];
      this.currencyService.saveHistory({
        amount: this.amount,
        from: this.fromCurrency,
        to: this.toCurrency,
        result: this.result,
        date: new Date().toLocaleString()
      });
    }
  }
}
