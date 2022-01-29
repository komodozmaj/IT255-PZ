import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RentACar';

  valid(): boolean {
    if (window.sessionStorage.getItem("user_email")) {
      return true
    }
    return false
  }

  logout(): void {
    window.sessionStorage.clear()
  }
}
