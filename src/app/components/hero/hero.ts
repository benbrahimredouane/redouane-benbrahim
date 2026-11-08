import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly portfolio = portfolio;

  protected readonly codeSample = `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
})
export class AppComponent {
  // clean code, clear structure
  readonly name = 'Redouane';
}`;
}
