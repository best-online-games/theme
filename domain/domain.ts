namespace $ {
	export class $horrorgamelanding_domain extends $hyoo_crus_entity.with({
		Emails: $hyoo_crus_list_ref_to(() => $horrorgamelanding_email), // list of references to Email Model
	}) {
		@$mol_mem
		emails_list() {
			return this.Emails()?.items() ?? []
		}

		@$mol_mem_key
		email(id: $mol_int62_string) {
			const email = this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $horrorgamelanding_email)
			return email
		}

		@$mol_mem
		emails() {
			return this.emails_list()
		}

		@$mol_mem_key
		email_public(id: $mol_int62_string, next?: boolean) {
			return this.Emails()?.has(id, next)
		}

		email_make() {
			const email = this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(this.$.$mol_guid()), $horrorgamelanding_email)
			return email
		}

		@$mol_mem
		static secure_public() {
			return 'r6g695s7TPi0biQ1c5p3zS8R8a9ol7Cahk9r3tSO3xINtqMlGNjgf0SB0WB-VKz4H3xkTru-99MR6dBlPYqWnc'
		}

		@$mol_mem
		static secure_private() {
			const sec = this.$.$mol_state_arg.value('secure')
			if (!sec) return null
			return this.secure_public() + sec
		}
	}
}
