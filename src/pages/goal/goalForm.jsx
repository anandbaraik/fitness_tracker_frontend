import { useState } from "react";
import { Input } from "../../components";
import { addGoal } from "../../redux/action";
import { useDispatch } from "react-redux";

export const GoalForm = ({ setToggle }) => {
  const dispatch = useDispatch();
  const [newGoals, setNewGoals] = useState({
    goalName: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
  });

  return (
    <>
      <div className="Modal-backdrop" onClick={() => setToggle(false)}>
        {" "}
      </div>
      <div className="flex justify-center items-center w-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffff17] z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="shadow-md flex flex-col p-4 relative gap-4 rounded-lg w-80 bg-gray-400 z-50"
        >
          <h1 className="text-xl flex justify-center items-center text-[#555]">
            Add Goal
          </h1>
          <Input
            label={"Goal Name"}
            placeholder={"Goal Name"}
            type={"text"}
            onChange={(e) =>
              setNewGoals({ ...newGoals, goalName: e.target.value })
            }
            value={newGoals.goalName}
          />
          <Input
            label={"Taget Date"}
            placeholder={"Calories"}
            type={"date"}
            onChange={(e) =>
              setNewGoals({ ...newGoals, targetDate: e.target.value })
            }
            value={newGoals.targetDate}
          />

          <Input
            label={"Target Calories"}
            placeholder={"Target Calories"}
            type={"number"}
            value={newGoals.targetCalories}
            onChange={(e) =>
              setNewGoals({ ...newGoals, targetCalories: e.target.value })
            }
          />
          <Input
            label={"Description"}
            placeholder={"Description"}
            type={"text"}
            value={newGoals.description}
            onChange={(e) =>
              setNewGoals({ ...newGoals, description: e.target.value })
            }
          />

          <div className="flex justify-between mt-4 ">
            {" "}
            <button
              className="text-blue-800"
              onClick={() => {
                dispatch(addGoal(newGoals));
                setToggle(false);
              }}
            >
              Add
            </button>
            <button className="text-red-800" onClick={() => setToggle(false)}>
              Discard
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
