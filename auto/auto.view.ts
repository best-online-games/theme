namespace $.$$ {
    /**
     * Theme plugin that cycles through multiple themes.
     * Themes are automatically loaded from $bog_theme_names.
     * Use `theme_next()` to cycle to the next theme.
     */
    export class $bog_theme_auto extends $.$bog_theme_auto {
        /**
         * Default list of all available themes.
         * Override `themes()` to provide custom list.
         */
        themes_default(): readonly $.$bog_theme_name[] {
            return this.$.$bog_theme_names
        }

        @$mol_mem
        theme() {
            const themes = this.themes()
            const index = this.theme_index()

            if (themes.length === 0) return '$mol_theme_light'

            return themes[index % themes.length]
        }

        /**
         * Switch to the next theme in the cycle
         */
        @$mol_action
        theme_next() {
            const themes = this.themes()
            if (themes.length === 0) return

            const current = this.theme_index()
            this.theme_index((current + 1) % themes.length)
        }

        /**
         * Switch to the previous theme in the cycle
         */
        @$mol_action
        theme_prev() {
            const themes = this.themes()
            if (themes.length === 0) return

            const current = this.theme_index()
            this.theme_index(current === 0 ? themes.length - 1 : current - 1)
        }

        /**
         * Set theme by index
         */
        @$mol_action
        theme_set(index: number) {
            const themes = this.themes()
            if (themes.length === 0) return

            this.theme_index(index % themes.length)
        }
    }
}
