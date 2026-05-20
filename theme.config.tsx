import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
      Gonka Game <span style={{ opacity: 0.5, fontWeight: 400 }}>· Wiki</span>
    </span>
  ),
  project: {
    link: 'https://github.com/psyarcushub/gonka-game-wiki',
  },
  docsRepositoryBase: 'https://github.com/psyarcushub/gonka-game-wiki/tree/main',
  footer: {
    content: (
      <span>
        Gonka Game Wiki — knowledge base for AI Compute Orchestration Layer · 2026
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  color: {
    hue: 320,
    saturation: 70,
  },
  search: {
    placeholder: 'Поиск по wiki…',
  },
  editLink: {
    content: 'Редактировать на GitHub',
  },
  feedback: {
    content: null,
  },
  navigation: {
    prev: true,
    next: true,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Gonka Game Wiki" />
      <meta
        property="og:description"
        content="База знаний по проекту AI Compute Orchestration Layer"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s — Gonka Game Wiki',
    }
  },
}

export default config
