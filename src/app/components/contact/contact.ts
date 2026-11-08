import { Component, signal } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly portfolio = portfolio;

  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly message = signal('');

  protected mailtoHref(): string {
    const subject = encodeURIComponent(`Portfolio contact from ${this.name() || 'a visitor'}`);
    const body = encodeURIComponent(
      `${this.message()}\n\n— ${this.name()} (${this.email()})`,
    );
    return `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }
}
