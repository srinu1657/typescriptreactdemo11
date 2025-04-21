import { FC, PropsWithChildren, type ReactNode } from "react";

type CourseGoalPropsType=PropsWithChildren<{
  title:string,
  description:string,
  myDeleteGoalmethod:(id:number)=>void,
  id:number;
}>

  const CourseGoal=({ title, description,children,myDeleteGoalmethod,id}:CourseGoalPropsType) =>{
    return (
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <button onClick={(event)=>myDeleteGoalmethod(id)}>Delete</button>
      </article>
    );
  }
  export default CourseGoal;