export type CursorResolverFn = (options: {
	event: MouseEvent;
	interactiveTarget: HTMLElement;
	cursorMarkerWrapper: HTMLElement;
	cursorMarker: HTMLElement;
}) => void;

class CursorResolver {
	private _resolveMap: Map<string, CursorResolverFn> = new Map();

	public add(className: string, resolve: CursorResolverFn) {
		this._resolveMap.set(className, resolve);
	}

	public get(className: string) {
		return this._resolveMap.get(className);
	}
}

export const cursorResolver = new CursorResolver();
