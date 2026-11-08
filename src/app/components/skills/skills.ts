import { Component } from '@angular/core';
import { portfolio, type SkillLevel } from '../../portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly portfolio = portfolio;

  protected levelDots(level: SkillLevel): number {
    switch (level) {
      case 'Advanced':
        return 3;
      case 'Intermediate':
        return 2;
      default:
        return 1;
    }
  }
}
