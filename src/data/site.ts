export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Insights', href: '#insights' },
] as const

export const principles = [
  {
    number: '01',
    title: 'Explore Beyond Boundaries',
    chinese: '跨越既有边界',
    description:
      'We follow meaningful questions wherever they lead, crossing disciplines without being confined by them.',
    glyph: 'orbit',
  },
  {
    number: '02',
    title: 'Build with Clarity',
    chinese: '以清晰和可靠为基础',
    description:
      'We turn complex ideas into dependable tools through deliberate choices, legible systems, and rigorous craft.',
    glyph: 'beam',
  },
  {
    number: '03',
    title: 'Share the Light',
    chinese: '开放分享知识、工具与成果',
    description:
      'Knowledge grows when it moves. We document, open, and share what can help others see further.',
    glyph: 'radiate',
  },
  {
    number: '04',
    title: 'Think in Decades',
    chinese: '重视长期价值',
    description:
      'We favour durable value over temporary attention, creating foundations that remain useful as the world changes.',
    glyph: 'horizon',
  },
] as const

export const projects = [
  {
    kind: 'Open Source',
    title: 'Foundational Tool / 01',
    description:
      'A dependable building block designed to make an essential capability simpler, clearer, and easier to extend.',
    tags: ['Open', 'Reliable', 'Composable'],
    visual: 'grid',
  },
  {
    kind: 'Research Experiment',
    title: 'Emerging Idea / 02',
    description:
      'A focused inquiry into an uncertain space, translating early signals into something concrete enough to examine.',
    tags: ['Explore', 'Prototype', 'Learn'],
    visual: 'wave',
  },
  {
    kind: 'Infrastructure',
    title: 'Shared System / 03',
    description:
      'Quiet infrastructure for people building together—designed around continuity, legibility, and thoughtful defaults.',
    tags: ['Shared', 'Durable', 'Useful'],
    visual: 'nodes',
  },
  {
    kind: 'Creative Initiative',
    title: 'Open Direction / 04',
    description:
      'An open-ended creative programme connecting different perspectives around a question worth staying with.',
    tags: ['Create', 'Connect', 'Evolve'],
    visual: 'arc',
  },
] as const

export const communityRoles = [
  'Builders',
  'Researchers',
  'Designers',
  'Writers',
  'Independent Thinkers',
] as const
