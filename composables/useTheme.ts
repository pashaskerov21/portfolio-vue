import { ref, onMounted } from 'vue'

export function useTheme() {
  const currentTheme = ref<'light' | 'dark'>('light')

  const setTheme = (theme: 'light' | 'dark') => {
    if (process.client) { // SSR-safe check
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
    }
    currentTheme.value = theme
  }

  const toggleTheme = () => {
    setTheme(currentTheme.value === 'light' ? 'dark' : 'light')
  }

  // SSR zamanı default tema browserdə tətbiq olunsun
  onMounted(() => {
    setTheme(currentTheme.value)
  })

  return { currentTheme, setTheme, toggleTheme }
}
