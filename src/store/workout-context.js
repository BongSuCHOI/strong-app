import React from "react";

const WorkoutContext = React.createContext({
	workout: [],
	selectWorkout: [],
	customTemplateWorkout: [],
	saveCustomTemplate: () => {},
	addWorkout: () => {},
	clearSelectWorkout: () => {},
});

export default WorkoutContext;
