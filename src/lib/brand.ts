/**
 * Typed CSS variable references for programmatic use.
 * All values are CSS var() strings — never hardcoded hex.
 */
export const brand = {
  color: {
    primary:       'var(--color-primary)',
    primaryHover:  'var(--color-primary-hover)',
    primaryDark:   'var(--color-primary-dark)',
    primaryLight:  'var(--color-primary-light)',
    accent:        'var(--color-accent)',
    background:    'var(--color-background)',
    card:          'var(--color-card)',
    cardDark:      'var(--color-card-dark)',
    border:        'var(--color-border)',
    mutedBg:       'var(--color-muted-bg)',
    foreground:    'var(--color-foreground)',
    muted:         'var(--color-muted)',
  },
  radius: {
    sm:   'var(--radius-sm)',
    md:   'var(--radius-md)',
    lg:   'var(--radius-lg)',
    xl:   'var(--radius-xl)',
    '2xl':'var(--radius-2xl)',
    full: 'var(--radius-full)',
  },
  shadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },
} as const;
