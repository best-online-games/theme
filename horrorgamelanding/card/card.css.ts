namespace $ {
	const { per } = $mol_style_unit

	$mol_style_define($bog_horrorgamelanding_card, {
		width: '100%',
		height: 'auto',
		display: 'block',

		Image: {
			width: '100%',
			height: 'auto',
			objectFit: 'cover',
			borderRadius: per(8),
			transition: 'transform 0.2s ease',
		},

		':hover': {
			Image: {
				transform: 'scale(1.05)',
			},
		},
	})
}
