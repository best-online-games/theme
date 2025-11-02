namespace $.$$ {
    /**
     * Toggle button that cycles through available themes.
     * Requires $bog_theme_auto plugin to be active.
     * Click - cycle to next theme
     * Right click / Long press - show theme picker popup
     */
    export class $bog_theme_toggle extends $.$bog_theme_toggle {
        clicked(event?: MouseEvent) {
            if (!event) return null

            this.theme_auto().theme_next()

            return null
        }

        context_menu(event?: MouseEvent) {
            if (!event) return null

            event.preventDefault()
            event.stopPropagation()

            this.picker_showed(true)

            return null
        }
    }
}
