import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    flname: Yup
        .string(),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    username: Yup
        .string()
        .min(6, "Usermame must be at least 3 characters long.")
        .required("Password is Required"),
    password: Yup
        .string()
        .min(8,"Password must be at least 8 characters long." )
        .required("Please select a role"),
    gender: Yup
        .string()
        .oneOf(["Male", "Female"], "Please select your gender"),
    role: Yup 
        .string()
        .oneOf(["Computer Engineer", "Full Stack WebDeveloper", "Backend Engineer", "FrontEnd Engineer",
         "Web Designer", "Data Science", "iOS Development","Technician"], "Please Select Your Role"),
    terms: Yup
        .boolean()
        .oneOf([true], "need to checked in checkbox"),
        
        movie : Yup
        .boolean(),
       
        games : Yup
        .boolean(),
       
        coding : Yup
        .boolean(),
    
        travel : Yup
        .boolean(),
        
})
export default formSchema;