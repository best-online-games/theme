namespace $ {
	const { per } = $mol_style_unit

	$mol_style_define($horrorgamelanding, {})
	$mol_style_define($mol_page, {
		flex: 'auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'stretch',
		overflow: 'hidden',
		'--lightness': 0.45,
		'--chroma': 0.1,
		'--hue': 186,
	})
	$mol_style_define($mol_image, {
		width: per(20),
		height: 'auto',
	})
	$mol_style_define($mol_section, {
		padding: '1rem',
		background: { color: '#2a2a2a' },
		borderRadius: '0.5rem',
		margin: '1rem',
	})
	$mol_style_define($mol_card, {
		background: { color: '#333333' },
		borderRadius: '0.5rem',
		padding: '1rem',
		margin: '0.5rem',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
	})
	$mol_style_define($mol_button_major, {
		background: { color: '#4a4a4a' },
		color: '#ffffff',
		':hover': {
			background: { color: '#5a5a5a' },
		},
	})
	$mol_style_define($mol_button_minor, {
		background: { color: '#333333' },
		color: '#ffffff',
		':hover': {
			background: { color: '#444444' },
		},
	})
}
