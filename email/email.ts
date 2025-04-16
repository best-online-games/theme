namespace $ {
	export class $horrorgamelanding_email extends $hyoo_crus_node {
		@$mol_mem
		value(next?: string) {
			return this.sub('value', $hyoo_crus_ref).str(next)
		}

		@$mol_mem
		date(next?: $mol_time_moment) {
			return this.sub('date', $hyoo_crus_ref).value(next)
		}
	}
	$hyoo_crus_node.mixin($horrorgamelanding_email)
}
