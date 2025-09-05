/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      // Estensioni per griglie personalizzate se necessarie
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  // Safelist per garantire che le classi grid vengano sempre generate
  // Questo risolve il problema delle classi dinamiche che potrebbero non essere incluse nel build
  safelist: [
    // Classi grid base
    'grid',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',

    // Classi grid responsive - Medium screens
    'md:grid-cols-1',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'md:grid-cols-5',
    'md:grid-cols-6',

    // Classi grid responsive - Large screens
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'lg:grid-cols-5',
    'lg:grid-cols-6',

    // Classi grid responsive - Extra large screens
    'xl:grid-cols-1',
    'xl:grid-cols-2',
    'xl:grid-cols-3',
    'xl:grid-cols-4',
    'xl:grid-cols-5',
    'xl:grid-cols-6',

    // Gap utilities per spaziatura (AGGIORNATO)
    'gap-0',
    'gap-1',
    'gap-2',
    'gap-3',
    'gap-4',
    'gap-5',
    'gap-6',
    'gap-7',
    'gap-8',
    'gap-10',
    'gap-12',

    // Margin utilities per le griglie
    'my-4',
    'my-6',
    'my-8',
    'my-12',

    // Classi per il sistema di immagini
    'relative',
    'overflow-hidden',
    'rounded-lg',
    'rounded-xl',
    'rounded-2xl',
    'transition-all',
    'duration-300',
    'hover:scale-105',
    'object-cover',
    'animate-pulse',

    // Classi per stati di loading ed errore
    'bg-gray-200',
    'bg-red-50',
    'border-red-200',
    'text-red-500',
    'text-red-700',
    'text-gray-400',
    'text-gray-600',

    // Classi per layout
    'max-w-full',
    'max-w-4xl',
    'mx-auto',
    'w-full',
    'h-auto',
    'min-h-[200px]',

    // Classi per flexbox (usate nei componenti di errore)
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'text-center',

    // Classi per tipografia
    'text-sm',
    'text-xs',
    'leading-relaxed',
    'break-all',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}