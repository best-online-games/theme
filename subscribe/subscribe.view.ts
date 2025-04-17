namespace $.$$ {
	export class $horrorgamelanding_subscribe extends $.$horrorgamelanding_subscribe {
		@$mol_mem
		domain() {
			return this.$.$hyoo_crus_glob.home().hall_by($horrorgamelanding_domain, {})
		}

		@$mol_mem
		email(next?: string): string {
			if (next !== undefined) {
				this.$.$mol_state_local.value('horrorgamelanding_subscribe_email', next)
			}
			return this.$.$mol_state_local.value('horrorgamelanding_subscribe_email') ?? ''
		}

		@$mol_mem
		message(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		submit(event?: Event) {
			if (!event) return null

			const email = this.email()
			if (!email) {
				this.message('Please enter your email')
				return null
			}

			const domain = this.domain()
			if (!domain) {
				this.message('Domain not found')
				return null
			}

			const email_node = domain.email_make()
			if (!email_node) {
				this.message('Failed to create email node')
				return null
			}

			email_node.value(email)
			email_node.date(new $mol_time_moment())

			this.message('Thank you for subscribing!')
			this.email('')

			return null
		}
	}
}
