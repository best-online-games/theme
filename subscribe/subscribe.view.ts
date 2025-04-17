namespace $.$$ {
	export class $horrorgamelanding_subscribe extends $.$horrorgamelanding_subscribe {
		@$mol_mem
		domain() {
			console.log('0.09001: Getting domain')
			const domain = this.$.$hyoo_crus_glob.home().hall_by($horrorgamelanding_domain, {})
			console.log('0.09002: Domain node created:', domain)
			return domain
		}

		@$mol_mem
		email(next?: string): string {
			console.log('0.09003: Getting/setting email:', next)
			if (next !== undefined) {
				console.log('0.09004: Saving email to local state')
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
			console.log('0.09007: Starting submit process')
			if (!event) return null

			const email = this.email()
			console.log('0.09008: Current email:', email)

			if (!email) {
				console.log('0.09009: Email is empty, showing error')
				this.message('Please enter your email')
				return null
			}

			const domain = this.domain()
			console.log('0.09010: Domain retrieved:', domain)

			if (!domain) {
				console.log('0.09011: Domain not found, showing error')
				this.message('Domain not found')
				return null
			}

			console.log('0.09012: Creating new email node')
			const email_node = domain.email_make()
			console.log('0.09013: Email node created:', email_node)

			console.log('0.09014: Setting email value')
			email_node.value(email)
			// email_node.date()
			console.log('0.09015: Email value set')

			console.log('0.09016: Setting success message')
			this.message('Thank you for subscribing!')
			console.log('0.09017: Submit process completed')

			this.email('')

			return null
		}
	}
}
