import React, { useState } from "react";
function Calorie() {
    const [calorieGoal, setCalorieGoal] = useState<number | ''>();
    const [calorieBurned, setCalorieBurned] = useState<number | ''>();
    const handleCalorieGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) { // Check if newValue is a valid number
          setCalorieGoal(newValue);
          console.log(newValue);
        } else {
          setCalorieGoal(0); // If newValue is not a valid number, set the state to an empty string
        }
      };
    
    const handleCaloriesBurnedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            console.log(newValue);
            setCalorieBurned(newValue);
        } else {
            setCalorieBurned(0);
        }
    }

    return (

        <div className="flex flex-col gap-1">
            <div>
                <h1 className="mt-10 font-bold text-3xl text-red-700 text-center">Calorie Tracker</h1>
            </div>
            <div className = "max-w-ps p-s14 ml-10 rounded-lg text-center">
                <label htmlFor = "calorieGoal" className="block text-medium text-red-700">Calorie Goal:</label>
                <input
                    id = "calorieGoal"
                    type="text"
                    placeholder="0"
                    value={calorieGoal}
                    className="max-w-xs rounded-lg p-1 bg-slate-300 text-black text-center "
                    onChange={handleCalorieGoalChange}
                    />
            </div>
            <div className = "max-w-ps p-14 ml-10 rounded-lg text-center">
                <label htmlFor = "calorieBurned" className="block text-medium text-red-700">Calories Burned:</label>
                <input
                    id = "calorieBurned"
                    placeholder="0"
                    value={calorieBurned}
                    className="max-w-xs rounded-lg p-1 bg-slate-300 text-black text-center "
                    onChange={handleCaloriesBurnedChange}
                    />
            </div>
        </div>
    )
}
export default Calorie;
