import { useState } from "react";
import { InfoContext } from "../hooks/InfoContext";
import { useContext } from "react";
import Reducer from "../hooks/Reducer";

const Services = () => {
    const User = useContext(InfoContext)
    return (
        <>
            <h1>Services</h1>
            <h2>Hi! {User.name}</h2>
            <h3>Age: {User.age}</h3>
            <h3>dep: {User.dep}</h3>
            <Reducer/>
        </>
    )
}
export default Services