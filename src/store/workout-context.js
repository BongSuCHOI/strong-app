import React from "react";

const WorkoutContext = React.createContext({
	workout: [],
	addWorkout: () => {},
});

export default WorkoutContext;
