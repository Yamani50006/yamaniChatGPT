import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type promitsState={
    promitMessage: string
}
interface PromitList {
  promitsList:promitsState[]
  addPromit: (message: string) => void

}

 export const usePromitStore = create<PromitList>()(
  devtools(
    persist(
      (set) => ({
        promitsList: [],
        addPromit(message) {
            set((state) => ({
                promitsList: [...state.promitsList, { promitMessage: message }],
            }))
        }
      }),
      {
        name: 'promit-storage',
      },
    ),
  ),
)