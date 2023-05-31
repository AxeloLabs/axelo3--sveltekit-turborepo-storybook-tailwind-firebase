// -0
// -0 FRAME-MENU--APP
// -0
/**
 * Utilise dans 2 cas:
 * - le drawer - app
 * - le header -- app
 *
 **/
import { AX_CONST__UI__baseDirFrame } from './AX_CONST__UI__base';
export const AX_CONST__UI__menuApp: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'Acceuil',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-acceuil--creme.png'
	},
	{
		url: '/la-demarche',
		title: 'La démarche',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-la-demarche--creme.png'
	},
	{
		url: '/creations-realisations',
		title: 'Créations / Réalisations',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-realisation--creme.png'
	},
	{
		url: '/prochains-rendez-vous',
		title: 'Prochains rdv',
		img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-prochains-rdv--creme.png'
	}
	// {
	// 	url: '/',
	// 	title: 'Newsletter',
	// 	img: AX_CONST__UI__baseDirFrame + 'icon/icon-menu-newsletter--creme.png'
	// }
];
