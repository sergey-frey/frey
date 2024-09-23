export const random = (minLimit: number, maxLimit: number) => {
	const min = Math.ceil(minLimit);
	const max = Math.floor(maxLimit);

	return Math.floor(Math.random() * (max - min + 1)) + min;
};
