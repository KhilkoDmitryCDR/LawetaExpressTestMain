import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show: boolean = false;
  title = 'LawetaExpressTest';
  languages = [
    { name: 'Polaco', flag: 'es' },
    { name: 'Deutch', flag: 'en' },
    { name: 'Français', flag: 'fr' },

  ];
  
}
