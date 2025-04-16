namespace $ {
	const { per } = $mol_style_unit

	$mol_style_define($mol_image, {
		width: per(20),
		height: 'auto',
	})
	$mol_style_define($mol_section, {
		padding: '1rem',
		background: { color: '#ffffff' },
		borderRadius: '0.5rem',
		margin: '1rem',
	})
	$mol_style_define($mol_card, {
		background: { color: '#ffffff' },
		borderRadius: '0.5rem',
		padding: '1rem',
		margin: '0.5rem',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
	})
}
