import type { CursorResolverFn } from "@/shared/lib/cursor";
import { getCssVars } from "@/shared/lib/styles";

export const opacityBgResolver: (options: {
	p: number;
}) => CursorResolverFn =
	({ p }) =>
	({ event, interactiveTarget, cursorMarkerWrapper, cursorMarker }) => {
		const {
			left: targetLeft,
			top: targetTop,
			width: targetWidth,
			height: targetHeight,
		} = interactiveTarget.getBoundingClientRect();

		cursorMarkerWrapper.style.cssText = getCssVars({
			p: `${p}px`,
			targetX: `${targetLeft}px`,
			targetY: `${targetTop}px`,
			w: `${targetWidth}px`,
			h: `${targetHeight}px`,
		});

		cursorMarker.style.cssText = getCssVars({
			x: `${event.clientX}px`,
			y: `${event.clientY}px`,
		});
	};
