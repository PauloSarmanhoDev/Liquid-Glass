export interface ComponentDoc {
  id: string;
  category: 'buttons' | 'forms' | 'surfaces' | 'nav' | 'overlays' | 'widgets' | 'feedback' | 'tokens';
  namePt: string;
  nameEn: string;
  taglinePt: string;
  taglineEn: string;
  descPt: string;
  descEn: string;
  classes: {
    cls: string;
    type: string;
    descPt: string;
    descEn: string;
  }[];
  htmlSnippet: string;
  cssSnippet: string;
  angularSnippet: string;
}

export interface WikiCategory {
  id: 'all' | 'buttons' | 'forms' | 'surfaces' | 'nav' | 'overlays' | 'widgets' | 'feedback' | 'tokens';
  labelPt: string;
  labelEn: string;
  icon: string;
}

export const WIKI_CATEGORIES: WikiCategory[] = [
  { id: 'all', labelPt: 'Todos os Componentes', labelEn: 'All Components', icon: '✦' },
  { id: 'buttons', labelPt: 'Botões & Ações', labelEn: 'Buttons & Actions', icon: '🔘' },
  { id: 'forms', labelPt: 'Formulários & Inputs', labelEn: 'Forms & Controls', icon: '📝' },
  { id: 'surfaces', labelPt: 'Superfícies & Dados', labelEn: 'Surfaces & Data', icon: '📊' },
  { id: 'nav', labelPt: 'Navegação & Barras', labelEn: 'Navigation & Bars', icon: '🧭' },
  { id: 'overlays', labelPt: 'Modais & Overlays', labelEn: 'Modals & Overlays', icon: '🪟' },
  { id: 'widgets', labelPt: 'Widgets & Sistema', labelEn: 'Widgets & System', icon: '📱' },
  { id: 'feedback', labelPt: 'Feedback & Status', labelEn: 'Feedback & Status', icon: '⚡' },
  { id: 'tokens', labelPt: 'Tokens & Receita CSS', labelEn: 'Tokens & CSS Recipe', icon: '🎨' },
];

export const COMPONENTS_DOCS: ComponentDoc[] = [
  {
    id: 'buttons',
    category: 'buttons',
    namePt: 'Botões Liquid Glass',
    nameEn: 'Liquid Glass Buttons',
    taglinePt: 'Botões translúcidos com borda especular e feedback háptico visual',
    taglineEn: 'Translucent buttons with specular rim and tactile visual feedback',
    descPt: 'Os botões de vidro líquido combinam um gradiente de brilho especular, blur dinâmico e micro-interação ao pressionar. Eles reagem à posição do cursor gerando um brilho óptico interno.',
    descEn: 'Liquid glass buttons combine specular rim reflection, dynamic blur and micro-interactions. They reflect cursor position creating an internal optical glow.',
    classes: [
      { cls: '.btn.glass', type: 'Classe Base', descPt: 'Estilo pill de vidro neutro translúcido', descEn: 'Neutral translucent glass pill style' },
      { cls: '.btn.primary', type: 'Variante', descPt: 'Vidro colorido com gradiente azul/violeta e alto contraste', descEn: 'Tinted glass with blue/violet gradient and high contrast' },
      { cls: '.btn.round', type: 'Modificador', descPt: 'Botão circular para ícones e ações rápidas', descEn: 'Circular button for icons and quick actions' },
      { cls: '.btn-sm / .btn-lg', type: 'Tamanho', descPt: 'Ajuste de padding e proporção de escala', descEn: 'Padding adjustment and scale ratio' }
    ],
    htmlSnippet: `<button class="btn glass">
  <span>Secundário</span>
</button>

<button class="btn primary glass">
  <span>Primário com Brilho</span>
</button>

<button class="btn round glass" aria-label="Favoritar">
  ♥
</button>`,
    cssSnippet: `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  font-weight: 600;
  --glass-radius: 999px;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.btn:hover {
  transform: translateY(-2px) scale(1.03);
}

.btn:active {
  transform: scale(0.96);
}

.btn.primary {
  background: linear-gradient(135deg, rgba(110,168,255,0.55), rgba(196,139,255,0.45));
}`,
    angularSnippet: `@Component({
  template: \`
    <button class="btn primary glass" (click)="handleClick()">
      <span>{{ loading() ? 'Processando...' : 'Salvar Alterações' }}</span>
    </button>
  \`
})
export class ActionButton {
  loading = signal(false);
  handleClick() {
    this.loading.set(true);
  }
}`
  },

  {
    id: 'switch',
    category: 'forms',
    namePt: 'Switch / Interruptor iOS Glass',
    nameEn: 'iOS Glass Toggle Switch',
    taglinePt: 'Controle booleano tátil com track em vidro fosco e knob esférico',
    taglineEn: 'Tactile boolean toggle with frosted track and spherical glass knob',
    descPt: 'Inspirado nos switches do iOS e visionOS, o knob possui sombra interna e externa, expandindo levemente enquanto pressionado para criar uma sensação física realista.',
    descEn: 'Inspired by iOS and visionOS toggles, the knob features internal and external shadows, expanding slightly while pressed to simulate physical elasticity.',
    classes: [
      { cls: '.switch', type: 'Container', descPt: 'Pílula de vidro que serve como trilho', descEn: 'Glass pill serving as the track' },
      { cls: '.switch.on', type: 'Estado', descPt: 'Gradiente verde/ciano esmeralda ativo', descEn: 'Active emerald/cyan gradient' },
      { cls: '.knob.glass', type: 'Elemento', descPt: 'Cúpula arredondada que desliza no trilho', descEn: 'Rounded dome sliding inside track' }
    ],
    htmlSnippet: `<button class="switch" role="switch" [attr.aria-checked]="active" [class.on]="active" (click)="active = !active">
  <span class="knob glass"></span>
</button>`,
    cssSnippet: `.switch {
  position: relative;
  width: 62px;
  height: 36px;
  border-radius: 999px;
  background: rgba(255,255,255,0.16);
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.3);
  transition: background 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.switch.on {
  background: linear-gradient(135deg, #34d399, #22d3ee);
}

.switch .knob {
  position: absolute;
  top: 3px; left: 3px;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  box-shadow: 0 3px 10px rgba(0,0,0,0.35);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
              width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.switch.on .knob {
  transform: translateX(26px);
}`,
    angularSnippet: `// Componente Angular com Signal
export class GlassSwitchComponent {
  readonly enabled = signal(true);
  toggle() {
    this.enabled.update(v => !v);
  }
}`
  },

  {
    id: 'slider',
    category: 'forms',
    namePt: 'Slider / Controle de Intensidade',
    nameEn: 'Fluid Glass Range Slider',
    taglinePt: 'Barra de progresso e ajuste com preenchimento luminoso dinâmico',
    taglineEn: 'Progress and adjustment bar with dynamic luminous fill',
    descPt: 'Range input customizado que calcula dinamicamente a propriedade CSS --fill para pintar o rastro percorrido, acompanhado de um thumb tátil que cresce ao arrastar.',
    descEn: 'Custom range input dynamically computing the --fill CSS variable to tint the completed track, paired with an expanding tactile thumb.',
    classes: [
      { cls: '.slider-wrap', type: 'Container', descPt: 'Agrupador de label, valor e barra deslizante', descEn: 'Wrapper for label, counter and slider bar' },
      { cls: 'input[type="range"]', type: 'Tag Nativa', descPt: 'Elemento acessível estilizado com trilho e thumb glass', descEn: 'Accessible native input styled with glass track and thumb' },
      { cls: '--fill', type: 'Variável CSS', descPt: 'Porcentagem de 0% a 100% que preenche a trilha ativa', descEn: '0% to 100% percentage filling the active track' }
    ],
    htmlSnippet: `<div class="slider-wrap">
  <label for="volume">Volume <span>{{ volume() }}%</span></label>
  <input id="volume" type="range" min="0" max="100"
    [value]="volume()"
    [style.--fill]="volume() + '%'"
    (input)="volume.set(+$any($event.target).value)" />
</div>`,
    cssSnippet: `input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  background: linear-gradient(90deg,
    rgba(255,255,255,0.9) var(--fill, 50%),
    rgba(255,255,255,0.15) var(--fill, 50%));
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.35);
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 26px; height: 26px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 3px 12px rgba(0,0,0,0.4);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

input[type='range']::-webkit-slider-thumb:active {
  transform: scale(1.25);
}`,
    angularSnippet: `readonly volume = signal(75);
onInput(e: Event) {
  this.volume.set(+(e.target as HTMLInputElement).value);
}`
  },

  {
    id: 'segment',
    category: 'forms',
    namePt: 'Controle Segmentado / Tabs Pills',
    nameEn: 'Segmented Control / Glass Tabs',
    taglinePt: 'Seletor exclusivo com indicador deslizante flutuante',
    taglineEn: 'Mutually exclusive selector with sliding floating glass thumb',
    descPt: 'Organiza opções mutuamente exclusivas em uma única barra compacta. Um pill translúcido se move suavemente sob o item selecionado usando transform translateX.',
    descEn: 'Organizes mutually exclusive options into a single compact bar. A translucent pill glides smoothly beneath the active option via transform translateX.',
    classes: [
      { cls: '.segment.glass', type: 'Container', descPt: 'Trilho geral com cantos arredondados ou pílula', descEn: 'Overall track with rounded or pill corners' },
      { cls: '.thumb', type: 'Indicador', descPt: 'Elemento de vidro que desliza até a posição ativa', descEn: 'Glass pill sliding to the active index' },
      { cls: 'button.on', type: 'Estado', descPt: 'Opção com cor e peso tipográfico ativo', descEn: 'Option with active color and typography weight' }
    ],
    htmlSnippet: `<div class="segment glass" role="tablist">
  <span class="thumb" [style.transform]="'translateX(' + activeIndex * 100 + '%)'"></span>
  <button [class.on]="activeIndex === 0" (click)="activeIndex = 0">Diário</button>
  <button [class.on]="activeIndex === 1" (click)="activeIndex = 1">Semanal</button>
  <button [class.on]="activeIndex === 2" (click)="activeIndex = 2">Mensal</button>
</div>`,
    cssSnippet: `.segment {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  --glass-radius: 999px;
}

.segment button {
  position: relative;
  z-index: 1;
  padding: 0.7rem 0;
  font-weight: 600;
  color: var(--text-dim);
  transition: color 0.3s;
}

.segment button.on { color: #fff; }

.segment .thumb {
  position: absolute;
  top: 5px; bottom: 5px; left: 5px;
  width: calc((100% - 10px) / 3);
  border-radius: 999px;
  background: rgba(255,255,255,0.25);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 14px rgba(0,0,0,0.3);
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}`,
    angularSnippet: `readonly selectedIndex = signal(0);
setIndex(idx: number) {
  this.selectedIndex.set(idx);
}`
  },

  {
    id: 'input-search',
    category: 'forms',
    namePt: 'Campo de Busca & Inputs',
    nameEn: 'Searchbar & Glass Inputs',
    taglinePt: 'Campos de digitação com transparência e destaque de foco',
    taglineEn: 'Text fields with optical transparency and focused specular glow',
    descPt: 'Campos de texto fluidos que absorvem o fundo atrás deles. Ao focar, ativam uma borda acentuada e uma sombra luminosa sem perder a transparência.',
    descEn: 'Fluid text fields absorbing colors behind them. On focus, they illuminate with an enhanced edge and soft ambient rim glow without losing clarity.',
    classes: [
      { cls: '.search.glass', type: 'Container', descPt: 'Pílula de busca com ícone e input transparente', descEn: 'Search pill with icon and clear input' },
      { cls: '.glass-input', type: 'Elemento', descPt: 'Input de texto genérico com cantos arredondados', descEn: 'Generic text input with rounded glass frame' }
    ],
    htmlSnippet: `<div class="search glass">
  <span>🔍</span>
  <input type="search" placeholder="Buscar componentes..." />
</div>`,
    cssSnippet: `.search {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.2rem;
  --glass-radius: 999px;
}

.search input {
  background: none;
  border: 0;
  outline: 0;
  width: 100%;
  color: #fff;
}

.search input::placeholder {
  color: var(--text-dim);
}`,
    angularSnippet: `query = signal('');
onSearch(e: Event) {
  this.query.set((e.target as HTMLInputElement).value);
}`
  },

  {
    id: 'cards',
    category: 'surfaces',
    namePt: 'Cartão / Painel de Vidro',
    nameEn: 'Glass Cards & Panels',
    taglinePt: 'Superfícies de contenção elevadas com profundidade óptica',
    taglineEn: 'Elevated containment surfaces with layered optical depth',
    descPt: 'Os cards representam as unidades fundamentais de conteúdo no design Liquid Glass. Eles suportam conteúdo complexo como players multimídia, formulários e métricas.',
    descEn: 'Cards represent fundamental content containers in Liquid Glass design. They house complex media players, data metrics, and structured layouts.',
    classes: [
      { cls: '.panel.glass', type: 'Estrutura', descPt: 'Superfície de vidro com padding confortável e borda especular', descEn: 'Glass surface with generous padding and specular rim' },
      { cls: '.media-card', type: 'Composição', descPt: 'Layout com capa de álbum e controles de reprodução', descEn: 'Layout with album artwork and playback controls' },
      { cls: '.stat-card', type: 'Variante', descPt: 'Cartão de estatística com indicador de tendência e valor grande', descEn: 'Metric card with trend indicator and bold typography' }
    ],
    htmlSnippet: `<div class="panel glass">
  <h3>Mídia em Reprodução</h3>
  <div class="media-card">
    <div class="cover"></div>
    <div>
      <h4>Liquid Ambient</h4>
      <p>Apple Music Glass Session</p>
    </div>
  </div>
  <div class="row">
    <button class="btn round glass">⏮</button>
    <button class="btn round primary glass">▶</button>
    <button class="btn round glass">⏭</button>
  </div>
</div>`,
    cssSnippet: `.panel {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.media-card {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cover {
  width: 74px; height: 74px;
  border-radius: 18px;
  background: linear-gradient(135deg, #ff4f8b, #a855f7 55%, #3b82f6);
  box-shadow: 0 8px 20px rgba(0,0,0,0.35);
}`,
    angularSnippet: `@Component({
  template: \`
    <div class="panel glass">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>
  \`
})
export class GlassCardComponent {
  @Input() title = 'Card Title';
  @Input() content = 'Content goes here...';
}`
  },

  {
    id: 'badges',
    category: 'surfaces',
    namePt: 'Badges & Chips de Status',
    nameEn: 'Badges & Status Chips',
    taglinePt: 'Pequenos rótulos luminosos para categorias e metadados',
    taglineEn: 'Small luminous pills for categories, metadata and tags',
    descPt: 'Tags compactas que identificam estados, versões e categorias mantendo a fluidez do plano de fundo.',
    descEn: 'Compact pills identifying states, versions, and tags while preserving background vibrancy.',
    classes: [
      { cls: '.badge.glass', type: 'Elemento', descPt: 'Rótulo em maiúsculas com espaçamento expandido', descEn: 'Uppercase badge with expanded letter spacing' },
      { cls: '.chip.glass', type: 'Interativo', descPt: 'Pílula clicável para tags de filtro', descEn: 'Clickable chip for tag filtering' }
    ],
    htmlSnippet: `<span class="badge glass">Showcase</span>
<span class="chip glass">Backdrop Blur</span>
<span class="chip glass">SVG Refraction</span>`,
    cssSnippet: `.badge {
  display: inline-flex;
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  --glass-radius: 999px;
}

.chip {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  --glass-radius: 999px;
}`,
    angularSnippet: `tags = signal(['Liquid Glass', 'CSS3', 'PWA', 'Angular']);`
  },

  {
    id: 'dock',
    category: 'nav',
    namePt: 'macOS Interactive Dock',
    nameEn: 'macOS Interactive Dock',
    taglinePt: 'Barra de aplicativos estilo dock com ampliação de lente contínua',
    taglineEn: 'macOS-style dock bar with continuous mouse magnification lens',
    descPt: 'Simula o comportamento do Dock do macOS: ao passar o ponteiro, os ícones vizinhos calculam uma curva Gaussiana de proximidade, crescendo e se elevando em tempo real.',
    descEn: 'Simulates the macOS Dock behavior: on pointer move, adjacent icons compute a Gaussian proximity curve, magnifying and elevating in real time.',
    classes: [
      { cls: '.dock.glass', type: 'Barra', descPt: 'Prancha de vidro suspensa na base da tela', descEn: 'Suspended glass shelf at screen bottom' },
      { cls: '.dock-item', type: 'Ícone', descPt: 'Quadrado arredondado com efeito de zoom', descEn: 'Squircle app icon with dynamic scale transform' }
    ],
    htmlSnippet: `<div class="dock glass" (pointermove)="dockMove($event)" (pointerleave)="dockLeave($event)">
  <button class="dock-item">📁</button>
  <button class="dock-item">🌐</button>
  <button class="dock-item">💬</button>
  <button class="dock-item">🎵</button>
</div>`,
    cssSnippet: `.dock {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.7rem 1rem;
  --glass-radius: 30px;
}

.dock-item {
  width: 56px; height: 56px;
  font-size: 1.9rem;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 6px 14px rgba(0,0,0,0.3);
  transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1);
  transform-origin: bottom center;
}`,
    angularSnippet: `dockMove(e: PointerEvent) {
  const dock = e.currentTarget as HTMLElement;
  dock.querySelectorAll<HTMLElement>('.dock-item').forEach(el => {
    const r = el.getBoundingClientRect();
    const d = Math.abs(e.clientX - (r.left + r.width / 2));
    const s = 1 + 0.75 * Math.max(0, 1 - d / 110) ** 2;
    el.style.transform = \`translateY(\${-(s - 1) * 22}px) scale(\${s})\`;
  });
}`
  },

  {
    id: 'navbar',
    category: 'nav',
    namePt: 'Floating Navbar / Barra Superior',
    nameEn: 'Floating Navbar / Top Bar',
    taglinePt: 'Barra de cabeçalho flutuante que se adapta ao scroll da página',
    taglineEn: 'Floating header bar adapting to page scroll and active sections',
    descPt: 'Fixada no topo com borda curvada contínua, permitindo que o conteúdo da página deslize sob ela com efeito de refração e desfoque suave.',
    descEn: 'Fixed at top with continuous curved edges, allowing underlying page content to blur as it scrolls underneath.',
    classes: [
      { cls: '.nav.glass', type: 'Container', descPt: 'Barra principal flutuante centralizada', descEn: 'Main centered floating bar' },
      { cls: '.brand', type: 'Elemento', descPt: 'Logotipo com esfera cromática animada', descEn: 'Brand logo with animated chromatic sphere' },
      { cls: '.nav-links a.active', type: 'Estado', descPt: 'Link selecionado com pílula de vidro destacada', descEn: 'Active link with illuminated glass capsule' }
    ],
    htmlSnippet: `<nav class="nav glass">
  <div class="brand">
    <i></i><span>Liquid Glass</span>
  </div>
  <div class="nav-links">
    <a href="#components" class="active">Componentes</a>
    <a href="#playground">Playground</a>
  </div>
</nav>`,
    cssSnippet: `.nav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: min(960px, 100% - 1.5rem);
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.3rem;
  --glass-radius: 999px;
}`,
    angularSnippet: `activeSection = signal('components');`
  },

  {
    id: 'sheet-modal',
    category: 'overlays',
    namePt: 'Sheet / Modal de Vidro Profundo',
    nameEn: 'Glass Bottom Sheet & Modal Dialog',
    taglinePt: 'Janela de diálogo suspensa com scrim fosco e borda de luz pura',
    taglineEn: 'Suspended dialog window with frosted scrim and pure light rim',
    descPt: 'Cria uma camada de foco imersiva. O scrim escurece e desfoca o plano de fundo suavemente, enquanto a folha surge com animação elástica e raio generoso.',
    descEn: 'Creates an immersive focus layer. The scrim darkens and softly blurs the background, while the glass sheet enters with a spring rise animation.',
    classes: [
      { cls: '.scrim', type: 'Overlay', descPt: 'Fundo escuro translúcido com animação fade', descEn: 'Dark translucent backdrop with fade animation' },
      { cls: '.sheet.glass', type: 'Superfície', descPt: 'Janela modal com desfoque ultra alto (34px)', descEn: 'Modal window with ultra-high blur (34px)' }
    ],
    htmlSnippet: `<div class="scrim" (click)="close()">
  <div class="sheet glass" role="dialog" (click)="$event.stopPropagation()">
    <h3>Sheet de Vidro</h3>
    <p>Conteúdo modal translúcido de alta densidade.</p>
    <button class="btn primary glass" (click)="close()">Fechar</button>
  </div>
</div>`,
    cssSnippet: `.scrim {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  align-items: end;
  justify-items: center;
  background: rgba(5,6,20,0.45);
  animation: fade 0.35s ease;
  padding: 1rem;
}

.sheet {
  width: min(520px, 100%);
  padding: 2rem;
  --glass-blur: 34px;
  --glass-radius: 36px;
  animation: rise 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}`,
    angularSnippet: `isOpen = signal(false);
open() { this.isOpen.set(true); }
close() { this.isOpen.set(false); }`
  },

  {
    id: 'recipe-tokens',
    category: 'tokens',
    namePt: 'Receita Base & Variáveis CSS',
    nameEn: 'Base Recipe & CSS Variables',
    taglinePt: 'A fórmula matemática completa do Liquid Glass da Apple',
    taglineEn: 'The complete mathematical recipe behind Apple Liquid Glass',
    descPt: 'A ilusão de vidro líquido consiste em 4 camadas físicas: 1. Desfoque e saturação de fundo; 2. Tinta translúcida em gradiente 135°; 3. Sombras internas superior e inferior para profundidade; 4. Borda especular construída com CSS mask-composite.',
    descEn: 'The liquid glass illusion consists of 4 physical layers: 1. Backdrop blur & saturation; 2. Translucent 135deg gradient tint; 3. Inset top/bottom shadows for optical depth; 4. Specular rim highlight via CSS mask-composite.',
    classes: [
      { cls: '--glass-blur', type: 'Variável', descPt: 'Intensidade do desfoque (ex: 18px a 34px)', descEn: 'Blur intensity (e.g. 18px to 34px)' },
      { cls: '--glass-sat', type: 'Variável', descPt: 'Saturação de cores sob o vidro (ex: 180%)', descEn: 'Color saturation beneath glass (e.g. 180%)' },
      { cls: '--glass-tint', type: 'Variável', descPt: 'Opacidade da camada branca de base (ex: 0.12)', descEn: 'Opacity of base white tint layer (e.g. 0.12)' },
      { cls: '--glass-spec', type: 'Variável', descPt: 'Brilho da borda especular de luz (ex: 0.55)', descEn: 'Specular edge light rim brilliance (e.g. 0.55)' },
      { cls: '--glass-radius', type: 'Variável', descPt: 'Raio de arredondamento das quinas', descEn: 'Corner curvature border radius' }
    ],
    htmlSnippet: `<div class="minha-caixa glass" style="--glass-blur: 24px; --glass-tint: 0.18;">
  Conteúdo com vidro customizado
</div>`,
    cssSnippet: `:root {
  --glass-blur: 18px;
  --glass-sat: 180%;
  --glass-tint: 0.12;
  --glass-radius: 28px;
  --glass-spec: 0.55;
}

.glass {
  position: relative;
  isolation: isolate;
  border-radius: var(--glass-radius);
  background: linear-gradient(135deg,
    rgba(255,255,255, calc(var(--glass-tint) + 0.06)),
    rgba(255,255,255, calc(var(--glass-tint) * 0.5)));
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255, calc(var(--glass-spec) * 0.9)),
    inset 0 -1px 0 rgba(255,255,255, calc(var(--glass-spec) * 0.18)),
    inset 0 0 22px rgba(255,255,255, 0.06),
    0 18px 40px -12px rgba(0,0,0,0.45);
}

.glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.2px;
  z-index: -1;
  pointer-events: none;
  background: linear-gradient(145deg,
    rgba(255,255,255, var(--glass-spec)) 0%,
    rgba(255,255,255, 0.04) 35%,
    rgba(255,255,255, 0.04) 65%,
    rgba(255,255,255, calc(var(--glass-spec) * 0.7)) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}`,
    angularSnippet: `// Variáveis podem ser injetadas dinamicamente via [style.--glass-blur]="blur() + 'px'"`
  },

  {
    id: 'dynamic-island',
    category: 'widgets',
    namePt: 'Dynamic Island / Pílula Expansível',
    nameEn: 'Dynamic Island / Fluid Pill Widget',
    taglinePt: 'Pílula inteligente de status com animação elástica e indicador de ondas',
    taglineEn: 'Intelligent status capsule with fluid spring expansion and audio waveform',
    descPt: 'Cápsula flutuante que se expande ao interagir ou receber eventos em tempo real. Possui gradiente sutil, ondas de áudio animadas e reflexo óptico que reage ao cursor.',
    descEn: 'Floating capsule expanding on hover or realtime events. Features a subtle tint, animated audio frequency bars, and an optical specular highlight.',
    classes: [
      { cls: '.dynamic-island', type: 'Container', descPt: 'Cápsula de vidro arredondada flutuante', descEn: 'Floating rounded glass capsule' },
      { cls: '.di-icon', type: 'Elemento', descPt: 'Ícone circular em gradiente brilhante', descEn: 'Circular icon with glowing gradient' },
      { cls: '.di-waves', type: 'Animador', descPt: 'Barras de frequência sonora em loop elástico', descEn: 'Audio frequency bars on spring loop' }
    ],
    htmlSnippet: `<div class="dynamic-island glass">
  <div class="di-icon">🎵</div>
  <div class="di-content">
    <strong>Now Playing</strong>
    <small>Spatial Audio • Apple Music</small>
  </div>
  <div class="di-waves">
    <span class="di-wave"></span>
    <span class="di-wave"></span>
    <span class="di-wave"></span>
    <span class="di-wave"></span>
  </div>
</div>`,
    cssSnippet: `.dynamic-island {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.55rem 1.1rem;
  --glass-radius: 999px;
  background: rgba(10, 12, 28, 0.75);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 12px 30px rgba(0,0,0,0.5);
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.dynamic-island:hover {
  transform: scale(1.03);
  padding: 0.8rem 1.5rem;
  box-shadow: 0 0 20px rgba(110,168,255,0.25);
}`,
    angularSnippet: `@Component({
  template: \`
    <div class="dynamic-island glass" [class.expanded]="expanded()" (click)="toggle()">
      <!-- Conteúdo da pílula -->
    </div>
  \`
})
export class DynamicIslandComponent {
  expanded = signal(false);
  toggle() { this.expanded.update(v => !v); }
}`
  },

  {
    id: 'weather',
    category: 'widgets',
    namePt: 'Widget de Clima Liquid Glass',
    nameEn: 'Liquid Glass Weather Widget',
    taglinePt: 'Painel meteorológico translúcido com previsão estendida',
    taglineEn: 'Translucent weather dashboard with extended multi-day forecast',
    descPt: 'Cartão de clima elevado que absorve as cores do céu ou fundo, combinando temperatura em tipografia negrito e pílulas de previsão dos próximos dias.',
    descEn: 'Elevated weather card absorbing atmospheric colors, pairing bold temperature typography with frosted multi-day forecast capsules.',
    classes: [
      { cls: '.weather-card.glass', type: 'Container', descPt: 'Card com gradiente atmosférico sutil', descEn: 'Card with subtle atmospheric gradient' },
      { cls: '.weather-temp', type: 'Tipografia', descPt: 'Temperatura em destaque grande com kerning apertado', descEn: 'Large prominent temperature with tight kerning' },
      { cls: '.weather-day-pill', type: 'Subcomponente', descPt: 'Pílula de previsão diária com desfoque independente', descEn: 'Daily forecast pill with independent blur' }
    ],
    htmlSnippet: `<div class="weather-card glass">
  <div class="weather-top">
    <div>
      <span class="category-tag">São Paulo</span>
      <div class="weather-temp">24°</div>
      <p style="color: var(--text-dim)">Ensolarado com névoa leve</p>
    </div>
    <div class="weather-icon">☀️</div>
  </div>
  <div class="weather-days">
    <div class="weather-day-pill"><span>Hoje</span><strong>24°</strong><span>☀️</span></div>
    <div class="weather-day-pill"><span>Qui</span><strong>22°</strong><span>⛅</span></div>
    <div class="weather-day-pill"><span>Sex</span><strong>19°</strong><span>🌧️</span></div>
    <div class="weather-day-pill"><span>Sáb</span><strong>25°</strong><span>🌤️</span></div>
  </div>
</div>`,
    cssSnippet: `.weather-card {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.8rem;
  --glass-radius: 32px;
  background: linear-gradient(145deg, rgba(59,130,246,0.2), rgba(168,85,247,0.1));
}
.weather-temp {
  font-size: 3.4rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}`,
    angularSnippet: `weatherData = signal({ temp: 24, city: 'São Paulo', condition: 'Sunny' });`
  },

  {
    id: 'control-center',
    category: 'widgets',
    namePt: 'Central de Controle iOS / macOS',
    nameEn: 'iOS & macOS Control Center Grid',
    taglinePt: 'Matriz de botões de alternância rápida com brilho ativo',
    taglineEn: 'Grid of quick toggle switches with luminous active glow aura',
    descPt: 'Grid de atalhos táteis para Wi-Fi, Bluetooth, AirDrop e Modo Escuro. Cada bloco de vidro reage ao toque ativando uma iluminação periférica azul-violeta.',
    descEn: 'Tactile shortcut grid for Wi-Fi, Bluetooth, AirDrop and Dark Mode. Each glass block illuminates with a vibrant blue-violet aura when toggled.',
    classes: [
      { cls: '.control-grid', type: 'Layout', descPt: 'Grade 2x2 responsiva para blocos de atalho', descEn: 'Responsive 2x2 grid for shortcut blocks' },
      { cls: '.control-tile', type: 'Elemento', descPt: 'Bloco de vidro quadrado com ícone e rótulo', descEn: 'Squircle glass tile with icon and label' },
      { cls: '.control-tile.active', type: 'Estado', descPt: 'Estado ativado com gradiente vibrante', descEn: 'Activated state with radiant gradient' }
    ],
    htmlSnippet: `<div class="control-grid">
  <div class="control-tile active" (click)="toggle('wifi')">
    <div class="control-icon">📶</div>
    <div><strong>Wi-Fi</strong><small style="display:block; color:var(--text-dim)">Conectado</small></div>
  </div>
  <div class="control-tile active" (click)="toggle('bt')">
    <div class="control-icon">⚡</div>
    <div><strong>Bluetooth</strong><small style="display:block; color:var(--text-dim)">AirPods Pro</small></div>
  </div>
</div>`,
    cssSnippet: `.control-tile {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 22px;
  cursor: pointer;
  background: rgba(255,255,255,0.09);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.control-tile.active {
  background: linear-gradient(135deg, rgba(110,168,255,0.4), rgba(168,85,247,0.4));
  box-shadow: 0 8px 24px rgba(110,168,255,0.3);
}`,
    angularSnippet: `toggles = signal({ wifi: true, bluetooth: true, airdrop: false });
toggle(key: keyof typeof this.toggles) {
  this.toggles.update(t => ({ ...t, [key]: !t[key] }));
}`
  },

  {
    id: 'activity-rings',
    category: 'widgets',
    namePt: 'Anéis de Atividade / Saúde',
    nameEn: 'Activity & Health Concentric Rings',
    taglinePt: 'Medidores circulares de progresso com glow em neon',
    taglineEn: 'Concentric circular progress meters with neon gradient glow',
    descPt: 'Gráfico inspirado no Apple Watch com 3 anéis concêntricos (Movimento, Exercício, Ficar em Pé) renderizados em SVG sobre uma prancha de vidro límpido.',
    descEn: 'Apple Watch inspired concentric rings (Move, Exercise, Stand) rendered via SVG strokes atop a pure frosted glass plane.',
    classes: [
      { cls: '.activity-card.glass', type: 'Container', descPt: 'Cartão com anéis e lista de métricas', descEn: 'Card housing SVG rings and metric details' },
      { cls: '.ring-val', type: 'Gráfico', descPt: 'Trilha SVG com stroke-dashoffset animado', descEn: 'SVG track with animated stroke-dashoffset' },
      { cls: '.metric-row', type: 'Item', descPt: 'Indicador numérico com ponto colorido', descEn: 'Numerical indicator with colored status dot' }
    ],
    htmlSnippet: `<div class="activity-card glass">
  <div class="activity-rings">
    <svg viewBox="0 0 100 100">
      <circle class="ring-bg" cx="50" cy="50" r="40" />
      <circle class="ring-val ring-move" cx="50" cy="50" r="40" stroke-dasharray="251" stroke-dashoffset="60" />
      <circle class="ring-bg" cx="50" cy="50" r="28" />
      <circle class="ring-val ring-exercise" cx="50" cy="50" r="28" stroke-dasharray="175" stroke-dashoffset="40" />
      <circle class="ring-bg" cx="50" cy="50" r="16" />
      <circle class="ring-val ring-stand" cx="50" cy="50" r="16" stroke-dasharray="100" stroke-dashoffset="15" />
    </svg>
  </div>
  <div class="activity-metrics">
    <div class="metric-row"><span class="metric-dot" style="background:#ff2a6d"></span> <strong>580 / 600</strong> kcal</div>
    <div class="metric-row"><span class="metric-dot" style="background:#05ffa1"></span> <strong>38 / 30</strong> min</div>
    <div class="metric-row"><span class="metric-dot" style="background:#00f0ff"></span> <strong>10 / 12</strong> h</div>
  </div>
</div>`,
    cssSnippet: `.activity-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.6rem;
  --glass-radius: 30px;
}
.ring-move { stroke: #ff2a6d; filter: drop-shadow(0 0 4px #ff2a6d); }
.ring-exercise { stroke: #05ffa1; filter: drop-shadow(0 0 4px #05ffa1); }
.ring-stand { stroke: #00f0ff; filter: drop-shadow(0 0 4px #00f0ff); }`,
    angularSnippet: `moveProgress = signal(580);
exerciseProgress = signal(38);`
  },

  {
    id: 'stepper',
    category: 'forms',
    namePt: 'Stepper / Contador Tátil',
    nameEn: 'Glass Stepper / Counter Control',
    taglinePt: 'Controle de incremento e decremento em pílula de vidro',
    taglineEn: 'Increment and decrement pill control with tactile feedback',
    descPt: 'Alternativa tátil para seleção de quantidades numéricas com botões redondos de clique suave que expandem e iluminam ao pressionar.',
    descEn: 'Tactile quantity selector featuring soft rounded click targets that illuminate and subtly bounce on press.',
    classes: [
      { cls: '.glass-stepper', type: 'Container', descPt: 'Pílula com botões - e + integrados', descEn: 'Pill container integrating - and + action buttons' }
    ],
    htmlSnippet: `<div class="glass-stepper glass">
  <button (click)="count.set(count() - 1)">−</button>
  <span>{{ count() }}</span>
  <button (click)="count.set(count() + 1)">+</button>
</div>`,
    cssSnippet: `.glass-stepper {
  display: inline-flex;
  align-items: center;
  --glass-radius: 999px;
  padding: 4px;
  gap: 0.6rem;
}
.glass-stepper button {
  width: 34px; height: 34px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(255,255,255,0.12);
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.glass-stepper button:hover {
  background: rgba(255,255,255,0.25);
  transform: scale(1.08);
}`,
    angularSnippet: `readonly count = signal(3);`
  },

  {
    id: 'checkbox',
    category: 'forms',
    namePt: 'Glass Checkbox & Radio',
    nameEn: 'Glass Checkbox & Radio Controls',
    taglinePt: 'Caixa de seleção translúcida com ícone luminoso e profundidade',
    taglineEn: 'Translucent checkbox with glowing checkmark and layered depth',
    descPt: 'Substitutos de alta fidelidade para checkboxes nativos. O contorno de luz especular e a animação suave tornam a seleção extremamente satisfatória.',
    descEn: 'High-fidelity replacement for native checkboxes. Specular rim highlight and fluid spring check icon make selection deeply satisfying.',
    classes: [
      { cls: '.glass-checkbox', type: 'Container', descPt: 'Label clicável com alinhamento flexível', descEn: 'Clickable label with flexible alignment' },
      { cls: '.glass-check-box', type: 'Elemento', descPt: 'Quadrado de vidro com sombra chanfrada', descEn: 'Glass squircle with bevel shadow' },
      { cls: '.glass-checkbox.active', type: 'Estado', descPt: 'Gradiente azul-ciano preenchido e iluminado', descEn: 'Filled and illuminated blue-cyan gradient' }
    ],
    htmlSnippet: `<label class="glass-checkbox" [class.active]="checked()" (click)="checked.set(!checked())">
  <span class="glass-check-box">✓</span>
  <span>Habilitar Efeito Refração</span>
</label>`,
    cssSnippet: `.glass-check-box {
  width: 26px; height: 26px;
  border-radius: 8px;
  display: grid; place-items: center;
  background: rgba(255,255,255,0.12);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.glass-checkbox.active .glass-check-box {
  background: linear-gradient(135deg, #3b82f6, #a855f7);
  color: #fff;
  box-shadow: 0 4px 14px rgba(59,130,246,0.4);
}`,
    angularSnippet: `checked = signal(true);`
  },

  {
    id: 'context-menu',
    category: 'overlays',
    namePt: 'Menu de Contexto / Popover',
    nameEn: 'Glass Context Menu & Popover',
    taglinePt: 'Menu flutuante com divisores em vidro e atalhos de teclado',
    taglineEn: 'Floating popup menu with blurred dividers and keyboard shortcut badges',
    descPt: 'Menu suspenso com alto desfoque de fundo e borda nítida de luz, inspirado no visual do macOS Monterey e visionOS.',
    descEn: 'Suspended popup menu with heavy backdrop blur and razor-sharp light rim, styled after macOS and visionOS context menus.',
    classes: [
      { cls: '.glass-menu', type: 'Container', descPt: 'Superfície de menu suspensa com sombra ampla', descEn: 'Suspended menu surface with deep shadow' },
      { cls: '.glass-menu-item', type: 'Item', descPt: 'Linha interativa com efeito de hover suave', descEn: 'Interactive row with gentle hover glass tint' },
      { cls: '.glass-divider', type: 'Separador', descPt: 'Linha de corte ultrafina translúcida', descEn: 'Ultrathin translucent divider line' }
    ],
    htmlSnippet: `<div class="glass-menu glass">
  <div class="glass-menu-item"><span>Duplicar Camada</span><kbd>⌘D</kbd></div>
  <div class="glass-menu-item"><span>Exportar SVG</span><kbd>⇧⌘E</kbd></div>
  <div class="glass-divider"></div>
  <div class="glass-menu-item" style="color:#ff6b8b"><span>Remover</span><kbd>⌫</kbd></div>
</div>`,
    cssSnippet: `.glass-menu {
  display: flex; flex-direction: column;
  min-width: 220px; padding: 0.5rem;
  --glass-radius: 20px;
  background: rgba(20,24,56,0.7);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}
.glass-menu-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.6rem 0.8rem; border-radius: 12px;
  transition: all 0.2s;
}
.glass-menu-item:hover { background: rgba(255,255,255,0.16); }`,
    angularSnippet: `isOpen = signal(true);`
  },

  {
    id: 'toast',
    category: 'overlays',
    namePt: 'Toast / Notificação Flutuante',
    nameEn: 'Glass Toast Notification Pill',
    taglinePt: 'Pílula de status discreta com aura luminosa de confirmação',
    taglineEn: 'Discrete status capsule with luminous confirmation aura',
    descPt: 'Notificação flutuante não intrusiva com indicador de pulso luminoso e borda fosca, ideal para confirmações de ações e alertas de sistema.',
    descEn: 'Non-intrusive floating notification pill with glowing status dot and frosted glass rim, ideal for action confirmations.',
    classes: [
      { cls: '.glass-toast', type: 'Container', descPt: 'Cápsula de aviso arredondada flutuante', descEn: 'Floating rounded status capsule' },
      { cls: '.toast-dot', type: 'Indicador', descPt: 'Ponto ciano com efeito de brilho aura', descEn: 'Cyan status dot with glowing aura effect' }
    ],
    htmlSnippet: `<div class="glass-toast glass">
  <span class="toast-dot"></span>
  <span>Projeto salvo na nuvem com sucesso</span>
  <button class="btn glass" style="padding:0.3rem 0.8rem; font-size:0.75rem">Desfazer</button>
</div>`,
    cssSnippet: `.glass-toast {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.85rem 1.4rem;
  --glass-radius: 999px;
  background: linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06));
  box-shadow: 0 14px 34px rgba(0,0,0,0.4);
}
.toast-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow: 0 0 10px #00f0ff;
}`,
    angularSnippet: `showToast = signal(true);`
  },

  {
    id: 'select-dropdown',
    category: 'forms',
    namePt: 'Select / Dropdown de Vidro',
    nameEn: 'Glass Select & Combobox Dropdown',
    taglinePt: 'Menu seletor suspenso com chevron e opções translúcidas',
    taglineEn: 'Floating selection menu with chevron and frosted options',
    descPt: 'Seletor suspenso customizado que substitui o <select> nativo. Ao abrir, revela uma lista flutuante de opções em vidro pesado (32px blur) com transição elástica e chevron giratório.',
    descEn: 'Custom dropdown replacing the native select. When opened, it reveals a floating list of options with heavy frosted blur (32px), spring pop animation, and rotating chevron.',
    classes: [
      { cls: '.glass-select-wrapper', type: 'Container', descPt: 'Envoltório relativo para posicionamento da lista', descEn: 'Relative wrapper for dropdown list placement' },
      { cls: '.glass-select-trigger', type: 'Gatilho', descPt: 'Botão do select com texto atual e seta chevron', descEn: 'Select trigger button with current label and chevron' },
      { cls: '.glass-select-dropdown', type: 'Menu', descPt: 'Lista suspensa com 32px blur e sombra suave', descEn: 'Floating dropdown list with 32px blur and soft shadow' },
      { cls: '.glass-option.selected', type: 'Estado', descPt: 'Item ativo com gradiente azul/violeta suave', descEn: 'Active option with soft blue/violet gradient' }
    ],
    htmlSnippet: `<div class="glass-select-wrapper" [class.open]="isOpen()">
  <div class="glass-select-trigger glass" (click)="toggle()">
    <span>{{ selected() }}</span>
    <span class="chevron">▼</span>
  </div>
  @if (isOpen()) {
    <div class="glass-select-dropdown glass">
      <div class="glass-option" [class.selected]="selected() === 'Opção 1'" (click)="select('Opção 1')">
        <span>Opção 1</span>
        <span>✓</span>
      </div>
      <div class="glass-option" [class.selected]="selected() === 'Opção 2'" (click)="select('Opção 2')">
        <span>Opção 2</span>
      </div>
    </div>
  }
</div>`,
    cssSnippet: `.glass-select-trigger {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 0.85rem 1.2rem; --glass-radius: 18px; cursor: pointer;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.glass-select-dropdown {
  position: absolute; top: calc(100% + 8px); left: 0; right: 0; z-index: 60;
  padding: 0.5rem; --glass-radius: 20px; --glass-blur: 32px;
  background: rgba(16, 20, 48, 0.85); box-shadow: 0 20px 45px rgba(0,0,0,0.6);
  display: flex; flex-direction: column; gap: 3px;
}`,
    angularSnippet: `readonly selected = signal('Opção 1');
readonly isOpen = signal(false);
toggle() { this.isOpen.update(v => !v); }
select(val: string) {
  this.selected.set(val);
  this.isOpen.set(false);
}`
  },

  {
    id: 'dropzone',
    category: 'forms',
    namePt: 'Dropzone / Upload de Arquivos',
    nameEn: 'Glass File Upload Dropzone',
    taglinePt: 'Área de arrastar e soltar arquivos com borda pontilhada luminosa',
    taglineEn: 'Drag & drop file upload zone with luminous dashed glass frame',
    descPt: 'Área de envio de anexos com contorno pontilhado que acende em azul ciano quando arquivos são arrastados por cima. Exibe pílula de confirmação do arquivo carregado.',
    descEn: 'File drop target with a dashed translucent rim that illuminates cyan upon file dragover. Shows confirmation pill for uploaded files.',
    classes: [
      { cls: '.glass-dropzone', type: 'Container', descPt: 'Área de upload com borda dashed e desfoque', descEn: 'Upload drop area with dashed border and blur' },
      { cls: '.glass-dropzone.dragover', type: 'Estado', descPt: 'Destaque luminoso com aura azul ao arrastar', descEn: 'Luminous cyan aura highlight on dragover' },
      { cls: '.uploaded-chip', type: 'Pílula', descPt: 'Badge verde esmeralda com nome do arquivo carregado', descEn: 'Emerald green badge displaying uploaded filename' }
    ],
    htmlSnippet: `<div class="glass-dropzone" [class.dragover]="isDragging()" (click)="fileInput.click()">
  <input #fileInput type="file" style="display:none" (change)="onFile($event)" />
  <div class="dropzone-icon">☁️</div>
  <div class="dropzone-text">
    <strong>Arraste seus arquivos aqui</strong>
    <small>PNG, JPG ou SVG até 25MB</small>
  </div>
  @if (fileName()) {
    <div class="uploaded-chip">📄 {{ fileName() }} ✓</div>
  }
</div>`,
    cssSnippet: `.glass-dropzone {
  width: 100%; padding: 2rem 1.5rem; border-radius: 24px;
  border: 2px dashed rgba(255,255,255,0.22); background: rgba(255,255,255,0.05);
  backdrop-filter: blur(14px); text-align: center; cursor: pointer;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.glass-dropzone:hover, .glass-dropzone.dragover {
  border-color: #6ea8ff; background: rgba(110,168,255,0.12);
  box-shadow: 0 0 28px rgba(110,168,255,0.25);
}`,
    angularSnippet: `fileName = signal<string | null>(null);
onFile(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) this.fileName.set(file.name);
}`
  },

  {
    id: 'validated-input',
    category: 'forms',
    namePt: 'Input com Validação & Senha',
    nameEn: 'Validated Input with Password Toggle',
    taglinePt: 'Campos com alternador de visibilidade e halos de validação',
    taglineEn: 'Form fields with show/hide password toggle and validation halos',
    descPt: 'Campos de formulário modernos com ícone prefixo, botão tátil para exibir/ocultar senha e feedback de validação visual com anel de foco em verde esmeralda (válido) ou vermelho neon (erro).',
    descEn: 'Modern form inputs featuring prefix icons, show/hide password action toggle, and instant feedback rings in emerald green (valid) or neon red (invalid).',
    classes: [
      { cls: '.glass-field-group', type: 'Estrutura', descPt: 'Grupo com label, input e mensagem de erro', descEn: 'Group containing label, input and validation message' },
      { cls: '.glass-input-box', type: 'Container', descPt: 'Caixa de input com sombra chanfrada interna', descEn: 'Input frame with inner beveled shadow' },
      { cls: '.glass-input-box.is-valid', type: 'Estado', descPt: 'Borda e anel esmeralda para dados válidos', descEn: 'Emerald border and ring for valid data' },
      { cls: '.glass-input-box.is-invalid', type: 'Estado', descPt: 'Borda e anel vermelho para erros de preenchimento', descEn: 'Red border and ring for form validation error' }
    ],
    htmlSnippet: `<div class="glass-field-group">
  <label class="glass-field-label">Senha de Acesso</label>
  <div class="glass-input-box is-valid">
    <span class="input-prefix">🔒</span>
    <input [type]="showPassword() ? 'text' : 'password'" value="AppleLiquidGlass2026!" />
    <button class="input-suffix-btn" (click)="showPassword.set(!showPassword())">
      {{ showPassword() ? '👁️' : '🙈' }}
    </button>
  </div>
  <span class="glass-input-msg ok">✓ Senha forte e segura</span>
</div>`,
    cssSnippet: `.glass-input-box {
  display: flex; align-items: center; width: 100%; border-radius: 18px;
  background: rgba(255,255,255,0.08); box-shadow: inset 0 1px 0 rgba(255,255,255,0.35);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.glass-input-box:focus-within {
  background: rgba(255,255,255,0.14);
  box-shadow: 0 0 0 3px rgba(110,168,255,0.35);
}
.glass-input-box.is-valid {
  border: 1px solid rgba(52,211,153,0.6);
  box-shadow: 0 0 0 3px rgba(52,211,153,0.25);
}`,
    angularSnippet: `showPassword = signal(false);`
  },

  {
    id: 'textarea-counter',
    category: 'forms',
    namePt: 'Textarea com Contador de Caracteres',
    nameEn: 'Glass Textarea with Character Counter',
    taglinePt: 'Campo multilinha com profundidade e indicador numérico dinâmico',
    taglineEn: 'Multiline input with optical depth and floating counter pill',
    descPt: 'Campo de texto multilinha com desfoque de fundo e uma pílula flutuante que exibe em tempo real o limite de caracteres consumidos.',
    descEn: 'Multiline textarea with backdrop blur and an embedded floating pill that counts character consumption in real time.',
    classes: [
      { cls: '.glass-textarea-box', type: 'Container', descPt: 'Caixa de texto multilinha arredondada', descEn: 'Rounded multiline input container' },
      { cls: '.glass-counter-pill', type: 'Indicador', descPt: 'Pílula com fonte mono e contagem atual', descEn: 'Mono-font pill showing current character count' }
    ],
    htmlSnippet: `<div class="glass-field-group">
  <label class="glass-field-label">Mensagem / Observação</label>
  <div class="glass-textarea-box">
    <textarea maxlength="200" [value]="text()" (input)="text.set($any($event.target).value)" placeholder="Escreva sua mensagem..."></textarea>
    <span class="glass-counter-pill">{{ text().length }} / 200</span>
  </div>
</div>`,
    cssSnippet: `.glass-textarea-box textarea {
  width: 100%; min-height: 110px; padding: 1rem 1.1rem 2.2rem;
  background: none; border: 0; outline: none; font-size: 0.95rem; color: #fff;
}
.glass-counter-pill {
  position: absolute; bottom: 8px; right: 12px;
  font-family: 'JetBrains Mono', monospace; font-size: 0.72rem;
  padding: 0.2rem 0.55rem; border-radius: 999px; background: rgba(0,0,0,0.3);
}`,
    angularSnippet: `readonly text = signal('Liquid Glass torna qualquer interface fascinante.');`
  },

  {
    id: 'skeleton',
    category: 'feedback',
    namePt: 'Skeleton Shimmer Loader',
    nameEn: 'Glass Skeleton Shimmer Loader',
    taglinePt: 'Placeholders fantasma com onda de luz varrendo a tela',
    taglineEn: 'Ghost placeholders with continuous sweeping light shimmer wave',
    descPt: 'Componentes de carregamento que simulam a anatomia do layout enquanto os dados reais estão sendo carregados. O efeito shimmer cria uma sensação de velocidade e polimento incomparável.',
    descEn: 'Loading placeholders simulating content anatomy while data is being fetched. The specular shimmer wave provides an immediate sense of responsiveness.',
    classes: [
      { cls: '.glass-skeleton-card', type: 'Container', descPt: 'Card placeholder com blur e layout estruturado', descEn: 'Placeholder card with blur and structured layout' },
      { cls: '.glass-skeleton', type: 'Elemento', descPt: 'Bloco cinza com animação contínua de luz', descEn: 'Gray block with continuous light sweep animation' },
      { cls: '.skeleton-avatar', type: 'Forma', descPt: 'Círculo para simular fotos de perfil', descEn: 'Circle simulating user avatar' },
      { cls: '.skeleton-title / .skeleton-line', type: 'Tipografia', descPt: 'Linhas horizontais de texto em carregamento', descEn: 'Horizontal placeholder lines of loading text' }
    ],
    htmlSnippet: `<div class="glass-skeleton-card glass">
  <div class="skeleton-row">
    <div class="glass-skeleton skeleton-avatar"></div>
    <div style="flex: 1; display: flex; flex-direction: column; gap: 0.4rem;">
      <div class="glass-skeleton skeleton-title"></div>
      <div class="glass-skeleton skeleton-line short"></div>
    </div>
  </div>
  <div class="glass-skeleton skeleton-line"></div>
  <div class="glass-skeleton skeleton-line short"></div>
</div>`,
    cssSnippet: `.glass-skeleton {
  position: relative; overflow: hidden;
  border-radius: 8px; background: rgba(255,255,255,0.08);
}
.glass-skeleton::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: shimmer-sweep 1.8s infinite;
}
@keyframes shimmer-sweep {
  from { transform: translateX(-100%); }
  to { transform: translateX(200%); }
}`,
    angularSnippet: `loading = signal(true);
// Após carregamento: loading.set(false);`
  },

  {
    id: 'progress-bar',
    category: 'feedback',
    namePt: 'Barra de Progresso Líquida',
    nameEn: 'Liquid Linear Progress Bar',
    taglinePt: 'Barra de conclusão horizontal com gradiente neon e brilho difuso',
    taglineEn: 'Horizontal completion bar with neon gradient and soft blur glow',
    descPt: 'Indicador de progresso fluido para uploads, etapas de onboarding e conclusões de tarefas. O gradiente azul-ciano desliza dentro de um trilho de vidro fosco.',
    descEn: 'Fluid progress indicator for uploads, onboarding steps, and completion states. The blue-cyan gradient fills smoothly inside an inset frosted track.',
    classes: [
      { cls: '.glass-progress-wrapper', type: 'Container', descPt: 'Agrupador de labels, porcentagem e barra', descEn: 'Wrapper for labels, percentage, and track' },
      { cls: '.glass-progress-track', type: 'Trilho', descPt: 'Canal de vidro chanfrado interno', descEn: 'Beveled inset glass track' },
      { cls: '.glass-progress-bar', type: 'Preenchimento', descPt: 'Barra com gradiente tricolor e sombra de luz', descEn: 'Bar with tricolor gradient and luminous shadow' }
    ],
    htmlSnippet: `<div class="glass-progress-wrapper">
  <div class="progress-meta">
    <span>Sincronizando Arquivos</span>
    <span>{{ progress() }}%</span>
  </div>
  <div class="glass-progress-track">
    <div class="glass-progress-bar" [style.width.%]="progress()"></div>
  </div>
</div>`,
    cssSnippet: `.glass-progress-track {
  width: 100%; height: 12px; border-radius: 999px; overflow: hidden;
  background: rgba(255,255,255,0.12); box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
}
.glass-progress-bar {
  height: 100%; border-radius: 999px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4 50%, #34d399);
  box-shadow: 0 0 14px rgba(6,182,212,0.5);
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}`,
    angularSnippet: `readonly progress = signal(72);`
  },

  {
    id: 'spinner',
    category: 'feedback',
    namePt: 'iOS Activity Indicator / Spinner',
    nameEn: 'iOS Glass Activity Indicator Spinner',
    taglinePt: 'Indicador radial estilo Apple com palhetas translúcidas pulsantes',
    taglineEn: 'Apple-style radial indicator with pulsing translucent blades',
    descPt: 'Clássico indicador de atividade do iOS e macOS construído inteiramente com CSS e transformações geométricas de 8 palhetas que pulsam sequencialmente.',
    descEn: 'Classic iOS and macOS activity indicator built purely with CSS and geometric rotations of 8 radial blades pulsing in sequence.',
    classes: [
      { cls: '.glass-spinner', type: 'Container', descPt: 'Quadrado relativo onde as palhetas orbitam', descEn: 'Relative frame where blades orbit' },
      { cls: '.spinner-blade', type: 'Elemento', descPt: 'Palheta arredondada com animação sequencial', descEn: 'Rounded blade with sequential fade animation' }
    ],
    htmlSnippet: `<div class="glass-spinner" aria-label="Carregando">
  <span class="spinner-blade"></span><span class="spinner-blade"></span>
  <span class="spinner-blade"></span><span class="spinner-blade"></span>
  <span class="spinner-blade"></span><span class="spinner-blade"></span>
  <span class="spinner-blade"></span><span class="spinner-blade"></span>
</div>`,
    cssSnippet: `.glass-spinner {
  position: relative; width: 36px; height: 36px; display: inline-block;
}
.spinner-blade {
  position: absolute; left: 45%; top: 0; width: 10%; height: 28%; border-radius: 999px;
  background: rgba(255,255,255,0.85); transform-origin: center 180%;
  animation: blade-fade 1s linear infinite;
}`,
    angularSnippet: `isLoading = signal(true);`
  },

  {
    id: 'alert',
    category: 'feedback',
    namePt: 'Banners de Alerta Inline',
    nameEn: 'Inline Glass Status Alerts',
    taglinePt: 'Avisos contextuais com cores neon sutis e bordas de luz',
    taglineEn: 'Contextual notification banners with subtle neon tints and light rims',
    descPt: 'Banners de status para informar erros, sucessos e avisos importantes sem interromper a navegação do usuário. Usam fundos saturados e desfoque suave.',
    descEn: 'Status banners informing errors, success milestones, and critical warnings without breaking flow, utilizing saturated glass tints.',
    classes: [
      { cls: '.glass-alert', type: 'Base', descPt: 'Banner com 16px blur e contorno translúcido', descEn: 'Banner with 16px blur and translucent outline' },
      { cls: '.alert-info', type: 'Variante', descPt: 'Tons de azul ciano para avisos informativos', descEn: 'Cyan blue tint for informational notices' },
      { cls: '.alert-success', type: 'Variante', descPt: 'Tons de verde esmeralda para confirmações', descEn: 'Emerald green tint for success confirmations' },
      { cls: '.alert-warning', type: 'Variante', descPt: 'Tons de âmbar dourado para avisos de atenção', descEn: 'Golden amber tint for cautionary alerts' }
    ],
    htmlSnippet: `<div class="glass-alert info">
  <span class="alert-icon">ℹ️</span>
  <div class="alert-body">
    <strong>Nova Atualização Disponível</strong>
    <span>Recursos adicionais foram implementados com sucesso.</span>
  </div>
</div>

<div class="glass-alert success">
  <span class="alert-icon">✓</span>
  <div class="alert-body">
    <strong>Operação Concluída</strong>
    <span>Seus dados foram sincronizados na nuvem.</span>
  </div>
</div>`,
    cssSnippet: `.glass-alert {
  display: flex; align-items: flex-start; gap: 0.9rem; padding: 1rem 1.3rem;
  border-radius: 20px; backdrop-filter: blur(16px);
}
.glass-alert.info {
  background: rgba(59,130,246,0.18); border: 1px solid rgba(59,130,246,0.45);
}
.glass-alert.success {
  background: rgba(52,211,153,0.18); border: 1px solid rgba(52,211,153,0.45);
}`,
    angularSnippet: `showAlert = signal(true);`
  },

  {
    id: 'breadcrumbs',
    category: 'nav',
    namePt: 'Breadcrumbs / Trilho de Navegação',
    nameEn: 'Glass Breadcrumbs Trail',
    taglinePt: 'Hierarquia de páginas em pílula translúcida contínua',
    taglineEn: 'Page hierarchy inside continuous translucent glass pill',
    descPt: 'Barra em formato de pílula que indica a localização do usuário na estrutura do site. Possui separadores com baixa opacidade e hover suave.',
    descEn: 'Pill-shaped trail indicating user position across the site structure, featuring low-opacity chevron dividers and hover feedback.',
    classes: [
      { cls: '.glass-breadcrumbs', type: 'Container', descPt: 'Pílula de navegação com cantos arredondados', descEn: 'Pill navigation capsule with rounded ends' },
      { cls: '.breadcrumb-item', type: 'Link', descPt: 'Item clicável com transição de luminosidade', descEn: 'Clickable route item with luminosity transition' },
      { cls: '.breadcrumb-sep', type: 'Separador', descPt: 'Seta sutil separadora entre níveis', descEn: 'Subtle separator arrow between path levels' }
    ],
    htmlSnippet: `<nav class="glass-breadcrumbs glass" aria-label="Breadcrumb">
  <a href="#hero" class="breadcrumb-item">Início</a>
  <span class="breadcrumb-sep">/</span>
  <a href="#components" class="breadcrumb-item">Componentes</a>
  <span class="breadcrumb-sep">/</span>
  <span class="breadcrumb-item active">Liquid Glass</span>
</nav>`,
    cssSnippet: `.glass-breadcrumbs {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.5rem 1rem; --glass-radius: 999px; font-size: 0.85rem;
}
.breadcrumb-item { color: var(--text-dim); text-decoration: none; }
.breadcrumb-item:hover, .breadcrumb-item.active { color: #fff; }`,
    angularSnippet: `routes = signal(['Início', 'Showcase', 'Componentes']);`
  },

  {
    id: 'pagination',
    category: 'nav',
    namePt: 'Paginação em Pílulas de Vidro',
    nameEn: 'Glass Pill Pagination Controls',
    taglinePt: 'Controles numéricos de página com cápsula de destaque ativa',
    taglineEn: 'Numeric page selectors with glowing active capsule highlight',
    descPt: 'Controle de navegação de páginas compacto onde os botões circulares revelam bordas suaves e a página atual é envolvida por um gradiente azul-violeta.',
    descEn: 'Compact multi-page navigation where circular buttons reveal soft glass rims and the current page is wrapped in radiant blue-violet.',
    classes: [
      { cls: '.glass-pagination', type: 'Container', descPt: 'Barra arredondada para botões de paginação', descEn: 'Rounded tray for pagination pills' },
      { cls: '.page-pill', type: 'Botão', descPt: 'Círculo de número com hover sutil', descEn: 'Numbered circle with soft hover' },
      { cls: '.page-pill.active', type: 'Estado', descPt: 'Página selecionada com gradiente e aura', descEn: 'Active page with luminous gradient and aura' }
    ],
    htmlSnippet: `<div class="glass-pagination glass">
  <button class="page-pill" aria-label="Anterior">‹</button>
  <button class="page-pill" [class.active]="page() === 1" (click)="page.set(1)">1</button>
  <button class="page-pill" [class.active]="page() === 2" (click)="page.set(2)">2</button>
  <button class="page-pill" [class.active]="page() === 3" (click)="page.set(3)">3</button>
  <button class="page-pill" aria-label="Próximo">›</button>
</div>`,
    cssSnippet: `.glass-pagination {
  display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.4rem; --glass-radius: 999px;
}
.page-pill {
  min-width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center;
  font-size: 0.85rem; font-weight: 600; color: var(--text-dim);
}
.page-pill.active {
  color: #fff; background: linear-gradient(135deg, rgba(110,168,255,0.45), rgba(168,85,247,0.45));
  box-shadow: 0 4px 12px rgba(110,168,255,0.3);
}`,
    angularSnippet: `readonly page = signal(2);`
  },

  {
    id: 'tooltip',
    category: 'overlays',
    namePt: 'Tooltip / Balão de Dica Flutuante',
    nameEn: 'Glass Floating Tooltip Popover',
    taglinePt: 'Micro-balão explicativo com ponta e desfoque óptico 20px',
    taglineEn: 'Explanatory micro-bubble with pointer arrow and 20px optical blur',
    descPt: 'Dica contextual que surge suavemente ao repousar o ponteiro sobre qualquer elemento interativo. Possui seta direcional e fundo em vidro escuro de alto contraste.',
    descEn: 'Contextual tooltip gliding smoothly into view on hover, equipped with a directional caret and high-contrast frosted glass surface.',
    classes: [
      { cls: '.glass-tooltip-wrapper', type: 'Container', descPt: 'Envoltório relativo para disparo ao passar o mouse', descEn: 'Relative anchor triggering tooltip on hover' },
      { cls: '.tooltip-bubble', type: 'Balão', descPt: 'Caixa flutuante com sombra profunda e seta', descEn: 'Floating bubble with deep shadow and pointer arrow' }
    ],
    htmlSnippet: `<div class="glass-tooltip-wrapper">
  <button class="btn glass">Passe o Mouse Aqui</button>
  <div class="tooltip-bubble">✦ Efeito Liquid Glass da Apple</div>
</div>`,
    cssSnippet: `.glass-tooltip-wrapper { position: relative; display: inline-flex; }
.tooltip-bubble {
  position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%);
  padding: 0.45rem 0.85rem; border-radius: 12px; font-size: 0.78rem; font-weight: 600;
  background: rgba(14, 18, 44, 0.9); backdrop-filter: blur(20px);
  opacity: 0; pointer-events: none; transition: opacity 0.25s, transform 0.25s;
}
.glass-tooltip-wrapper:hover .tooltip-bubble { opacity: 1; transform: translateX(-50%) translateY(-3px); }`,
    angularSnippet: `// O tooltip é acionado nativamente via CSS :hover sem necessidade de JavaScript extra!`
  },

  {
    id: 'data-table',
    category: 'surfaces',
    namePt: 'Tabela de Dados Liquid Glass',
    nameEn: 'Liquid Glass Data Table',
    taglinePt: 'Tabela com cabeçalho congelado, desfoque óptico e hover luminoso',
    taglineEn: 'Table with sticky frosted header, optical blur and luminous row hover',
    descPt: 'Estrutura tabular elevada para dashboards e relatórios. O cabeçalho possui desfoque pesado (20px), permitindo que as linhas passem suavemente por baixo dele ao rolar.',
    descEn: 'Elevated tabular layout for dashboards and analytics. The sticky header features 20px frosted blur, allowing table rows to glide underneath smoothly during scroll.',
    classes: [
      { cls: '.glass-table-wrapper', type: 'Container', descPt: 'Envoltório de vidro com cantos suaves e sombra', descEn: 'Glass wrapper with smooth corners and ambient shadow' },
      { cls: '.glass-table', type: 'Tabela', descPt: 'Tabela com tipografia ajustada e bordas sutis', descEn: 'Table with aligned typography and subtle dividers' },
      { cls: '.status-pill', type: 'Badge', descPt: 'Pílula de status (paid, pending, failed)', descEn: 'Status pill (paid, pending, failed)' }
    ],
    htmlSnippet: `<div class="glass-table-wrapper">
  <table class="glass-table">
    <thead>
      <tr>
        <th>Cliente</th>
        <th>Serviço</th>
        <th>Valor</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Apple Inc.</strong></td>
        <td>Design System</td>
        <td>$14,250</td>
        <td><span class="status-pill paid">Pago ✓</span></td>
      </tr>
      <tr>
        <td><strong>OpenAI</strong></td>
        <td>Frontend Architecture</td>
        <td>$9,800</td>
        <td><span class="status-pill pending">Pendente</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssSnippet: `.glass-table-wrapper {
  width: 100%; border-radius: 22px; overflow: hidden;
  background: rgba(255,255,255,0.05); backdrop-filter: blur(16px);
}
.glass-table thead th {
  position: sticky; top: 0; padding: 1rem 1.2rem;
  background: rgba(14, 18, 44, 0.75); backdrop-filter: blur(20px);
}
.glass-table tbody tr:hover { background: rgba(255,255,255,0.09); }`,
    angularSnippet: `users = signal([
  { name: 'Apple Inc.', amount: '$14,250', status: 'paid' },
  { name: 'OpenAI', amount: '$9,800', status: 'pending' },
]);`
  },

  {
    id: 'kpi-card',
    category: 'surfaces',
    namePt: 'KPI Card com Mini-Gráfico Sparkline',
    nameEn: 'KPI Metric Card with Sparkline Curve',
    taglinePt: 'Métrica de destaque com indicador percentual e gráfico SVG',
    taglineEn: 'Prominent metric with percentage badge and SVG area sparkline',
    descPt: 'Cartão de estatística de alta conversão para painéis executivos. Apresenta tipografia em escala display, badge de tendência verde/vermelha e mini curva de desempenho vetorial.',
    descEn: 'High-conversion metric card for executive dashboards. Displays large display typography, green/red trend badge, and vector sparkline performance curve.',
    classes: [
      { cls: '.kpi-card', type: 'Container', descPt: 'Cartão de vidro com gradiente suave', descEn: 'Glass card with subtle lighting gradient' },
      { cls: '.kpi-value', type: 'Tipografia', descPt: 'Valor numérico em negrito e alto impacto', descEn: 'Bold high-impact numeric metric value' },
      { cls: '.kpi-trend.up', type: 'Badge', descPt: 'Badge verde de crescimento percentual', descEn: 'Green growth percentage badge' },
      { cls: '.spark-line', type: 'SVG', descPt: 'Traço luminoso com sombra difusa ciano', descEn: 'Luminous stroke with diffuse cyan glow' }
    ],
    htmlSnippet: `<div class="kpi-card glass">
  <div class="kpi-header">
    <span class="kpi-title">Receita Mensal</span>
    <span class="kpi-trend up">↑ 18.4%</span>
  </div>
  <div class="kpi-value">$128,450</div>
  <svg class="kpi-sparkline-svg" viewBox="0 0 200 50">
    <path class="spark-line" d="M 0,40 Q 40,35 70,25 T 130,28 T 200,8" />
  </svg>
</div>`,
    cssSnippet: `.kpi-card {
  padding: 1.5rem; --glass-radius: 26px;
  background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03));
}
.kpi-value { font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em; }
.spark-line {
  fill: none; stroke: #38bdf8; stroke-width: 2.5;
  filter: drop-shadow(0 2px 6px rgba(56,189,248,0.5));
}`,
    angularSnippet: `metric = signal({ title: 'Receita Mensal', value: '$128,450', trend: 18.4 });`
  },

  {
    id: 'avatar-group',
    category: 'surfaces',
    namePt: 'Avatar & Avatar Group (Pilha)',
    nameEn: 'Glass Avatar & Stacked User Group',
    taglinePt: 'Avatares sobrepostos com anel especular e status online',
    taglineEn: 'Overlapping user avatars with specular rim and online status dot',
    descPt: 'Componente para equipes, colaboradores ou membros ativos. O agrupamento usa margem negativa para criar sobreposição fluida com borda de recorte nítida.',
    descEn: 'Component for teams, collaborators, or active room members. Grouping utilizes negative margin for overlapping layout with crisp specular outline.',
    classes: [
      { cls: '.glass-avatar-group', type: 'Container', descPt: 'Agrupador de avatares com alinhamento horizontal', descEn: 'Avatar wrapper with horizontal alignment' },
      { cls: '.glass-avatar', type: 'Item', descPt: 'Círculo com borda de luz e hover elevatório', descEn: 'Circle with light rim and elevation hover' },
      { cls: '.avatar-status-dot', type: 'Indicador', descPt: 'Ponto verde com brilho indicador de presença', descEn: 'Green dot with glow indicating online status' }
    ],
    htmlSnippet: `<div class="glass-avatar-group">
  <div class="glass-avatar" style="background: linear-gradient(135deg, #3b82f6, #06b6d4)">
    JD
    <span class="avatar-status-dot"></span>
  </div>
  <div class="glass-avatar" style="background: linear-gradient(135deg, #a855f7, #ff4f8b)">
    AL
  </div>
  <div class="glass-avatar" style="background: linear-gradient(135deg, #f59e0b, #ef4444)">
    MR
  </div>
  <div class="glass-avatar counter">+4</div>
</div>`,
    cssSnippet: `.glass-avatar {
  position: relative; width: 44px; height: 44px; border-radius: 50%;
  margin-left: -12px; display: grid; place-items: center; font-weight: 700;
  box-shadow: 0 4px 12px rgba(0,0,0,0.35); border: 2px solid #0b0d1f;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
.glass-avatar:hover { transform: translateY(-4px) scale(1.1); z-index: 10; }`,
    angularSnippet: `users = signal(['JD', 'AL', 'MR', 'SK']);`
  },

  {
    id: 'accordion',
    category: 'surfaces',
    namePt: 'Accordion / Colapsável de Vidro',
    nameEn: 'Glass Accordion & Expandable FAQ',
    taglinePt: 'Sanfona expansível com chevron e transição fluida',
    taglineEn: 'Expandable panel with rotating chevron and fluid spring transition',
    descPt: 'Permite exibir e ocultar seções ricas de conteúdo. O item ativo se ilumina suavemente com gradiente e gira a seta indicadora em 180° com transição elástica.',
    descEn: 'Allows toggling dense content sections. The open item illuminates with a soft gradient and rotates the indicator arrow 180deg with elastic timing.',
    classes: [
      { cls: '.glass-accordion', type: 'Container', descPt: 'Lista vertical de itens de sanfona', descEn: 'Vertical list of accordion items' },
      { cls: '.accordion-item', type: 'Item', descPt: 'Bloco de vidro independente', descEn: 'Independent glass block' },
      { cls: '.accordion-item.open', type: 'Estado', descPt: 'Item expandido com iluminação de borda', descEn: 'Expanded item with illuminated edge' },
      { cls: '.accordion-trigger', type: 'Gatilho', descPt: 'Barra de título clicável com chevron', descEn: 'Clickable header trigger with chevron' }
    ],
    htmlSnippet: `<div class="glass-accordion">
  <div class="accordion-item" [class.open]="openIndex() === 0">
    <div class="accordion-trigger" (click)="toggle(0)">
      <span>O que é o Liquid Glass da Apple?</span>
      <span class="chevron">▼</span>
    </div>
    @if (openIndex() === 0) {
      <div class="accordion-content">
        É um material de design que simula propriedades ópticas reais de vidro, incluindo desfoque de fundo, refração e bordas especulares.
      </div>
    }
  </div>
</div>`,
    cssSnippet: `.accordion-item {
  border-radius: 18px; background: rgba(255,255,255,0.06);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.accordion-item.open {
  background: rgba(255,255,255,0.12);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.accordion-trigger .chevron { transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
.accordion-item.open .accordion-trigger .chevron { transform: rotate(180deg); }`,
    angularSnippet: `openIndex = signal<number | null>(0);
toggle(idx: number) {
  this.openIndex.set(this.openIndex() === idx ? null : idx);
}`
  },

  {
    id: 'timeline',
    category: 'surfaces',
    namePt: 'Timeline / Histórico de Eventos',
    nameEn: 'Glass Timeline & Activity Feed',
    taglinePt: 'Trilho vertical com nós de vidro e gradiente luminoso',
    taglineEn: 'Vertical activity stream with glowing glass nodes and gradient stem',
    descPt: 'Histórico cronológico de atividades para dashboards, rastreamento de entregas ou logs de sistema. Uma haste vertical em gradiente conecta nós de vidro esféricos.',
    descEn: 'Chronological timeline for dashboards, delivery tracking, or system audit logs. A luminous gradient stem connects glowing glass nodes.',
    classes: [
      { cls: '.glass-timeline', type: 'Container', descPt: 'Trilho vertical com recuo esquerdo', descEn: 'Vertical trail with left indent' },
      { cls: '.timeline-stem', type: 'Haste', descPt: 'Linha guia vertical em gradiente contínuo', descEn: 'Vertical guide line with continuous gradient' },
      { cls: '.timeline-node', type: 'Nó', descPt: 'Esfera de vidro com anel de luz ciano', descEn: 'Glass sphere node with cyan light ring' },
      { cls: '.timeline-date', type: 'Data', descPt: 'Timestamp formatado com tracking expandido', descEn: 'Formatted timestamp with expanded tracking' }
    ],
    htmlSnippet: `<div class="glass-timeline">
  <div class="timeline-stem"></div>
  <div class="timeline-item">
    <div class="timeline-node">✦</div>
    <span class="timeline-date">Hoje, 14:32</span>
    <strong class="timeline-title">Deploy em Produção</strong>
    <p class="timeline-desc">Versão v2.4 do Liquid Glass lançada na CDN global.</p>
  </div>
  <div class="timeline-item">
    <div class="timeline-node">✓</div>
    <span class="timeline-date">Ontem, 18:10</span>
    <strong class="timeline-title">Testes de Desempenho Aprovados</strong>
    <p class="timeline-desc">Taxa sustentada de 60 FPS em telas Retina.</p>
  </div>
</div>`,
    cssSnippet: `.glass-timeline {
  position: relative; display: flex; flex-direction: column; gap: 1.4rem; padding-left: 2rem;
}
.timeline-stem {
  position: absolute; top: 8px; bottom: 8px; left: 9px; width: 2px;
  background: linear-gradient(180deg, #38bdf8, #a855f7, rgba(255,255,255,0.1));
}
.timeline-node {
  position: absolute; left: -2rem; top: 3px; width: 20px; height: 20px;
  border-radius: 50%; background: #0e122c; border: 2px solid #38bdf8;
  box-shadow: 0 0 10px #38bdf8;
}`,
    angularSnippet: `events = signal([
  { date: 'Hoje, 14:32', title: 'Deploy em Produção', desc: 'Versão v2.4 lançada' },
  { date: 'Ontem, 18:10', title: 'Testes Concluídos', desc: '60 FPS estável' }
]);`
  }
];
