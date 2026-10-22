import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { I18n, Key } from './i18n';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly i18n = inject(I18n);
  protected readonly installEvent = signal<any>(null);

  protected t(key: Key): string {
    return this.i18n.t(key);
  }

  ngOnInit() {
    document.documentElement.lang = this.i18n.lang() === 'pt' ? 'pt-BR' : 'en';

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.installEvent.set(e);
    });
    window.addEventListener('appinstalled', () => this.installEvent.set(null));
  }

  @HostListener('document:pointermove', ['$event'])
  onMove(e: PointerEvent) {
    const el = (e.target as HTMLElement | null)?.closest?.('.glass') as HTMLElement | null;
    if (el) {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', e.clientX - r.left + 'px');
      el.style.setProperty('--my', e.clientY - r.top + 'px');
    }
  }

  async install() {
    const ev = this.installEvent();
    if (!ev) return;
    ev.prompt();
    await ev.userChoice;
    this.installEvent.set(null);
  }
}
