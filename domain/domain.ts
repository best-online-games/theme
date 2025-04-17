namespace $ {

	export class $horrorgamelanding_domain extends $hyoo_crus_entity.with({
		emails: $hyoo_crus_list_ref_to( ()=> $horrorgamelanding_email ),
	}) {

		@ $mol_mem
		emails_list(): readonly $horrorgamelanding_email[] {
			return this.emails()?.remote_list() ?? []
		}

		@ $mol_mem_key
		email( id: $mol_int62_string ) {
			return this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $horrorgamelanding_email )
		}

		email_make() {
			const emails = this.emails()
			if (!emails) return null
			return emails.remote_make({})
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

} 
