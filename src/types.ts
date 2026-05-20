export type TabId = 'plan' | 'legal' | 'veille' | 'acteurs'

export interface Tab {
  id: TabId
  label: string
  icon: string
  shortLabel: string
}

export const TABS: Tab[] = [
  { id: 'plan',    icon: '📋', label: 'Plan de Com',    shortLabel: 'Plan'    },
  { id: 'legal',   icon: '⚖️', label: 'Cadre Légal',   shortLabel: 'Légal'   },
  { id: 'veille',  icon: '🔍', label: 'Veille & Outils',shortLabel: 'Veille'  },
  { id: 'acteurs', icon: '👥', label: 'Acteurs',        shortLabel: 'Acteurs' },
]
