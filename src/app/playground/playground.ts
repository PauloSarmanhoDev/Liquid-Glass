import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { I18n, Key } from '../i18n';

export interface PlaygroundPreset {
  id: string;
  namePt: string;
  nameEn: string;
  icon: string;
  html: string;
  css: string;
}

const PRESETS: PlaygroundPreset[] = [
  {
    id: 'liquid-button',
    namePt: 'Botão Especular Apple',
    nameEn: 'Apple Specular Button',
    icon: '🔘',
    html: `<button class="apple-glass-btn">
  <span class="btn-sparkle">✦</span>
  <span>Explorar Liquid Glass</span>
</button>`,
    css: `.apple-glass-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.1rem 2.2rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06));
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.65),
    inset 0 -1px 0 rgba(0,0,0,0.2),
    0 16px 36px rgba(0,0,0,0.45);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.apple-glass-btn:hover {
  transform: translateY(-3px) scale(1.04);
  background: linear-gradient(135deg, rgba(110,168,255,0.45), rgba(196,139,255,0.35));
  box-shadow: 0 0 28px rgba(110,168,255,0.5), inset 0 1px 0 #fff;
}

.btn-sparkle {
  color: #6ea8ff;
  font-size: 1.15rem;
  animation: pulse-glow 2s infinite alternate;
}

@keyframes pulse-glow {
  from { filter: drop-shadow(0 0 2px #6ea8ff); }
  to { filter: drop-shadow(0 0 8px #c48bff); }
}`,
  },
  {
    id: 'music-card',
    namePt: 'Card de Mídia Translúcido',
    nameEn: 'Translucent Media Card',
    icon: '🎵',
    html: `<div class="glass-media-card">
  <div class="media-art">🎧</div>
  <div class="media-info">
    <h4>Spatial Audio Vision</h4>
    <p>Apple Music • 24-bit 96kHz Lossless</p>
    <div class="media-meter">
      <div class="media-fill"></div>
    </div>
  </div>
  <button class="media-play-btn">▶</button>
</div>`,
    css: `.glass-media-card {
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding: 1.5rem 1.8rem;
  min-width: 360px;
  max-width: 440px;
  border-radius: 28px;
  background: rgba(18, 22, 54, 0.55);
  backdrop-filter: blur(28px) saturate(200%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    inset 0 -1px 0 rgba(255,255,255,0.1),
    0 24px 50px rgba(0,0,0,0.55);
  color: #fff;
  font-family: 'Inter', system-ui, sans-serif;
}

.media-art {
  width: 52px; height: 52px;
  border-radius: 16px;
  display: grid; place-items: center;
  font-size: 1.6rem;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  box-shadow: 0 8px 20px rgba(236,72,153,0.35);
}

.media-info { flex: 1; }
.media-info h4 { font-size: 1rem; font-weight: 700; margin: 0; }
.media-info p { font-size: 0.78rem; color: rgba(255,255,255,0.65); margin: 0.2rem 0 0.6rem; }

.media-meter {
  width: 100%; height: 6px;
  border-radius: 999px;
  background: rgba(255,255,255,0.15);
  overflow: hidden;
}

.media-fill {
  width: 65%; height: 100%;
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  box-shadow: 0 0 10px #38bdf8;
}

.media-play-btn {
  width: 44px; height: 44px;
  border-radius: 50%;
  border: 0;
  background: #ffffff;
  color: #0b0d1f;
  font-size: 1rem;
  font-weight: 700;
  display: grid; place-items: center;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
}

.media-play-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 16px rgba(255,255,255,0.6);
}`,
  },
  {
    id: 'dynamic-island',
    namePt: 'Dynamic Island / Pílula',
    nameEn: 'Dynamic Island Pill',
    icon: '📱',
    html: `<div class="island-capsule">
  <div class="island-icon">⚡</div>
  <div class="island-meta">
    <strong>AirPods Pro Conectados</strong>
    <small>Bateria 92% • Áudio Espacial</small>
  </div>
  <span class="island-badge">ON</span>
</div>`,
    css: `.island-capsule {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  background: rgba(8, 10, 24, 0.75);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.45),
    0 16px 36px rgba(0,0,0,0.6);
  color: #fff;
  font-family: 'Inter', system-ui, sans-serif;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;
}

.island-capsule:hover {
  transform: scale(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.7),
    0 0 30px rgba(56,189,248,0.35);
}

.island-icon {
  width: 32px; height: 32px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  font-size: 0.95rem;
}

.island-meta strong { display: block; font-size: 0.88rem; font-weight: 700; }
.island-meta small { color: rgba(255,255,255,0.65); font-size: 0.75rem; }

.island-badge {
  font-size: 0.68rem;
  font-weight: 800;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(52,211,153,0.22);
  color: #34d399;
  border: 1px solid rgba(52,211,153,0.4);
}`,
  },
  {
    id: 'kpi-card',
    namePt: 'KPI Card com Sparkline',
    nameEn: 'KPI Card with Sparkline',
    icon: '📊',
    html: `<div class="kpi-glass-box">
  <div class="kpi-top">
    <span class="kpi-lbl">Volume de Transações</span>
    <span class="kpi-pill">↑ 34.2%</span>
  </div>
  <div class="kpi-num">$284,910</div>
  <svg class="kpi-curve" viewBox="0 0 200 45">
    <path fill="rgba(56,189,248,0.15)" d="M 0,40 Q 40,25 75,30 T 130,15 T 170,18 T 200,4 L 200,45 L 0,45 Z" />
    <path fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" d="M 0,40 Q 40,25 75,30 T 130,15 T 170,18 T 200,4" />
  </svg>
</div>`,
    css: `.kpi-glass-box {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem 1.8rem;
  min-width: 320px;
  border-radius: 26px;
  background: linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 18px 40px rgba(0,0,0,0.45);
  color: #fff;
  font-family: 'Inter', system-ui, sans-serif;
}

.kpi-top { display: flex; justify-content: space-between; align-items: center; }
.kpi-lbl { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.65); font-weight: 700; }
.kpi-pill {
  font-size: 0.75rem; font-weight: 800;
  padding: 0.2rem 0.6rem; border-radius: 999px;
  background: rgba(52,211,153,0.2); color: #34d399;
}
.kpi-num { font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em; }
.kpi-curve { width: 100%; height: 45px; overflow: visible; filter: drop-shadow(0 2px 8px rgba(56,189,248,0.5)); }`,
  },
  {
    id: 'glass-input',
    namePt: 'Campo com Foco Neon',
    nameEn: 'Neon Focus Form Field',
    icon: '📝',
    html: `<div class="form-container">
  <label class="form-label">Endereço de E-mail</label>
  <div class="input-glass-box">
    <span class="icon-prefix">✉️</span>
    <input type="email" placeholder="tim@apple.com" value="steve@apple.com" />
    <span class="badge-ok">✓ Válido</span>
  </div>
</div>`,
    css: `.form-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 340px;
  font-family: 'Inter', system-ui, sans-serif;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
}

.input-glass-box {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1.1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.input-glass-box:focus-within {
  background: rgba(255, 255, 255, 0.14);
  border-color: #38bdf8;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.6),
    0 0 0 3px rgba(56,189,248,0.3),
    0 8px 24px rgba(0,0,0,0.3);
}

.input-glass-box input {
  flex: 1;
  background: transparent;
  border: 0;
  outline: none;
  color: #fff;
  font-size: 0.95rem;
  font-family: inherit;
}

.icon-prefix { font-size: 1.1rem; }

.badge-ok {
  font-size: 0.75rem;
  font-weight: 700;
  color: #34d399;
}`,
  },
];

@Component({
  selector: 'app-playground',
  standalone: true,
  templateUrl: './playground.html',
  styleUrl: './playground.css',
})
export class Playground {
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly i18n = inject(I18n);

  readonly presets = PRESETS;
  readonly selectedPresetId = signal<string>('liquid-button');

  // Active editors content
  readonly htmlContent = signal<string>(PRESETS[0].html);
  readonly cssContent = signal<string>(PRESETS[0].css);

  // Studio background
  readonly previewBg = signal<'cosmic' | 'sunset' | 'emerald' | 'checkerboard'>('cosmic');

  // Tab mode for code editor: 'both' | 'html' | 'css'
  readonly editorTab = signal<'both' | 'html' | 'css'>('both');

  // Refraction filter toggle
  readonly refractionLens = signal<boolean>(false);

  // Copied indicator
  readonly copyFeedback = signal<string | null>(null);

  // Computed safe HTML
  readonly safeHtml = computed<SafeHtml>(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.htmlContent());
  });

  t(key: Key): string {
    return this.i18n.t(key);
  }

  loadPreset(presetId: string) {
    const p = this.presets.find((x) => x.id === presetId);
    if (p) {
      this.selectedPresetId.set(presetId);
      this.htmlContent.set(p.html);
      this.cssContent.set(p.css);
    }
  }

  updateHtml(e: Event) {
    const v = (e.target as HTMLTextAreaElement).value;
    this.htmlContent.set(v);
  }

  updateCss(e: Event) {
    const v = (e.target as HTMLTextAreaElement).value;
    this.cssContent.set(v);
  }

  handleKeyDown(e: KeyboardEvent, type: 'html' | 'css') {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const val = target.value;
      const updated = val.substring(0, start) + '  ' + val.substring(end);
      target.value = updated;
      target.selectionStart = target.selectionEnd = start + 2;
      if (type === 'html') this.htmlContent.set(updated);
      else this.cssContent.set(updated);
    }
  }

  async copyText(type: 'html' | 'css' | 'all') {
    let text = '';
    if (type === 'html') text = this.htmlContent();
    else if (type === 'css') text = this.cssContent();
    else text = `/* HTML */\n${this.htmlContent()}\n\n/* CSS */\n${this.cssContent()}`;

    try {
      await navigator.clipboard.writeText(text);
      this.copyFeedback.set(type);
      setTimeout(() => this.copyFeedback.set(null), 1800);
    } catch {
      // fallback
    }
  }

  resetCurrentPreset() {
    this.loadPreset(this.selectedPresetId());
  }
}
