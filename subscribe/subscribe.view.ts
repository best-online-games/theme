namespace $.$$ {

	export class $horrorgamelanding_subscribe extends $.$horrorgamelanding_subscribe {

		@ $mol_mem
		domain() {
			return this.$.$hyoo_crus_glob.home().hall_by( $horrorgamelanding_domain, {} )
		}

		@ $mol_mem
		email( next?: string ) {
			return next ?? ''
		}

		@ $mol_mem
		message( next?: string ) {
			return next ?? ''
		}

		@ $mol_mem
		submit( event?: Event ) {
			if( !event ) return null
			
			const email = this.email()
			if( !email ) {
				this.message( 'Please enter your email' )
				return null
			}

			const email_node = this.domain()!.email_make()
			email_node.value( email )
			email_node.date( new $mol_time_moment() )

			this.message( 'Thank you for subscribing!' )
			this.email( '' )
			
			return null
		}

	}

} 
