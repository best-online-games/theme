namespace $.$$ {
    /**
     * Theme picker popup with search and list
     */
    export class $bog_theme_picker extends $.$bog_theme_picker {
        @$mol_mem
        theme_rows() {
            const themes = this.filtered_themes()
            return themes.map((_, index) => this.Theme_row(index))
        }

        @$mol_mem
        filtered_themes() {
            const query = this.query().toLowerCase().trim()
            const themes = this.$.$bog_theme_names

            return query ? themes.filter(name => name.toLowerCase().includes(query)) : [...themes]
        }

        theme_name(index: number) {
            return this.filtered_themes()[index] || ''
        }

        theme_select(index: number, event?: MouseEvent) {
            if (!event) return null

            console.log('Theme selected (clicked):', index)

            const themes = this.filtered_themes()
            const theme_name = themes[index]
            const global_index = this.$.$bog_theme_names.indexOf(theme_name)

            console.log('Selecting theme:', theme_name, 'global_index:', global_index)

            if (global_index !== -1) {
                this.theme_auto().theme_set(global_index)
            }

            // Close popup
            this.close()

            return null
        }

        theme_hover(index: number, event?: PointerEvent) {
            if (!event) return null

            console.log('Theme hovered:', index)

            const themes = this.filtered_themes()
            const theme_name = themes[index]
            const global_index = this.$.$bog_theme_names.indexOf(theme_name)

            if (global_index !== -1) {
                this.theme_auto().theme_set(global_index)
            }

            // Update focused index on hover
            this.focused_index(index)

            return null
        }

        key_down(event?: KeyboardEvent) {
            if (!event) return null

            console.log('Key down:', event.key)

            const themes = this.filtered_themes()
            const current = this.focused_index()

            switch (event.key) {
                case 'ArrowDown':
                    console.log('ArrowDown pressed, current:', current)
                    event.preventDefault()
                    const next = current < themes.length - 1 ? current + 1 : 0
                    this.focused_index(next)
                    this.preview_theme(next)
                    console.log('Moved to index:', next)
                    break

                case 'ArrowUp':
                    console.log('ArrowUp pressed, current:', current)
                    event.preventDefault()
                    const prev = current > 0 ? current - 1 : themes.length - 1
                    this.focused_index(prev)
                    this.preview_theme(prev)
                    console.log('Moved to index:', prev)
                    break

                case 'Enter':
                    console.log('Enter pressed, current:', current)
                    event.preventDefault()
                    if (current >= 0 && current < themes.length) {
                        this.select_theme(current)
                    }
                    break

                case 'Escape':
                    event.preventDefault()
                    this.close()
                    break
            }

            return null
        }

        @$mol_action
        private select_theme(index: number) {
            console.log('select_theme called with index:', index)

            const themes = this.filtered_themes()
            const theme_name = themes[index]
            const global_index = this.$.$bog_theme_names.indexOf(theme_name)

            console.log('Selecting theme:', theme_name, 'global_index:', global_index)

            if (global_index !== -1) {
                this.theme_auto().theme_set(global_index)
            }

            // Close popup
            this.close()
        }

        @$mol_action
        private preview_theme(index: number) {
            const themes = this.filtered_themes()
            const theme_name = themes[index]
            const global_index = this.$.$bog_theme_names.indexOf(theme_name)

            if (global_index !== -1) {
                this.theme_auto().theme_set(global_index)
            }
        }
    }
}
