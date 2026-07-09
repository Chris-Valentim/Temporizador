# ⏱️ Temporizador Regressivo

> Um cronômetro regressivo simples, rápido e minimalista — feito em **React** com **TypeScript**. ⚛️

🔗 **Acesse online:** [chris-valentim.github.io/Temporizador](https://chris-valentim.github.io/Temporizador)

---

## 🎯 Intuito do Projeto

Este projeto nasceu como um **estudo prático de React**. O objetivo principal foi conhecer e fixar dois dos hooks mais fundamentais da biblioteca:

- 🪝 **`useState`** — para gerenciar o estado do temporizador (tempo restante e se ele está ativo ou não).
- 🪝 **`useEffect`** — para lidar com o efeito colateral da contagem regressiva (o `setInterval`) e sua devida limpeza (`clearInterval`).

Mais do que entregar um produto final, a proposta foi **aprender na prática** como o React reage a mudanças de estado, como re-renderiza a interface e como controlar efeitos que dependem do tempo. ⏳

---

## 🧠 O que foi aprendido

### 🪝 `useState` — Gerenciando o estado

O componente controla dois estados:

```tsx
const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0); // tempo restante em segundos
const [isActive, setIsActive] = useState(false);                 // se a contagem está rodando
```

A partir do total de segundos, os minutos e segundos são derivados e formatados no padrão `MM:SS`:

```tsx
const minutes = Math.floor(totalTimeInSeconds / 60);
const second = totalTimeInSeconds % 60;
// exibição: {minutes.toString().padStart(2, "0")} : {second.toString().padStart(2, "0")}
```

### 🪝 `useEffect` — Controlando a contagem no tempo

O `useEffect` cria o intervalo que decrementa o tempo a cada **1 segundo**, para a contagem quando chega a zero e — o mais importante — **limpa o intervalo** na função de retorno para evitar vazamentos de memória:

```tsx
useEffect(() => {
  let intervalId: any;
  if (isActive) {
    intervalId = setInterval(() => {
      setTotalTimeInSeconds(totalTimeInSeconds - 1);
    }, 1000);
  }
  if (totalTimeInSeconds === 0) {
    clearInterval(intervalId);
  }
  return () => {
    clearInterval(intervalId); // 🧹 limpeza do efeito
  };
}, [isActive, totalTimeInSeconds]); // 📌 array de dependências
```

---

## ✨ Funcionalidades

| Botão | Ação |
|-------|------|
| ▶️ **START** | Inicia a contagem regressiva |
| ⏸️ **STOP** | Pausa a contagem |
| 🔄 **RESET** | Zera o temporizador |
| ➕ **+30 SECOND** | Adiciona 30 segundos |
| ➕ **+1 MINUTE** | Adiciona 1 minuto |
| ➕ **+5 MINUTES** | Adiciona 5 minutos |

> 💡 Os botões de configuração ficam desabilitados enquanto o temporizador está ativo, evitando alterações durante a contagem.

---

## 🎨 Identidade Visual

### 🔤 Tipografia

As fontes são carregadas via **Google Fonts** e aplicadas com **styled-components**:

| Elemento | Fonte | Peso | Estilo |
|----------|-------|------|--------|
| 🕐 Dígitos do relógio | `Roboto Mono`, `monospace` | 400 | Monoespaçada — mantém os números alinhados e do mesmo tamanho |
| 🔘 Botões | `Montserrat`, `sans-serif` | 700 | Sem serifa — moderna e legível para rótulos |

### 🌈 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| ⬜ Cinza claro | `#E4E4E4` | Fundo da página e divisória |
| 🤍 Off-white | `#F1F1F1` | Fundo do card do temporizador |
| ⬛ Grafite | `#38393D` | Dígitos do relógio |
| 🔵 Azul-petróleo | `#489FB5` | Cor base dos botões |
| 💧 Azul claro | `#52ADC4` | Botões ao passar o mouse (hover) |
| 🌫️ Azul translúcido | `#489FB588` | Botões desabilitados |
| ☁️ Sombra suave | `#6969691F` | Sombras do card e dos botões |

> 🎭 A paleta transmite uma sensação **clean e tranquila**, com tons de cinza neutros e um azul-petróleo como cor de destaque.

---

## 🛠️ Tecnologias

- ⚛️ **React 18** + **TypeScript**
- 💅 **styled-components** — estilização baseada em componentes
- 🔤 **Google Fonts** (Roboto Mono & Montserrat)
- 🏗️ **Create React App** — ferramentas de build
- 🚀 **gh-pages** — deploy no GitHub Pages

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── Timer/
│       ├── index.tsx     # ⏱️ Lógica do temporizador (useState + useEffect)
│       └── styles.tsx    # 🎨 Estilos com styled-components
├── style/
│   └── global.css        # 🌐 Estilos globais (fundo e layout da página)
├── App.tsx               # 🧩 Componente raiz
└── index.tsx             # 🚪 Ponto de entrada da aplicação
```

---

## 🚀 Como executar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo de desenvolvimento
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação. 🌐

### 📦 Outros comandos

```bash
npm run build    # 🏗️ Gera a build de produção na pasta build/
npm run deploy   # 🚀 Publica no GitHub Pages
```

---

## 👤 Autor

Desenvolvido por **Christian Valentim** 💻

Feito com 💙 para aprender React e seus hooks.
