namespace $.$$ {
    $mol_style_define($bog_theme_toggle, {
        Bubble: {
            position: 'fixed !important' as any,
            left: '0 !important' as any,
            top: '0 !important' as any,
            transform: 'none !important' as any,
            width: '100vw !important' as any,
            height: '100vh !important' as any,
            maxWidth: 'none !important' as any,
            maxHeight: 'none !important' as any,
            padding: '0 !important' as any,
            background: 'none',
            boxShadow: 'none',
            border: 'none',
        },
        Backdrop: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1,
        },
        Picker: {
            position: 'fixed',
            left: '50%',
            top: '15vh',
            transform: 'translateX(-50%)',
            maxWidth: '400px',
            width: '90vw',
            maxHeight: '70vh',
            zIndex: 2,
        },
    })
}
