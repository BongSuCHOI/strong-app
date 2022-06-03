import React from "react";

const WorkoutContext = React.createContext({
	workout: [],
	selectWorkout: [],
	addWorkout: () => {},
	clearSelectWorkout: () => {},
});

export default WorkoutContext;
