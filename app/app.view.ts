namespace $.$$ {
	export class $horrorgamelanding_app extends $.$horrorgamelanding_app {
		body() {
			return [this.Card(0), this.Card(1), this.Card(3), this.Card(4)]
		}
		card_url(id: string): string {
			console.log(id)
			if (id == '1') {
				return 'https://neal.fun/link-images/stimulation-clicker.svg'
			}
			return 'https://neal.fun/link-images/internet-roadtrip.svg'
		}
		uri(id: any): string {
			return 'https://neal.fun/link-images/internet-roadtrip.svg'
		}
	}
}
