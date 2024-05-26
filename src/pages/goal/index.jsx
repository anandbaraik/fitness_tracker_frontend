import { useState } from "react";
import { Layout, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { removeGoal } from "../../redux/action";
import { GoalForm } from "./goalForm";
import moment from "moment/moment";

export const Goals = () => {
	const [toggle, setToggle] = useState(false);
	const goals = useSelector((state) => state.goalData);
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();
	const deleteHandler = (item) => {
		if(window.confirm('Are you sure?')) {
			dispatch(removeGoal(item._id));
		}
	}
	return (
		<Layout>
			<div className="flex flex-col p-4 ">
				<div className="flex w-full justify-between">
					<h1 className="text-2xl text-[#777] font-semibold">Goals</h1>
					<button
						className="p-2 bg-[#334155] cursor-pointer text-white rounded-lg"
						onClick={() => setToggle(true)}>
						Add Goal
					</button>
				</div>
				{toggle && <GoalForm setToggle={setToggle} />}
				{loading ? (
					<Loader />
				) : (
					<div className="flex flex-wrap gap-4 mt-4">
						{goals.length < 1 ? (
							<p className="flex w-full justify-center items-center text-2xl text-[#777]">
								Please add some goal.
							</p>
						) : (
							<table className="w-full flex flex-col items-center bg-gray-400">
								<thead className="flex justify-between w-full">
									<tr className="flex justify-between w-full border-b px-3 items-center">
										<th className="w-[25%] flex ">Goals</th>
										<th className="w-[15%]">Description</th>
										<th className="w-[15%]">Taget Date</th>
										<th className="w-[15%]">Target Calories</th>
										<th className="w-[15%]">Status</th>
										<th className="w-[15%]">Action</th>
									</tr>
								</thead>
								<tbody className="flex justify-between w-full flex-col">
									{goals?.map((item) => (
										<tr
											key={item._id}
											className="flex justify-between w-full items-center px-3 border-b h-8">
											<td className="w-[25%] items-center flex">
												{item.goalName}
											</td>
											<td className="w-[15%] items-center flex justify-center">
												{item.description}
											</td>
											<td className="w-[15%] items-center flex justify-center">
												{moment(item.targetDate).format("DD/MM/YYYY")}
											</td>
											<td className="w-[15%] items-center flex justify-center">
												{item.targetCalories}
											</td>
											<td className="w-[15%] items-center flex justify-center">
												{item.status}
											</td>
											<td className="w-[15%] items-center flex justify-center">
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
