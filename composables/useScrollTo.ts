import { useRouter } from 'vue-router'

export function useScrollTo() {
  const router = useRouter()

  const scrollTo = async (targetId: string, event?: Event) => {
    if (event) event.preventDefault()

    // hazırda ana səhifədəsə, scroll et
    if (router.currentRoute.value.path === '/') {
      const element = document.querySelector(targetId) as HTMLElement
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 50
        window.scrollTo({ top, behavior: 'smooth' })
        history.replaceState(null, '', targetId)
      }
    } else {
      // ana səhifəyə yönləndir
      await router.push('/')

      // növbəti tick-də scroll et
      setTimeout(() => {
        const element = document.querySelector(targetId) as HTMLElement
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 50
          window.scrollTo({ top, behavior: 'smooth' })
          history.replaceState(null, '', targetId)
        }
      }, 50)
    }
  }

  return { scrollTo }
}
