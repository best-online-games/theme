namespace $.$$ {
	/**
	 * Toggle button that cycles through available themes.
	 * Requires $bog_theme_auto plugin to be active.
	 */
	export class $bog_theme_toggle extends $.$bog_theme_toggle {

		/**
		 * Reference to theme auto plugin.
		 * Should be overridden to point to actual plugin instance.
		 */
		theme_auto(): $bog_theme_auto | null {
			return null
		}

		@$mol_mem
		theme_name() {
			const auto = this.theme_auto()
			if (!auto) return 'No theme plugin'

			const theme = auto.theme()
			// Extract theme name without prefix: $mol_theme_dark -> dark
			return theme.replace(/^\$mol_theme_/, '')
		}

		toggle() {
			const auto = this.theme_auto()
			if (!auto) return

			auto.theme_next()
		}
	}
}
