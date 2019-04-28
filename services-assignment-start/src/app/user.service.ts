import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  featuredWords = ['hrblock', 'tax', 'tax return', 'turbo tax'];
  additionalWords = ['bills', 'Manu'];

  constructor(private counterService: CounterService) {}

  setToInactive(id: number) {
    this.additionalWords.push(this.featuredWords[id]);
    this.featuredWords.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    this.featuredWords.push(this.additionalWords[id]);
    this.additionalWords.splice(id, 1);
    this.counterService.incrementInactiveToActiveCounter();
  }
}
