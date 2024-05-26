import {ADD_FOOD, ADD_GOAL, ADD_EXERCISE, LOAD_EXERCISES, LOADING, LOAD_FOODS, LOAD_GOALS, REMOVE_EXERCISE, REMOVE_FOOD, REMOVE_GOAL, ERROR} from "../utils";

const initailState = {
	exerciseData: [],
	foodData: [],
	goalData: [],
	loading: false,
	error: false,
};

export const fitnessTrackReducer = (state = initailState, { type, payload }) => {
	switch (type) {
		case LOADING: {
			return {
				...state,
				loading: true,
				error: false
			};
		}
		case LOAD_EXERCISES: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: payload
			};
		}
		case ADD_EXERCISE: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: [...state.exerciseData, payload]
			};
		}
		case REMOVE_EXERCISE: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: state.exerciseData.filter((el) => el._id !== payload)
			};
		}
		case LOAD_FOODS: {
			return {
				...state,
				loading: false,
				error: false,
				foodData: payload
			};
		}
		case ADD_FOOD: {
			return {
				...state,
				loading: false,
				error: false,
				foodData: [...state.foodData, payload]
			};
		}
		case REMOVE_FOOD: {
			return {
				...state,
				loading: false,
				error: false,
				foodData: state.foodData.filter((el) => el._id !== payload)
			};
		}
		case LOAD_GOALS: {
			return {
				...state,
				loading: false,
				error: false,
				goalData: payload
			};
		}
		case ADD_GOAL: {
			return {
				...state,
				loading: false,
				error: false,
				goalData: [...state.goalData, payload]
			};
		}
		case REMOVE_GOAL: {
			return {
				...state,
				loading: false,
				error: false,
				goalData: state.goalData.filter((el) => el._id !== payload),
			};
		}
		case ERROR: {
			return {
				...state,
				loading: false,
				error: true,
			};
		}
		default: {
			return state;
		}
	}
};
