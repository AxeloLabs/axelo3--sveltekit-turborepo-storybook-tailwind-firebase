// -0
// -0 FRAME-MENU--CMS
// -0
/**
 * Utilise dans 2 cas:
 * - le drawer
 * - (pas dans le header, il n y en a pas ds le CMS)
 * - la page /cms: pour administrer tt les pages du site
 */
import { AX_CONST__UI__baseDirFrame } from './AX_CONST__UI__base';
export const AX_CONST__UI__menuCms: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'acceuil',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-acceuil--creme.png'
	},
	{
		url: '/la-demarche',
		title: 'la démarche',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-la-demarche--creme.png'
	},
	{
		url: '/creations-realisations',
		title: 'Création / Réalisation',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-realisation--creme.png'
	},
	{
		url: '/prochains-rendez-vous',
		title: 'Prochains rdv',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-prochains-rdv--creme.png'
	}
	// {
	// 	url: '/newsletter',
	// 	title: 'Newsletter'
	// }
];
