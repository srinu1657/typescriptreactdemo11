import { ReactNode } from "react";

type HeaderPropsType={
    image:{
        mysrc:string;
        myalt:string;
    }
    children:ReactNode;
}

const Header=({image,children}:HeaderPropsType)=>{
return (
    <header>
     <img src={image.mysrc} alt={image.myalt}/>
     {children}
    </header>
)
}
export default Header;