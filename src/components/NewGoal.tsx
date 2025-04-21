import { useRef, type FormEvent } from "react";

type NewGoalPropType={
    myAddGoalMethod:(goal:string,description:string)=>void
};

const NewGoal = ({myAddGoalMethod}:NewGoalPropType) => {
    const goal = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    const goalSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const entredGoal=goal.current!.value;
        const entredDescription=description.current!.value;
        myAddGoalMethod(entredGoal,entredDescription);
    }
    return (
        <form onSubmit={goalSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" name="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="goal">Goal description</label>
                <input id="description" type="text" name="description" ref={description} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}
export default NewGoal;