import CourseGoal from "./components/CourseGoal";
import goalImage from './assets/react.svg';
import Header from "./components/Header";
import { useState } from "react";
import CourseGoasList from "./components/CourseGoasList";
import NewGoal from "./components/NewGoal";

export type CourseGoalType = {
  title: string;
  description: string
  id: number;
}
const App = () => {

  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const addGoal = (goal:string,description:string) => {
    setGoals((previousGolas) => {
      const newGoal: CourseGoalType = {
        title: goal,
        description: description,
        id: Math.random()
      }
      return [...previousGolas, newGoal]
    })
  }

  const deleteGoal = (id: number) => {
    setGoals((previousGolas) => {
      return (previousGolas.filter((goal) => {
        return goal.id !== id;
      }))
    })
  }

  return (
    <main>
      <Header image={{ mysrc: goalImage, myalt: 'gloas image alt' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal myAddGoalMethod={addGoal}/>
      <CourseGoasList goals={goals} deleteGoalmethod={deleteGoal} />
    </main>
  )
}
export default App;