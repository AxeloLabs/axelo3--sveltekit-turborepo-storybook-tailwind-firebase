//-----------------------------------------------------------
// GUARDS
//-----------------------------------------------------------
export const isEntityInputValues = (test: T_GLOBALS[], log = false): test is I_ENTITY__uiinputValue[] => {
	if (!test.length) return false;
	const r = isEntityInputValue(test[0]);
	log ? console.debug('isInputValues? : ', r) : '';
	return r;
};
export const isEntityEvents = (test: T_GLOBALS[], log = false): test is I_ENTITY__event[] => {
	if (!test.length) return false;
	const r = isEntityEvent(test[0]);
	log ? console.debug('isEntityEvent? : ', r) : '';
	return r;
};
export const isEntityPosts = (test: T_GLOBALS[], log = false): test is I_ENTITY__post[] => {
	if (!test.length) return false;
	const r = isEntityPost(test[0]);
	log ? console.debug('isEntityPost? : ', r) : '';
	return r;
};
// --------------------------------------------
export const isEntityInputValue = (test: T_GLOBALS, log = false): test is I_ENTITY__uiinputValue => {
	const r = (test as I_ENTITY__uiinputValue).value !== undefined;
	log ? console.debug('isInputValue? : ', r) : '';
	return r;
};
export const isEntityEvent = (test: T_GLOBALS, log = false): test is I_ENTITY__event => {
	const r = (test as I_ENTITY__event).titleEvent !== undefined;
	log ? console.debug('isEntityEvent? : ', r) : '';
	return r;
};
export const isEntityPost = (test: T_GLOBALS, log = false): test is I_ENTITY__post => {
	const r = (test as I_ENTITY__post).titlePost !== undefined;
	log ? console.debug('isEntityPost? : ', r) : '';
	return r;
};
// --------------------------------------------
export const isEntity = (test: T_GLOBALS, log = false): test is T_GLOBAL_ENTITIES => {
	const r = (test as T_GLOBAL_ENTITIES).idDoc !== undefined;
	// if (test.idDoc)

	// 	const r = 'idDoc' in test;
	log ? console.debug('isEntity ?', r) : '';
	return r;
};

export const isEntityNotIv = (test: T_GLOBALS, log = false): test is I_ENTITY__event | I_ENTITY__post => {
	const r = isEntityEvent(test) || isEntityPost(test);
	// if (test.idDoc)

	// 	const r = 'idDoc' in test;
	log ? console.debug('isEntityNtIv ?', r) : '';
	return r;
};

export const isEntitiesNotIv = (tests: T_GLOBALS[], log = false): tests is I_ENTITY__event[] | I_ENTITY__post[] => {
	const r = isEntityEvents(tests) || isEntityPosts(tests);
	// if (test.idDoc)

	// 	const r = 'idDoc' in test;
	log ? console.debug('isEntityNtIv ?', r) : '';
	return r;
};
