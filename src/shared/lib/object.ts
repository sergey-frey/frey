export const getKeysByPattern = <T extends object>(
	obj: T,
	keyPattern: RegExp = /.*/,
) => {
	return Object.keys(obj).filter((key) => keyPattern.test(key));
};
