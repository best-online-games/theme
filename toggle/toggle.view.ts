namespace $.$$ {
    /**
     * Toggle button that cycles through available themes.
     * Click - cycle to next theme
     * Long press - show theme picker popup
     */
    export class $bog_theme_toggle extends $.$bog_theme_toggle {
        // Long press configuration
        long_press_delay = 300 // milliseconds (reduced for testing)
        move_threshold = 8 // pixels

        // Long press state
        private press_timer: ReturnType<typeof setTimeout> | null = null
        private press_start_x = 0
        private press_start_y = 0
        private is_long_press = false

        clicked(event?: MouseEvent) {
            if (!event) return null

            // Don't cycle if long press was triggered
            if (this.is_long_press) {
                this.is_long_press = false
                return null
            }

            this.theme_auto().theme_next()

            return null
        }

        press_start(event?: PointerEvent) {
            if (!event) return null

            // Clear any existing timer
            this.clear_press_timer()

            // Store starting position
            this.press_start_x = event.clientX
            this.press_start_y = event.clientY
            this.is_long_press = false

            // Start long press timer
            this.press_timer = setTimeout(() => {
                this.is_long_press = true
                this.on_long_press()
            }, this.long_press_delay)

            return null
        }

        press_move(event?: PointerEvent) {
            if (!event || !this.press_timer) return null

            // Check if moved too far
            const dx = Math.abs(event.clientX - this.press_start_x)
            const dy = Math.abs(event.clientY - this.press_start_y)

            if (dx > this.move_threshold || dy > this.move_threshold) {
                this.clear_press_timer()
            }

            return null
        }

        press_end(event?: PointerEvent) {
            if (!event) return null

            console.log('press_end triggered, is_long_press:', this.is_long_press)
            this.clear_press_timer()

            return null
        }

        press_cancel(event?: PointerEvent) {
            if (!event) return null

            this.clear_press_timer()

            return null
        }

        press_lost(event?: Event) {
            if (!event) return null

            this.clear_press_timer()

            return null
        }

        private clear_press_timer() {
            if (this.press_timer) {
                clearTimeout(this.press_timer)
                this.press_timer = null
            }
        }

        private on_long_press() {
            // Show popup picker
            console.log('Long press triggered, showing picker')
            this.showed(true)
            console.log('showed set to:', this.showed())
        }

        picker_close() {
            console.log('picker_close called, closing popup')
            this.showed(false)
        }
    }
}
