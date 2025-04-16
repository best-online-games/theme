namespace $.$$ {
	export class $horrorgamelanding extends $.$horrorgamelanding {
		@$mol_mem
		scroll_to_footer() {
			const footer = this.foot()
			if (footer && footer[0]?.dom_node()) {
				footer[0].dom_node()?.scrollIntoView({ behavior: 'smooth' })
			}
		}

		@$mol_mem
		submit_email() {
			const email = this.email()
			if (!email) return

			// Here you would typically send the email to your backend
			console.log('Email submitted:', email)

			// Clear the input
			this.email('')
		}

		@$mol_mem
		email(next?: string) {
			return next ?? ''
		}
	}
}
