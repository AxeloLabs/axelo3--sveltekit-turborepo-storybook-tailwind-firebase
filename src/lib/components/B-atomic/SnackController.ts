//
// I use it to have the crud db log visible for the user
//
import { STORE__FRAME_snack } from '$stores/STORE_frame';

// hack - we want to open the snack when doing DB operations
export const ACTION__STORE_FRAME__openSnack = (type: string, msg: string) => {
	// tip: UNCOMMENT sinon c OFF - pour le moment => decommenter pour ON
	STORE__FRAME_snack.set({
		type: type,
		text: msg,
		open: true
	});
};
