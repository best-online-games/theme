namespace $ {
	const { per } = $mol_style_unit

	$mol_style_define($horrorgamelanding_app, {
		Logo: {
			maxWidth: per(100),
			maxHeight: per(100),
			width: 'auto',
			height: 'auto',
			objectFit: 'contain',
		},
		Body_content: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			'@media': {
				'(max-width: 480px)': {
					gridTemplateColumns: 'repeat(1, 1fr)',
				},
				'(max-width: 768px)': {
					gridTemplateColumns: 'repeat(2, 1fr)',
				},
			},
		},
	})
}
