import React from "react";

export default (state, screen, layout) => {
	if (!state || !screen || !layout) return null;

	return Object.keys(state)
		.filter(key => state[key].renderer)
		.map(key => {
			let entity = state[key];
			if (typeof entity.renderer === "object")
				return (
					<entity.renderer.type
						key={key}
						{...entity}
						screen={screen}
						layout={layout}
					/>
				);
			else if (typeof entity.renderer === "function")
				return (
					<entity.renderer
						key={key}
						{...entity}
						screen={screen}
						layout={layout}
					/>
				);
		});
};
