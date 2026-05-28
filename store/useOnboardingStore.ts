import {create} from "zustand"


interface Onbarding {
    activeScreen: number
    setActiveScreen : (index: number ) => void 
}

export const useOnboarding = create<Onbarding>((set)=> ({
    activeScreen:0,
    setActiveScreen: (index) => set({activeScreen: index}) 
}))