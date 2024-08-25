import { useState } from "react";

const UseForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);
    const handleChange = (event) =>{
        const { name, value} = event.target;
        setValue({
            ...values,
            [name]: value,
        })
    }
     const resetForm = () =>{
        setValue({
        username: "",
        email: "",
        password: ""
      });
 
    } 

    return [values, handleChange, resetForm];
}

export default UseForm;