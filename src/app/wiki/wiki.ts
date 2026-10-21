import { Component, computed, inject, signal } from '@angular/core';
import { I18n, Key } from '../i18n';
import { COMPONENTS_DOCS, ComponentDoc, WIKI_CATEGORIES, WikiCategory } from './wiki-data';

export type PreviewBg = 'cosmic' | 'sunset' | 'emerald' | 'dark';

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

  readonly search = signal('');
  readonly selectedCategory = signal<WikiCategory['id']>('all');
  readonly previewBg = signal<PreviewBg>('cosmic');

  // Track active code tab per component ID ('html' | 'css' | 'angular')
  readonly activeTabMap = signal<Record<string, 'html' | 'css' | 'angular'>>({});
  // Track copied feedback per component ID
  readonly copiedMap = signal<Record<string, boolean>>({});

  // Interactive demo states inside wiki preview
  readonly demoSwitch = signal(true);
  readonly demoSlider = signal(65);
  readonly demoSegment = signal(0);
  readonly demoDockItems = ['📁', '🌐', '💬', '📷', '🎵'];

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
