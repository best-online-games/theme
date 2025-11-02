namespace $.$$ {
    /**
     * Toggle button that cycles through available themes.
     * Requires $bog_theme_auto plugin to be active.
     * Click - cycle to next theme
     * Long press (hold) - show theme picker popup
     */
    export class $bog_theme_toggle extends $.$bog_theme_toggle {
        protected long_press_timer: number | null = null
        protected is_long_press = false

        clicked(event?: MouseEvent) {
            if (!event) return null

            // If it was a long press, don't cycle theme
            if (this.is_long_press) {
                this.is_long_press = false
                return null
            }

            this.theme_auto().theme_next()

            return null
        }

        mouse_down(event?: MouseEvent) {
            if (!event) return null

            this.start_long_press()

            return null
        }

        mouse_up(event?: MouseEvent) {
            if (!event) return null

            this.cancel_long_press()

            return null
        }

        mouse_leave(event?: MouseEvent) {
            if (!event) return null

            this.cancel_long_press()

            return null
        }

        touch_start(event?: TouchEvent) {
            if (!event) return null

            this.start_long_press()

            return null
        }

        touch_end(event?: TouchEvent) {
            if (!event) return null

            this.cancel_long_press()

            return null
        }

        touch_cancel(event?: TouchEvent) {
            if (!event) return null

            this.cancel_long_press()

            return null
        }

        protected start_long_press() {
            this.cancel_long_press()

            this.long_press_timer = this.$.$mol_wait_timeout(this.long_press_timeout(), () => {
                this.is_long_press = true
                this.picker_showed(true)
            })
        }

        protected cancel_long_press() {
            if (this.long_press_timer !== null) {
                this.$.$mol_wait_timeout_cancel(this.long_press_timer)
                this.long_press_timer = null
            }
        }

        destructor() {
            this.cancel_long_press()
            return super.destructor?.()
        }
    }
}
