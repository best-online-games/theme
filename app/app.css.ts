namespace $ {
	const { per } = $mol_style_unit

	$mol_style_define($horrorgamelanding_app, {
		Body_content: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			maxWidth: per(1200),
		},

		'@media(max-width: 768px)': {
			Body_content: {
				gridTemplateColumns: 'repeat(2, 1fr)',
			},
		},

		'@media(max-width: 480px)': {
			Body_content: {
				gridTemplateColumns: '1fr',
			},
		},
	})
}
