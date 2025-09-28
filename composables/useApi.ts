export const useApi = () => {
  const baseURL = useRuntimeConfig().public.apiBase

  return {
    getInformation: async <T>(): Promise<T> => {
      return await $fetch<T>(`${baseURL}/information`)
    },
    getMenu: async <T>(): Promise<T> => {
      return await $fetch<T>(`${baseURL}/menu`)
    },
    getProjects: async <T>(): Promise<T> => {
      return await $fetch<T>(`${baseURL}/projects`)
    },
    getSkills: async <T>(): Promise<T> => {
      return await $fetch<T>(`${baseURL}/skills`)
    }
  }
}
