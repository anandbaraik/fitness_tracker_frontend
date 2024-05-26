import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components";
import { fetchExercises, fetchFoods, fetchGoals } from "../../redux/action";
import { useEffect } from "react";
import Card from "../../components/card";
export const Home = () => {

	const dispatch = useDispatch();
	const exercises = useSelector((store) => store.exerciseData);
	const foods = useSelector((store) => store.foodData);
	const goals = useSelector((store) => store.goalData);

	const totalCalConsumed = foods?.reduce(
		(acc, curr) => acc + parseFloat(curr.calories),
		0
	);

	const totalCaloriesBurned = exercises?.reduce(
		(acc, curr) => acc + parseFloat(curr.caloriesBurned),
		0
	);

	const targetCalories = goals?.reduce(
		(acc, curr) => acc + parseFloat(curr.targetCalories),
		0
	);

	useEffect(() => {
		dispatch(fetchGoals());
		dispatch(fetchExercises());
		dispatch(fetchFoods());
	}, []);
	return (
		<Layout>
			<div className="flex flex-col w-full p-4 ">
				<h1 className="text-2xl font-semibold text-[#777]">Dashboard</h1>
				<div className="flex flex-wrap w-full gap-4 p-4 justify-center items-center">
					<Card
						title={'Total Calories Burned'}
						stat={totalCaloriesBurned}
					/>
					<Card
						title={'Total Calories Consumned'}
						stat={totalCalConsumed}
					/>
					<Card
						title={'Total Calories Goal'}
						stat={targetCalories}
					/>
					<Card
						title={'Remaining Calories to Goal'}
						stat={totalCalConsumed - totalCaloriesBurned}
					/>
				</div>
			</div>
		</Layout>
	);
};
