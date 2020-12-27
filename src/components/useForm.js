import React,{useState} from "react";


const useForm = (intialForm => {
    const[values,setValues] = useState(intialForm) 
    const[errors,setErrors] = useState(intialForm)
    const inputChange=e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name] :value
        })
    }
    
    //const [errors, setErrors] = useState({})

    // const resetForm =() =>{
    //     setValues(initialFieldValues)
    //     setErrors({})
    //     setCurrentId(0)
    // }

    return {
        values,
        setValues,
        errors,
        setErrors,
        inputChange
    };
})

export default useForm ;


        