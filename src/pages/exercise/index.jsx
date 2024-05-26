import { useDispatch, useSelector } from "react-redux";
import { Layout, Loader } from "../../components";
import { useState } from "react";
import { ExerciseForm } from "./exerciseForm";
import { removeExercise } from "../../redux/action";

export const Exercise = () => {
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	const exercises = useSelector((state) => state.exerciseData);
	const loading = useSelector((state) => state.loading);
	const deleteHandler = (item) => {
		if(window.confirm('Are you sure?')) {
			dispatch(removeExercise(item._id));
		}
	}
	return (
		<Layout>
			<div className="flex flex-col p-4 ">
				<div className="flex w-full justify-between">
					<h1 className="text-2xl text-[#777] font-semibold">Exercises</h1>
					<button
						className="p-2 bg-[#334155] cursor-pointer text-white rounded-lg"
						onClick={() => setToggle(true)}>
						Add Exercise
					</button>
				</div>
				{toggle && <ExerciseForm setToggle={setToggle} />}
				{loading ? (
					<Loader />
				) : (
					<div className="flex flex-wrap gap-4 mt-4">
						{exercises.length < 1 ? (
							<p className="flex w-full justify-center items-center text-2xl text-[#777]">
								Please add some exercise.
							</p>
						) : (
							<table className="w-full flex flex-col items-center bg-gray-400">
								<thead className="flex justify-between w-full">
									<tr className="flex justify-between w-full border-b px-3 items-center h-8">
										<th className="w-[25%] flex ">Exercise Name</th>
										<th className="w-[25%]">Duration(in minutes)</th>
										<th className="w-[25%]">Calories(in cal)</th>
										<th className="w-[25%]">Action</th>
									</tr>
								</thead>
								<tbody className="flex justify-between w-full flex-col">
									{exercises?.map((item) => (
										<tr
											key={item._id}
											className="flex justify-between w-full items-center px-3 border-b ">
											<td className="w-[25%] items-center flex">{item.name}</td>
											<td className="w-[25%] items-center flex justify-center">
												{item.duration}
											</td>
											<td className="w-[25%] items-center flex justify-center">
												{item.caloriesBurned}
											</td>
											<td className="w-[25%] items-center flex justify-center">
												<button
													className="text-red-500"
													onClick={() => deleteHandler(item)}>
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				)}
			</div>
		</Layout>
	);
};

