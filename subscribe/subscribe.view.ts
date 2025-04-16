namespace $ {

	export class $horrorgamelanding_subscribe extends $mol_page {

		@ $mol_mem
		domain() {
			return this.$.$horrorgamelanding_domain.make( this.$.$hyoo_crus_realm.make() )
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

			const email_node = this.domain().email_make()
			email_node.value( email )
			email_node.date( new $mol_time_moment() )

			this.message( 'Thank you for subscribing!' )
			this.email( '' )
			
			return null
		}

	}

} 
