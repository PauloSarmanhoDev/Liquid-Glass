import { Component, computed, inject, signal } from '@angular/core';
import { I18n, Key } from '../i18n';
import { COMPONENTS_DOCS, ComponentDoc, WIKI_CATEGORIES, WikiCategory } from './wiki-data';

export type PreviewBg =
  | 'cosmic'
  | 'sunset'
  | 'emerald'
  | 'sequoia'
  | 'aurora'
  | 'neon'
  | 'mesh'
  | 'light'
  | 'grid'
  | 'dark';

export interface WikiBgOption {
  id: PreviewBg;
  labelKey: Key;
  swatchGradient: string;
}

@Component({
  selector: 'app-wiki',
  standalone: true,
  templateUrl: './wiki.html',
  styleUrl: './wiki.css',
})
export class Wiki {
  protected readonly i18n = inject(I18n);

  readonly categories = WIKI_CATEGORIES;
  readonly allDocs = COMPONENTS_DOCS;
  protected readonly Math = Math;

  readonly search = signal('');
  readonly selectedCategory = signal<WikiCategory['id']>('all');
  readonly previewBg = signal<PreviewBg>('cosmic');

  readonly bgOptions: WikiBgOption[] = [
    {
      id: 'cosmic',
      labelKey: 'wiki.bg.cosmic',
      swatchGradient: 'radial-gradient(circle at 30% 30%, #3b82f6, #ff4f8b, #120e2e)',
    },
    {
      id: 'sunset',
      labelKey: 'wiki.bg.sunset',
      swatchGradient: 'radial-gradient(circle at 30% 30%, #ff6b4a, #ff2e93, #7928ca)',
    },
    {
      id: 'emerald',
      labelKey: 'wiki.bg.emerald',
      swatchGradient: 'radial-gradient(circle at 30% 30%, #059669, #06b6d4, #071f1e)',
    },
    {
      id: 'sequoia',
      labelKey: 'wiki.bg.sequoia',
      swatchGradient: 'radial-gradient(circle at 30% 30%, #d97706, #15803d, #131b18)',
    },
    {
      id: 'aurora',
      labelKey: 'wiki.bg.aurora',
      swatchGradient: 'radial-gradient(circle at 30% 30%, #10b981, #8b5cf6, #050816)',
    },
    {
      id: 'neon',
      labelKey: 'wiki.bg.neon',
      swatchGradient: 'radial-gradient(circle at 30% 30%, #f43f5e, #00f0ff, #0d041c)',
    },
    {
      id: 'mesh',
      labelKey: 'wiki.bg.mesh',
      swatchGradient: 'radial-gradient(circle at 30% 30%, #c084fc, #38bdf8, #fda4af)',
    },
    {
      id: 'light',
      labelKey: 'wiki.bg.light',
      swatchGradient: 'linear-gradient(135deg, #f8fafc, #cbd5e1, #94a3b8)',
    },
    {
      id: 'grid',
      labelKey: 'wiki.bg.grid',
      swatchGradient: 'repeating-linear-gradient(45deg, #3b82f6 0 2px, #0f172a 2px 7px)',
    },
    {
      id: 'dark',
      labelKey: 'wiki.bg.dark',
      swatchGradient: 'radial-gradient(circle at 50% 50%, #2a3158, #0c0e1a)',
    },
  ];

  // Track active code tab per component ID ('html' | 'css' | 'angular')
  readonly activeTabMap = signal<Record<string, 'html' | 'css' | 'angular'>>({});
  // Track copied feedback per component ID
  readonly copiedMap = signal<Record<string, boolean>>({});

  // Interactive demo states inside wiki preview
  readonly demoSwitch = signal(true);
  readonly demoSlider = signal(65);
  readonly demoSegment = signal(0);
  readonly demoDockItems = ['🚀', '🎨', '⚙️', '💎', '🧭'];
  readonly demoIslandExpanded = signal(false);
  readonly demoWifi = signal(true);
  readonly demoBluetooth = signal(true);
  readonly demoStepper = signal(3);
  readonly demoCheckbox = signal(true);
  readonly demoToast = signal(true);
  readonly demoSelectOpen = signal(false);
  readonly demoSelectValue = signal('Opção 1: Vidro Claro');
  readonly demoFileName = signal<string | null>('preview-design.fig');
  readonly demoPasswordShow = signal(false);
  readonly demoTextarea = signal('Liquid Glass combina beleza e legibilidade no frontend moderno.');
  readonly demoProgress = signal(74);
  readonly demoPage = signal(2);
  readonly demoAlertClosed = signal(false);
  readonly demoAccordionIndex = signal<number | null>(0);

  toggleAccordion(idx: number) {
    this.demoAccordionIndex.update((curr) => (curr === idx ? null : idx));
  }

  readonly filteredDocs = computed(() => {
    const q = this.search().trim().toLowerCase();
    const cat = this.selectedCategory();
    const isPt = this.i18n.lang() === 'pt';

    return this.allDocs.filter((doc) => {
      const matchCat = cat === 'all' || doc.category === cat;
      if (!matchCat) return false;

      if (!q) return true;

      const name = isPt ? doc.namePt : doc.nameEn;
      const desc = isPt ? doc.descPt : doc.descEn;
      const tagline = isPt ? doc.taglinePt : doc.taglineEn;
      const classesStr = doc.classes.map((c) => c.cls).join(' ');

      return (
        name.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        tagline.toLowerCase().includes(q) ||
        classesStr.toLowerCase().includes(q) ||
        doc.id.toLowerCase().includes(q)
      );
    });
  });

  t(key: Key): string {
    return this.i18n.t(key);
  }

  getCategoryCount(catId: WikiCategory['id']): number {
    if (catId === 'all') return this.allDocs.length;
    return this.allDocs.filter((d) => d.category === catId).length;
  }

  getActiveTab(docId: string): 'html' | 'css' | 'angular' {
    return this.activeTabMap()[docId] ?? 'html';
  }

  setTab(docId: string, tab: 'html' | 'css' | 'angular') {
    this.activeTabMap.update((m) => ({ ...m, [docId]: tab }));
  }

  isCopied(docId: string): boolean {
    return !!this.copiedMap()[docId];
  }

  async copySnippet(docId: string, content: string) {
    try {
      await navigator.clipboard.writeText(content);
      this.copiedMap.update((m) => ({ ...m, [docId]: true }));
      setTimeout(() => {
        this.copiedMap.update((m) => ({ ...m, [docId]: false }));
      }, 1800);
    } catch {
      // fallback
    }
  }

  dockMove(e: PointerEvent) {
    const dock = e.currentTarget as HTMLElement;
    dock.querySelectorAll<HTMLElement>('.dock-item').forEach((el) => {
      const r = el.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      const s = 1 + 0.65 * Math.max(0, 1 - d / 90) ** 2;
      el.style.transform = `translateY(${-(s - 1) * 16}px) scale(${s})`;
    });
  }

  dockLeave(e: PointerEvent) {
    (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>('.dock-item').forEach((el) => (el.style.transform = ''));
  }

  val(e: Event): number {
    return +(e.target as HTMLInputElement).value;
  }
}
