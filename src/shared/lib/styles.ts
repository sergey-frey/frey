export const position = ({ x, y }: { x: number; y: number }) => {
	return `left: ${x}px; top: ${y}px;`;
};

export const getCssVars = (vars: Record<string, string>) => {
	return Object.keys(vars)
		.map((key) => `--${key}: ${vars[key]};`)
		.join(" ");
};
