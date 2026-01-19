import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Componente ThemeToggle - Botão para alternar entre tema claro e escuro
 */
const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed z-50 p-3 transition-all duration-300 rounded-full shadow-lg bottom-6 right-6 bg-accent-butter hover:bg-accent-butterStrong hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-oven focus:ring-offset-2 dark:focus:ring-offset-surface-background"
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-brand-chocolate" aria-hidden="true" />
        ) : (
          <Moon className="w-6 h-6 text-brand-chocolate" aria-hidden="true" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
