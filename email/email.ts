namespace $ {
	export class $horrorgamelanding_email extends $hyoo_crus_entity.with({
		Value: $hyoo_crus_atom_str, // atomic string
		Date: $hyoo_crus_atom_time, // atomic time moment
	}) {
		value(next?: string) {
			return this.Value(next)?.val(next) ?? ''
		}

		date(next?: $mol_time_moment) {
			return this.Date(next)?.val(next) ?? new $mol_time_moment()
		}
	}
}
