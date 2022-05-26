import React from "react";

const WorkoutContext = React.createContext({
	workout: [],
	selectWorkout: [],
	addWorkout: () => {},
});

export default WorkoutContext;
