import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../App";

type CourseGoasListPropsType={
    goals:CourseGoalType[];
    deleteGoalmethod:(id:number)=>void;
};
const CourseGoasList=({goals,deleteGoalmethod}:CourseGoasListPropsType)=>{
    return(
        <ul>
        {goals.map((goal) => {
          return (<li key={goal.id}>
            <CourseGoal 
            title={goal.title} 
            description={goal.description} 
            myDeleteGoalmethod={deleteGoalmethod}
            id={goal.id}>
            <p>my children contenttttt</p>
            </CourseGoal></li>)
        })}
      </ul>
    );
}
export default CourseGoasList;