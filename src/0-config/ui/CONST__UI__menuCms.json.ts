// -0
// -0 FRAME-MENU--CMS
// -0
/**
 * Utilise dans 2 cas:
 * - le drawer
 * - (pas dans le header, il n y en a pas ds le CMS)
 * - la page /cms: pour administrer tt les pages du site
 */
import { CONST__UI__baseDirMedia } from './CONST__UI__base';
export const CONST__UI__menuCms: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'acceuil',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-acceuil--creme.png'
	},
	{
		url: '/la-demarche',
		title: 'la démarche',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-la-demarche--creme.png'
	},
	{
		url: '/blog',
		title: 'Création / Réalisation',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-blog--creme.png'
	},
	{
		url: '/events',
		title: 'Events',
		img: CONST__UI__baseDirMedia + 'frame/icon/icon-menu-events--creme.png'
	}
	// {
	// 	url: '/newsletter',
	// 	title: 'Newsletter'
	// }
];
