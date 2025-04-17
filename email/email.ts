namespace $ {
	export class $horrorgamelanding_email extends $hyoo_crus_entity.with({
		Value: $hyoo_crus_atom_str,
		Date: $hyoo_crus_atom_time,
	}) {
		@$mol_mem
		value(next?: string) {
			console.log('0.09001: Getting/setting email value:', next)
			if (next !== undefined) {
				this.Value()?.val(next)
				return next
			}
			return this.Value()?.val() ?? ''
		}

		date(next?: $mol_time_moment) {
			return this.Date(next)?.val(next) ?? new $mol_time_moment()
		}
	}
}
