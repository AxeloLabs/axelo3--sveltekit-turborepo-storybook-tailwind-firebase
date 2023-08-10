// -0
// -0 FRAME-MENU--APP
// -0
/**
 * Utilise dans 2 cas:
 * - le drawer - app
 * - le header -- app
 *
 **/
import { CONST__UI__baseDirMedia } from './CONST__UI__base';
export const CONST__UI__menuApp: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'Acceuil',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-acceuil--creme.png'
	},
	{
		url: '/la-demarche',
		title: 'La démarche',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-la-demarche--creme.png'
	},
	{
		url: '/blog',
		title: 'blog',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-blog--creme.png'
	},
	{
		url: '/events',
		title: 'Events',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-events--creme.png'
	}
	// {
	// 	url: '/',
	// 	title: 'Newsletter',
	// 	img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-newsletter--creme.png'
	// }
];
