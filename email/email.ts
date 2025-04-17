namespace $ {
	export class $horrorgamelanding_email extends $hyoo_crus_entity.with({
		value: $hyoo_crus_atom_str,
		date: $hyoo_crus_atom_time,
	}) {
		value(next?: string) {
			return this.node('value').cast($hyoo_crus_atom_str).val(next) ?? ''
		}

		date(next?: $mol_time_moment) {
			return this.node('date').cast($hyoo_crus_atom_time).val(next) ?? new $mol_time_moment()
		}
	}
}
