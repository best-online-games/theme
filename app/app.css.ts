namespace $ {
	const { per, rem } = $mol_style_unit

	$mol_style_define($horrorgamelanding_app, {
		background: {
			color: $mol_theme.text,
		},
		Head: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		Logo: {
			height: rem(3),
			width: 'auto',
			objectFit: 'contain',
			objectPosition: 'left center',
			flexShrink: '0',
			'@media': {
				'(max-width: 768px)': {
					height: rem(2.5),
				},
			},
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
