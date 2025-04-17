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
		email_node() {
			return this.domain().email_make()
		}

		@$mol_mem
		email(next?: string): string {
			console.log('0.09003: Getting/setting email:', next)
			if (next !== undefined) {
				console.log('0.09004: Setting email value')
				this.email_node().value(next)
			}
			return this.email_node().value() ?? ''
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

			console.log('0.09014: Setting email value')
			this.email_node().value(email)
			this.email_node().date(new $mol_time_moment())
			console.log('0.09015: Email value set')

			console.log('0.09016: Setting success message')
			this.message('Thank you for subscribing!')
			console.log('0.09017: Submit process completed')

			this.email('')

			return null
		}
	}
}
