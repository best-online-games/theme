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

            const filtered = query ? themes.filter(name => name.toLowerCase().includes(query)) : [...themes]

            // Reset focused index when filter changes
            const current = this.focused_index()
            if (current >= filtered.length) {
                console.log('Resetting focused_index from', current, 'to -1 (filtered length:', filtered.length, ')')
                this.focused_index(-1)
            }

            return filtered
        }

        theme_name(index: number) {
            return this.filtered_themes()[index] || ''
        }

        theme_focused(index: number) {
            return this.focused_index() === index
        }

        theme_select(index: number, event?: MouseEvent) {
            if (!event) return null

            const themes = this.filtered_themes()
            const theme_name = themes[index]
            const global_index = this.$.$bog_theme_names.indexOf(theme_name)

            if (global_index !== -1) {
                this.theme_auto().theme_set(global_index)
            }

            // Close popup
            this.close()

            return null
        }

        theme_hover(index: number, event?: PointerEvent) {
            if (!event) return null

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

            console.log('picker key_down:', event.key, 'target:', event.target)

            const themes = this.filtered_themes()
            let current = this.focused_index()

            console.log('current index BEFORE:', current, 'themes count:', themes.length)

            switch (event.key) {
                case 'ArrowDown':
                    console.log('ArrowDown pressed')
                    event.preventDefault()
                    event.stopPropagation()

                    // If focus is on search (-1), start from first item
                    if (current === -1) {
                        current = 0
                    } else {
                        current = current < themes.length - 1 ? current + 1 : 0
                    }

                    console.log('Moving to index:', current)
                    this.focused_index(current)
                    console.log('focused_index AFTER set:', this.focused_index())
                    this.preview_theme(current)
                    break

                case 'ArrowUp':
                    console.log('ArrowUp pressed')
                    event.preventDefault()
                    event.stopPropagation()

                    // If focus is on search (-1), start from last item
                    if (current === -1) {
                        current = themes.length - 1
                    } else {
                        current = current > 0 ? current - 1 : themes.length - 1
                    }

                    console.log('Moving to index:', current)
                    this.focused_index(current)
                    console.log('focused_index AFTER set:', this.focused_index())
                    this.preview_theme(current)
                    break

                case 'Enter':
                    console.log('Enter pressed, current:', current)
                    event.preventDefault()
                    if (current >= 0 && current < themes.length) {
                        this.select_theme(current)
                    }
                    break

                case 'Escape':
                    console.log('Escape pressed')
                    event.preventDefault()
                    this.close()
                    break
            }

            return null
        }

        @$mol_action
        private select_theme(index: number) {
            const themes = this.filtered_themes()
            const theme_name = themes[index]
            const global_index = this.$.$bog_theme_names.indexOf(theme_name)

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
