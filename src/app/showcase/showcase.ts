import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, Key } from '../i18n';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
  protected readonly i18n = inject(I18n);

  // Gallery interactive states
  protected readonly airplane = signal(true);
  protected readonly brightness = signal(65);
  protected readonly segment = signal(0);
  protected readonly tab = signal(0);
  protected readonly modal = signal(false);
  protected readonly tabs = ['🏠', '🔍', '🎵', '⚙️'];
  protected readonly tabLabels = ['Home', 'Search', 'Music', 'Settings'];
  protected readonly dockItems = ['🚀', '🎨', '⚙️', '💎', '🧭', '📱', '🔔'];

  t(key: Key): string {
    return this.i18n.t(key);
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

  @HostListener('document:keydown.escape')
  onEsc() {
    this.modal.set(false);
  }

  dockMove(e: PointerEvent) {
    const dock = e.currentTarget as HTMLElement;
    dock.querySelectorAll<HTMLElement>('.dock-item').forEach((el) => {
      const r = el.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      const s = 1 + 0.75 * Math.max(0, 1 - d / 110) ** 2;
      el.style.transform = `translateY(${-(s - 1) * 22}px) scale(${s})`;
    });
  }

  dockLeave(e: PointerEvent) {
    (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>('.dock-item').forEach((el) => (el.style.transform = ''));
  }

  val(e: Event): number {
    return +(e.target as HTMLInputElement).value;
  }

  fill(v: number, min = 0, max = 100): string {
    return ((v - min) / (max - min)) * 100 + '%';
  }
}
