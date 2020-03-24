import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemimgService {

  defaultTheme: BehaviorSubject<string> = new BehaviorSubject('light-theme');
  constructor() {
    let recentTheme = window.localStorage.getItem('currentTheme');
    if (recentTheme !== 'light-theme' && recentTheme !== 'dark-theme') {
      recentTheme = 'light-theme';
    }

    this.defaultTheme.next(recentTheme);
   }

  toggleTheme(theme='light-theme') {
    const current = this.defaultTheme.value;

    if (theme !== 'light-theme' && theme !== 'dark-theme') {
      theme = 'light-theme';
    }

    this.defaultTheme.next(theme);
    window.localStorage.setItem('currentTheme', theme);
  }

  
}
