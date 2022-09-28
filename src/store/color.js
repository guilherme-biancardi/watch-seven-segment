import { defineStore } from "pinia";

export const useColorState = defineStore('color', {
    state: () => ({
        colors: {
            primary: '#654597',
            secondary: '#9b93b6',
            selected: '#ffffff'
        }
    }),
    getters: {
        getColors: state => state.colors
    },
    actions: {
        setColors(primary, secondary, selected) {
            this.colors = { primary, secondary, selected }
        },
        resetColors() {
            this.colors = {
                primary: '#654597',
                secondary: '#9b93b6',
                selected: '#ffffff'
            }
        }
    },
    persist: true
})