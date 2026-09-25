import type { Locale } from '../../lib/i18n/locales';

/**
 * Small flags for the language picker, drawn inline so they look the same everywhere (emoji
 * flags render as two letters on Windows). A flag stands for a language here, not a country:
 * English uses the United Kingdom's, matching the site's British spelling.
 */
export function Flag({ locale, size = 22 }: { locale: Locale; size?: number }) {
  const h = Math.round((size * 2) / 3);
  const common = { width: size, height: h, viewBox: '0 0 30 20', 'aria-hidden': true, focusable: false, className: 'flag' } as const;
  switch (locale) {
    case 'fr':
      return (
        <svg {...common}>
          <rect width="10" height="20" fill="#0055a4" />
          <rect x="10" width="10" height="20" fill="#fff" />
          <rect x="20" width="10" height="20" fill="#ef4135" />
        </svg>
      );
    case 'de':
      return (
        <svg {...common}>
          <rect width="30" height="6.67" fill="#000" />
          <rect y="6.67" width="30" height="6.67" fill="#dd0000" />
          <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
        </svg>
      );
    case 'es':
      return (
        <svg {...common}>
          <rect width="30" height="20" fill="#aa151b" />
          <rect y="5" width="30" height="10" fill="#f1bf00" />
        </svg>
      );
    case 'ja':
      return (
        <svg {...common}>
          <rect width="30" height="20" fill="#fff" />
          <circle cx="15" cy="10" r="6" fill="#bc002d" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          {/* The SVG viewport clips the diagonals, so no clipPath (and no shared id) is needed. */}
          <g>
            <rect width="30" height="20" fill="#012169" />
            <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
            <path d="M0 0l30 20M30 0L0 20" stroke="#c8102e" strokeWidth="1.6" />
            <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
            <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.4" />
          </g>
        </svg>
      );
  }
}
