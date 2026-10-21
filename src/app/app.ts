import { Component, ElementRef, HostListener, OnInit, computed, inject, signal, viewChild } from '@angular/core';
import { I18n, Key } from './i18n';
import { Wiki } from './wiki/wiki';

const DEFAULTS = { blur: 18, opacity: 12, refraction: 40, saturation: 180, specular: 55, radius: 40 };

const SNIPPETS = {
  blur: `.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
}`,
  tint: `.glass {
  background: linear-gradient(135deg,
    rgba(255,255,255,.18),
    rgba(255,255,255,.06));
}`,
  edge: `.glass {
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.5),
    inset 0 -1px 0 rgba(255,255,255,.1),
    0 18px 40px -12px rgba(0,0,0,.45);
}
.glass::before { /* gradient rim */
  content: ''; position: absolute; inset: 0;
  border-radius: inherit; padding: 1.2px;
  background: linear-gradient(145deg,
    rgba(255,255,255,.55), transparent 40%,
    transparent 60%, rgba(255,255,255,.4));
  -webkit-mask: linear-gradient(#000 0 0) content-box,
                linear-gradient(#000 0 0);
  mask-composite: exclude;
}`,
  svg: `<svg width="0" height="0" style="position:absolute">
  <filter id="refract" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise"
      baseFrequency="0.008 0.012" numOctaves="2" seed="4"/>
    <feDisplacementMap in="SourceGraphic"
      scale="40" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>

.lens { backdrop-filter: blur(4px) url(#refract); }`,
  a11y: `@supports not (backdrop-filter: blur(1px)) {
  .glass { background: rgba(40, 46, 90, .85); }
}
@media (prefers-reduced-transparency: reduce) {
  .glass { backdrop-filter: none; background: #222852f0; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}`,
};

@Component({
  selector: 'app-root',
  imports: [Wiki],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly i18n = inject(I18n);
  protected readonly snippets = SNIPPETS;

  // View state: Showcase vs Wiki
  readonly currentView = signal<'showcase' | 'wiki'>('showcase');

  // gallery state
  protected readonly airplane = signal(true);
  protected readonly brightness = signal(65);
  protected readonly segment = signal(0);
  protected readonly tab = signal(0);
  protected readonly modal = signal(false);
  protected readonly tabs = ['🏠', '🔍', '🎵', '⚙️'];
  protected readonly tabLabels = ['Home', 'Search', 'Music', 'Settings'];
  protected readonly dockItems = ['🚀', '🎨', '⚙️', '💎', '🧭', '📱', '🔔'];
  protected readonly compare = signal(50);
  protected readonly dynamicIslandOpen = signal(false);
  protected readonly wifiActive = signal(true);
  protected readonly btActive = signal(true);
  protected readonly stepperVal = signal(4);
  protected readonly checkVal = signal(true);
  protected readonly selectOpen = signal(false);
  protected readonly selectVal = signal('Opção 1: Vidro Claro');
  protected readonly uploadedFile = signal<string | null>('documento-glass.pdf');
  protected readonly passwordShown = signal(false);
  protected readonly textareaVal = signal('Vidro líquido translúcido com acabamento de alta fidelidade.');
  protected readonly galleryProgress = signal(68);
  protected readonly galleryPage = signal(2);
  protected readonly galleryAccordion = signal<number | null>(0);
  protected readonly galleryKpiRevenue = signal('$142,850');
  protected readonly Math = Math;

  toggleGalleryAccordion(idx: number) {
    this.galleryAccordion.update((curr) => (curr === idx ? null : idx));
  }

  // nav
  protected readonly active = signal('hero');
  protected readonly installEvent = signal<any>(null);

  // playground state
  protected readonly blur = signal(DEFAULTS.blur);
  protected readonly opacity = signal(DEFAULTS.opacity);
  protected readonly refraction = signal(DEFAULTS.refraction);
  protected readonly saturation = signal(DEFAULTS.saturation);
  protected readonly specular = signal(DEFAULTS.specular);
  protected readonly radius = signal(DEFAULTS.radius);
  protected readonly pos = signal({ x: 90, y: 110 });
  protected readonly copied = signal(false);
  private readonly stage = viewChild<ElementRef<HTMLElement>>('stage');
  private drag: { dx: number; dy: number } | null = null;

  protected readonly css = computed(
    () => `.glass {
  background: rgba(255, 255, 255, ${(this.opacity() / 100).toFixed(2)});
  backdrop-filter:
    blur(${this.blur()}px)
    saturate(${this.saturation()}%)
    url(#refract); /* scale=${this.refraction()} */
  border-radius: ${this.radius()}px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,${(this.specular() / 100).toFixed(2)}),
    0 18px 40px -12px rgba(0,0,0,.45);
}`,
  );

  protected t(key: Key) {
    return this.i18n.t(key);
  }

  setView(view: 'showcase' | 'wiki') {
    this.currentView.set(view);
    if (view === 'wiki') {
      if (!window.location.hash.startsWith('#wiki') && !window.location.hash.startsWith('#doc-')) {
        window.location.hash = '#wiki';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '#hero';
    }
  }

  ngOnInit() {
    document.documentElement.lang = this.i18n.lang() === 'pt' ? 'pt-BR' : 'en';

    const checkHash = () => {
      const h = window.location.hash;
      if (h.startsWith('#wiki') || h.startsWith('#doc-')) {
        this.currentView.set('wiki');
      } else if (h === '#showcase' || h === '#hero' || h === '#components' || h === '#compare' || h === '#playground' || h === '#how') {
        this.currentView.set('showcase');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.installEvent.set(e);
    });
    window.addEventListener('appinstalled', () => this.installEvent.set(null));

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    setTimeout(() => ['hero', 'components', 'compare', 'playground', 'how'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }));
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

  async install() {
    const ev = this.installEvent();
    if (!ev) return;
    ev.prompt();
    await ev.userChoice;
    this.installEvent.set(null);
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

  val(e: Event) {
    return +(e.target as HTMLInputElement).value;
  }

  fill(v: number, min = 0, max = 100) {
    return ((v - min) / (max - min)) * 100 + '%';
  }

  reset() {
    this.blur.set(DEFAULTS.blur);
    this.opacity.set(DEFAULTS.opacity);
    this.refraction.set(DEFAULTS.refraction);
    this.saturation.set(DEFAULTS.saturation);
    this.specular.set(DEFAULTS.specular);
    this.radius.set(DEFAULTS.radius);
  }

  async copy() {
    await navigator.clipboard?.writeText(this.css());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 1600);
  }

  // dragging
  down(e: PointerEvent) {
    const lens = e.currentTarget as HTMLElement;
    lens.setPointerCapture(e.pointerId);
    const p = this.pos();
    const r = this.stage()!.nativeElement.getBoundingClientRect();
    this.drag = { dx: e.clientX - r.left - p.x, dy: e.clientY - r.top - p.y };
  }

  move(e: PointerEvent) {
    if (!this.drag) return;
    const r = this.stage()!.nativeElement.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - r.left - this.drag.dx, 0), r.width - 200);
    const y = Math.min(Math.max(e.clientY - r.top - this.drag.dy, 0), r.height - 200);
    this.pos.set({ x, y });
  }

  up() {
    this.drag = null;
  }
}
