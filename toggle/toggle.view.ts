namespace $.$$ {
    /**
     * Toggle button that cycles through available themes.
     * Click - cycle to next theme
     */
    export class $bog_theme_toggle extends $.$bog_theme_toggle {
        clicked(event?: MouseEvent) {
            if (!event) return null

            this.theme_auto().theme_next()

            return null
        }
    }
}
