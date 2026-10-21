export interface ComponentDoc {
  id: string;
  category: 'buttons' | 'forms' | 'surfaces' | 'nav' | 'overlays' | 'tokens';
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
  id: 'all' | 'buttons' | 'forms' | 'surfaces' | 'nav' | 'overlays' | 'tokens';
  labelPt: string;
  labelEn: string;
  icon: string;
}

export const WIKI_CATEGORIES: WikiCategory[] = [
  { id: 'all', labelPt: 'Todos os Componentes', labelEn: 'All Components', icon: '✦' },
  { id: 'buttons', labelPt: 'Botões & Ações', labelEn: 'Buttons & Actions', icon: '🔘' },
  { id: 'forms', labelPt: 'Formulários & Inputs', labelEn: 'Forms & Controls', icon: '🎛️' },
  { id: 'surfaces', labelPt: 'Superfícies & Cards', labelEn: 'Surfaces & Cards', icon: '🃏' },
  { id: 'nav', labelPt: 'Navegação & Barras', labelEn: 'Navigation & Bars', icon: '🧭' },
  { id: 'overlays', labelPt: 'Modais & Overlays', labelEn: 'Modals & Overlays', icon: '🪟' },
  { id: 'tokens', labelPt: 'Tokens & Receita CSS', labelEn: 'Tokens & CSS Recipe', icon: '🧪' },
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
  }
];
