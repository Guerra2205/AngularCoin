import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '../../services.currency';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class HistoryComponent implements OnInit {
  history: any[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() { this.history = this.currencyService.getHistory(); }

  clearHistory() {
    localStorage.removeItem('conversionHistory');
    this.history = [];
  }
}
