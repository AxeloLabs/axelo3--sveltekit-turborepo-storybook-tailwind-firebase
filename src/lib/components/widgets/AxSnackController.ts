//-------------------------------------------------------
// BEREOUTH -- nothing to do with crudService
//-------------------------------------------------------

// hack - we want to open the snack when doing DB operations
export const ACTION__STORE_FRAME__openSnack = (type: string, msg: string) => {
	// tip: UNCOMMENT sinon c OFF - pour le moment => decommenter pour ON
	AX_STORE__FRAME_snack.set({
		type: type,
		text: msg,
		open: true
	});
};

import { AX_STORE__FRAME_snack } from 'app/stores/AX_STORE__frame';
