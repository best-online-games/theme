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
        theme_index(next?: number) {
            const stored = this.$.$mol_state_local.value(`${this}.theme_index()`, next)

            // If user hasn't manually selected a theme, detect from system
            if (stored === null && next === undefined) {
                return this.system_theme_index()
            }

            return stored ?? 0
        }

        /**
         * Detect system theme preference and return appropriate theme index
         * Uses $mol_lights() which detects prefers-color-scheme from browser
         */
        @$mol_mem
        system_theme_index(): number {
            const themes = this.themes()
            const prefersLight = this.$.$mol_lights()

            // Try to find light or dark theme based on system preference.
            // Theme names can be customized via view.tree (theme_light/theme_dark).
            const preferredTheme = prefersLight ? this.theme_light() : this.theme_dark()
            const index = themes.indexOf(preferredTheme)

            // If preferred theme found, use it; otherwise default to 0
            return index !== -1 ? index : 0
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
