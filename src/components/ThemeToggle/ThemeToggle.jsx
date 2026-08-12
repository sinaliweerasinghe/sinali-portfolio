import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
    >
      <div className="toggle-track">
        <motion.div
          className="toggle-thumb"
          animate={{
            x: isDark ? 0 : 24,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="toggle-icon">
            {isDark ? '🌙' : '☀️'}
          </span>
        </motion.div>
      </div>
    </motion.button>
  );
}