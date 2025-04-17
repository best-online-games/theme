namespace $ {
	export class $horrorgamelanding_domain extends $hyoo_crus_entity.with({
		emails: $hyoo_crus_list_ref_to( ()=> $horrorgamelanding_email ),
	}) {
		@ $mol_mem
		emails_list(): readonly $horrorgamelanding_email[] {
			return this.nodes($hyoo_crus_list_ref_to( ()=> $horrorgamelanding_email ))
				.remote_list() ?? []
		}

		@ $mol_mem_key
		email( id: $mol_int62_string ) {
			return this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $horrorgamelanding_email )
		}

		email_make() {
			console.log('0.09001: Starting email_make method')
			console.log('0.09002: Getting nodes with email list type')
			const nodes = this.nodes($hyoo_crus_list_ref_to( ()=> $horrorgamelanding_email ))
			console.log('0.09003: Nodes object:', nodes)
			
			console.log('0.09004: Creating new email node')
			const result = nodes.remote_make({})
			console.log('0.09005: Email node created:', result)
			
			console.log('0.09006: Email_make method completed')
			return result
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
