// styles.ts

export const colors = {
  primary: '#7C3AED', // Tailwind's purple-600
  primaryHover: '#6D28D9',
  borderGray: '#E2E2E2',
  highlightBg: '#F5EFFF',
  highlightBorder: '#BBA5FF',
  inputPlaceholder: '#6B7280', // Tailwind gray-500
  panelBackground: '#F9F5F2',
  black: '#000000',
};

export const textStyles = {
  heading: 'text-3xl font-bold text-gray-900',
  subtext: 'text-gray-600 text-sm',
  button: 'font-medium text-[16px]',
};

export const buttonStyles = {
  primary:
    'w-full py-3 rounded-[12px] text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
  google:
    'w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-[12px] hover:bg-gray-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  outlined: 'w-full py-4 rounded-[12px] border text-center text-[16px] font-medium',
};

export const inputStyles =
  'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-sm';

