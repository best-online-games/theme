namespace $ {

	export class $horrorgamelanding_domain extends $hyoo_crus_node {

		@ $mol_mem
		emails_node() {
			return this.sub( 'emails', $hyoo_crus_list )
		}
		
		@ $mol_mem
		emails_ids() {
			return this.emails_node().list().map( (id: string) => $mol_int62_string_ensure( id ) ).filter( $mol_guard_defined )
		}

		@ $mol_mem_key
		email( id: $mol_int62_string ) {
			const email = this.world()!.Fund( $horrorgamelanding_email ).Item( id )
			email.steal_rights( this )
			return email
		}

		@ $mol_mem
		emails() {
			return this.emails_ids().map( (id: $mol_int62_string) => this.email( id ) )
		}

		email_make() {
			return this.world()!.Fund( $horrorgamelanding_email ).make()!
		}

		@ $mol_mem
		static secure_public() {
			return 'r6g695s7TPi0biQ1c5p3zS8R8a9ol7Cahk9r3tSO3xINtqMlGNjgf0SB0WB-VKz4H3xkTru-99MR6dBlPYqWnc'
		}

		@ $mol_mem
		static secure_private() {
			const sec = this.$.$mol_state_arg.value( 'secure' )
			if( !sec ) return null
			return this.secure_public() + sec
		}

	}

	$hyoo_crus_node.mixin($horrorgamelanding_domain)

} 
