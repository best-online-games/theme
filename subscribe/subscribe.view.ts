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
			console.log('0.01: Submit method started')
			if (!event) {
				console.log('0.02: No event provided, returning null')
				return null
			}

			console.log('0.03: Getting email value')
			const email = this.email()
			console.log('0.04: Current email value:', email)
			
			if (!email) {
				console.log('0.05: Email is empty, setting error message')
				this.message('Please enter your email')
				return null
			}

			console.log('0.06: Getting domain')
			const domain = this.domain()
			console.log('0.07: Domain object:', domain)
			
			if (!domain) {
				console.log('0.08: Domain not found, setting error message')
				this.message('Domain not found')
				return null
			}

			console.log('0.09: Creating email node')
			const email_node = domain.email_make()
			console.log('0.10: Email node created:', email_node)
			
			if (!email_node) {
				console.log('0.11: Failed to create email node, setting error message')
				this.message('Failed to create email node')
				return null
			}

			console.log('0.12: Setting email value:', email)
			email_node.value(email)
			
			console.log('0.13: Setting current date')
			email_node.date(new $mol_time_moment())

			console.log('0.14: Setting success message')
			this.message('Thank you for subscribing!')
			
			console.log('0.15: Clearing email field')
			this.email('')

			console.log('0.16: Submit method completed successfully')
			return null
		}
	}
}
