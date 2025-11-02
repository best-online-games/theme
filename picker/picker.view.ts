namespace $.$$ {
    /**
     * Theme picker popup with search and list of themes.
     * Shows on long press of theme toggle button.
     */
    export class $bog_theme_picker extends $.$bog_theme_picker {
        @$mol_mem
        themes_filtered() {
            const query = this.query().toLowerCase()
            const themes = this.theme_auto().themes()

            if (!query) return themes

            return themes.filter(theme => theme.toLowerCase().includes(query))
        }

        @$mol_mem
        theme_rows() {
            return this.themes_filtered().map((theme, index) => this.Theme_row(index))
        }

        @$mol_mem_key
        theme_name(index: number) {
            const themes = this.themes_filtered()
            return themes[index] ?? ''
        }

        @$mol_mem_key
        Theme_row(index: number) {
            const item = new this.$.$bog_theme_picker_item()
            const theme = this.theme_name(index)

            // Extract theme name without prefix: $mol_theme_dark -> dark
            item.theme_name = () => theme.replace(/^\$mol_theme_/, '')

            item.focused = () => this.focused_index() === index

            item.click = () => this.theme_select(index)

            // Apply theme on hover
            item.event_mouseenter = () => {
                this.theme_apply(index)
                return null
            }

            return item
        }

        theme_apply(index: number) {
            const theme = this.theme_name(index)
            const auto = this.theme_auto()
            const themes = auto.themes()
            const themeIndex = themes.indexOf(theme as any)

            if (themeIndex !== -1) {
                auto.theme_set(themeIndex)
            }
        }

        theme_select(index: number) {
            this.theme_apply(index)
            this.showed(false)
        }
    }

    export class $bog_theme_picker_item extends $.$bog_theme_picker_item {
        sub() {
            return [this.theme_name()]
        }
    }
}
