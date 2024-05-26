import axios from "axios";
import {ADD_FOOD, ADD_GOAL, ADD_EXERCISE, LOAD_EXERCISES, LOADING, LOAD_FOODS, LOAD_GOALS, REMOVE_EXERCISE, REMOVE_FOOD, REMOVE_GOAL, ERROR} from "../utils";

/*
* Exercise
*/
export const fetchExercises = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/exercises/exercises`);
    if (response.data.success) {
      dispatch({ type: LOAD_EXERCISES, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/exercises/add-exercise`, {
      ...exercise,
    });
    if (response.data.success) {
      dispatch({ type: ADD_EXERCISE, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const removeExercise = (exerciseId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/exercises/${exerciseId}`);
    if (response.status === 204) {
      dispatch({ type: REMOVE_EXERCISE, payload: exerciseId });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

/*
* Goals
*/
export const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/goals`);
    if (response.data.success) {
      dispatch({ type: LOAD_GOALS, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const removeGoal = (goalId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/goals/${goalId}`);
    if (response.status === 204) {
      dispatch({ type: REMOVE_GOAL, payload: goalId });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const addGoal = (goal) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/goals/add-goal`, {
      ...goal,
    });
    dispatch({ type: ADD_GOAL, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

/*
* Food
*/
export const fetchFoods = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/foods`);
    if (response.data.success) {
      dispatch({ type: LOAD_FOODS, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const addFood = (food) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/foods/add-food`, {
      ...food,
    });
    dispatch({ type: ADD_FOOD, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const removeFood = (foodId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/foods/${foodId}`);
    if (response.status === 204) {
      dispatch({ type: REMOVE_FOOD, payload: foodId });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
