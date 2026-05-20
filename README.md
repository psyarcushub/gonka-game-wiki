# Gonka Game Wiki

База знаний по проекту **AI Compute Orchestration Layer**, развёрнутая как Next.js wiki на [Nextra](https://nextra.site/).

## Стек

- **Next.js 14** (Pages Router)
- **Nextra 3** (theme: `nextra-theme-docs`)
- **MDX** для контента
- **TypeScript**
- Деплой: **Vercel**

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

## Структура

```
pages/
├── index.mdx                          # Главная
├── analysis.mdx                       # Подробный обзор
├── _meta.json                         # Меню верхнего уровня
├── knowledge-base/
│   ├── _meta.json
│   ├── 00-glossary.mdx
│   ├── 01-overview.mdx
│   ├── 02-technical-challenges.mdx
│   ├── 03-architecture.mdx
│   ├── 04-node-lifecycle.mdx
│   ├── 05-network-adapters.mdx
│   ├── 06-economics.mdx
│   ├── 07-game-layer.mdx
│   ├── 08-risks.mdx
│   └── 09-roadmap.mdx
└── source/
    ├── _meta.json
    └── presentation-original.mdx
```

## Деплой

Подключи репозиторий на [Vercel](https://vercel.com/new) — auto-deploy при каждом push в `main`.

## Источник

Презентация: `AI-Compute-Orchestration-Layer-2.pdf` (9 слайдов, RU).
