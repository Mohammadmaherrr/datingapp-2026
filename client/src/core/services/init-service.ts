import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {

  private accountService = inject(AccountService);

  init() {
    const userSting = localStorage.getItem('user');
    if (!userSting) return of(null);
    const user = JSON.parse(userSting);
    this.accountService.currentUser.set(user);

    return of(null)
  }
  
}
