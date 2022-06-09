import React from "react";

const WorkoutContext = React.createContext({
	workout: [],
	selectWorkout: [],
	customTemplateWorkout: [],
	saveCustomTemplate: () => {},
	removeCustomTemplate: () => {},
	addWorkout: () => {},
	clearSelectWorkout: () => {},
});

export default WorkoutContext;
