// cela va creer un I_blogItem, mais ici, on laisse tableau de saisie user (ce qui est la cas dans add)
export const CONST__FORM__addPost: I_DTO__formInput[] = [
	{
		pos: 1,
		tag: 'text',
		label: "titre de l'article",
		value: ''
	},
	// {
	// 	pos: 2,
	// 	tag: 'text',
	// 	label: "slug de la page de l'article",
	// 	value: ''
	// },
	{
		// 2 TODO -change pos ?
		pos: 2,
		tag: 'area',
		label: "corps de l'article",
		value: ''
	}
];
