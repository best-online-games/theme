	($.$horrorgamelanding) = class $horrorgamelanding extends ($.$mol_page) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Logo(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["HORROR GAME"]);
			return obj;
		}
		Home(){
			const obj = new this.$.$mol_link();
			(obj.sub) = () => (["Home"]);
			return obj;
		}
		About(){
			const obj = new this.$.$mol_link();
			(obj.sub) = () => (["About"]);
			return obj;
		}
		Contact(){
			const obj = new this.$.$mol_link();
			(obj.sub) = () => (["Contact"]);
			return obj;
		}
		ScrollToFooter(){
			const obj = new this.$.$mol_button();
			(obj.sub) = () => (["Subscribe"]);
			(obj.click) = () => ((this.scroll_to_footer()));
			return obj;
		}
		Nav(){
			const obj = new this.$.$mol_bar();
			(obj.sub) = () => ([
				(this.Home()), 
				(this.About()), 
				(this.Contact()), 
				(this.ScrollToFooter())
			]);
			return obj;
		}
		Header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Logo()), (this.Nav())]);
			return obj;
		}
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		HeroTitle(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Enter the Darkness"]);
			return obj;
		}
		HeroSubtitle(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["A terrifying journey awaits..."]);
			return obj;
		}
		Hero(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.HeroTitle()), (this.HeroSubtitle())]);
			return obj;
		}
		FeatureTitle1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Immersive Story"]);
			return obj;
		}
		FeatureText1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Experience a deep, psychological horror narrative"]);
			return obj;
		}
		Feature1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.FeatureTitle1()), (this.FeatureText1())]);
			return obj;
		}
		FeatureTitle2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Stunning Graphics"]);
			return obj;
		}
		FeatureText2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Next-gen visuals that bring nightmares to life"]);
			return obj;
		}
		Feature2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.FeatureTitle2()), (this.FeatureText2())]);
			return obj;
		}
		FeatureTitle3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Dynamic Sound"]);
			return obj;
		}
		FeatureText3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["3D audio that will make your skin crawl"]);
			return obj;
		}
		Feature3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.FeatureTitle3()), (this.FeatureText3())]);
			return obj;
		}
		Features(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Feature1()), 
				(this.Feature2()), 
				(this.Feature3())
			]);
			return obj;
		}
		FooterTitle(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Stay Updated"]);
			return obj;
		}
		EmailInput(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("Enter your email");
			return obj;
		}
		SubmitButton(){
			const obj = new this.$.$mol_button();
			(obj.sub) = () => (["Subscribe"]);
			(obj.click) = () => ((this.submit_email()));
			return obj;
		}
		FooterForm(){
			const obj = new this.$.$mol_form();
			(obj.sub) = () => ([(this.EmailInput()), (this.SubmitButton())]);
			return obj;
		}
		Footer(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.FooterTitle()), (this.FooterForm())]);
			return obj;
		}
		title(){
			return "Horror Game";
		}
		plugins(){
			return [(this.Theme())];
		}
		head(){
			return [(this.Header())];
		}
		tools(){
			return [(this.Lights())];
		}
		body(){
			return [(this.Hero()), (this.Features())];
		}
		foot(){
			return [(this.Footer())];
		}
	};
	($mol_mem(($.$horrorgamelanding.prototype), "Theme"));
	($mol_mem(($.$horrorgamelanding.prototype), "Logo"));
	($mol_mem(($.$horrorgamelanding.prototype), "Home"));
	($mol_mem(($.$horrorgamelanding.prototype), "About"));
	($mol_mem(($.$horrorgamelanding.prototype), "Contact"));
	($mol_mem(($.$horrorgamelanding.prototype), "ScrollToFooter"));
	($mol_mem(($.$horrorgamelanding.prototype), "Nav"));
	($mol_mem(($.$horrorgamelanding.prototype), "Header"));
	($mol_mem(($.$horrorgamelanding.prototype), "Lights"));
	($mol_mem(($.$horrorgamelanding.prototype), "HeroTitle"));
	($mol_mem(($.$horrorgamelanding.prototype), "HeroSubtitle"));
	($mol_mem(($.$horrorgamelanding.prototype), "Hero"));
	($mol_mem(($.$horrorgamelanding.prototype), "FeatureTitle1"));
	($mol_mem(($.$horrorgamelanding.prototype), "FeatureText1"));
	($mol_mem(($.$horrorgamelanding.prototype), "Feature1"));
	($mol_mem(($.$horrorgamelanding.prototype), "FeatureTitle2"));
	($mol_mem(($.$horrorgamelanding.prototype), "FeatureText2"));
	($mol_mem(($.$horrorgamelanding.prototype), "Feature2"));
	($mol_mem(($.$horrorgamelanding.prototype), "FeatureTitle3"));
	($mol_mem(($.$horrorgamelanding.prototype), "FeatureText3"));
	($mol_mem(($.$horrorgamelanding.prototype), "Feature3"));
	($mol_mem(($.$horrorgamelanding.prototype), "Features"));
	($mol_mem(($.$horrorgamelanding.prototype), "FooterTitle"));
	($mol_mem(($.$horrorgamelanding.prototype), "EmailInput"));
	($mol_mem(($.$horrorgamelanding.prototype), "SubmitButton"));
	($mol_mem(($.$horrorgamelanding.prototype), "FooterForm"));
	($mol_mem(($.$horrorgamelanding.prototype), "Footer"));

//# sourceMappingURL=landing.view.tree.js.map