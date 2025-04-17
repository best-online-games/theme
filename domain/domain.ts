namespace $ {
	export class $horrorgamelanding_domain extends $hyoo_crus_entity.with({
		Emails: $hyoo_crus_list_ref_to(() => $horrorgamelanding_email),
	}) {
		@$mol_mem
		emails_list() {
			console.log('0.09001: Getting emails list')
			const list = this.Emails()?.items() ?? []
			console.log('0.09002: Emails list:', list)
			return list
		}

		@$mol_mem_key
		email(id: $mol_int62_string) {
			console.log('0.09003: Getting email by id:', id)
			const email = this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $horrorgamelanding_email)
			console.log('0.09004: Email node created:', email)
			return email
		}

		@$mol_mem
		emails() {
			console.log('0.09005: Getting sorted emails')
			const list = this.emails_list()
			console.log('0.09006: Emails list retrieved:', list)
			return list
		}

		@$mol_mem_key
		email_public(id: $mol_int62_string, next?: boolean) {
			console.log('0.09007: Checking email public status:', id, next)
			const isPublic = this.Emails()?.has(id, next)
			console.log('0.09008: Email public status:', isPublic)
			return isPublic
		}

		email_make() {
			console.log('0.09009: Creating new email')
			const id = this.$.$mol_guid()
			console.log('0.09010: Generated ID:', id)
			const email = this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $horrorgamelanding_email)
			console.log('0.09011: Email node created:', email)
			return email
		}

		@$mol_mem
		static secure_public() {
			console.log('0.09012: Getting secure public key')
			return 'r6g695s7TPi0biQ1c5p3zS8R8a9ol7Cahk9r3tSO3xINtqMlGNjgf0SB0WB-VKz4H3xkTru-99MR6dBlPYqWnc'
		}

		@$mol_mem
		static secure_private() {
			console.log('0.09013: Getting secure private key')
			const sec = this.$.$mol_state_arg.value('secure')
			if (!sec) {
				console.log('0.09014: No secure parameter found')
				return null
			}
			console.log('0.09015: Secure parameter found')
			return this.secure_public() + sec
		}
	}
}
