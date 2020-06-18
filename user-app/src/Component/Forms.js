import React from 'react';
import './Form.css'


function FormMember (props) {
    const {
        values,
        onSubmit,
        inputChange,
        checkboxChange,
        disabled,
        errors
    } = props
    
    const makeStyle = (c, w, s)=> {
        return{
            div: {
                color:  c,
                width: w,
                fontSize: s,
            },
        }
    }
    return (
        <form className="member-container" onSubmit={onSubmit}>
            <div className="submit-form">
                <h2>Register-Member</h2>
            </div>
            <div className="inputs-form">
                <h4>General information</h4>
                <label className="label-form">Name:&nbsp;
                    <input
                        type="text"
                        name="flname"
                        value={values.flname}
                        onChange={inputChange}
                        placeholder="First-LastName"
                    />
                </label><br/>
                <label className="label-form">Username:
                    <input 
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={inputChange}
                        placeholder="username"
                    />

                </label><br/>
                <label  className="label-form">Email:&nbsp;
                    <input 
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={inputChange}
                        placeholder="email@example.com"
                    
                    />
                </label><br/>
                <label  className="label-form">Password:&nbsp;
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={inputChange}
                        placeholder="password"
                    />
                </label><br/>
            <div>
                <h2>Gender</h2>
                <label  className="label-form">Male:&nbsp;
                    <input
                    type="radio"
                    name="gender"
                    checked={values.gender === "Male"}
                    value="Male"
                    onChange={inputChange}
                />
                </label><br/>
                <label  className="label-form">Female:&nbsp;
                    <input
                        type="radio"
                        name="gender"
                        checked={values.gender === "Female"}
                        value="Female"
                        onChange={inputChange}
                    />
                </label><br />
                 <label  className="label-form">Role:&nbsp;
                <select 
                    name="role"
                    value={values.role}
                    onChange={inputChange}
                >
                    <option value="Select Role">--Select Your Role--</option>
                    <option> Computer Engineer </option>
                    <option> Full Stack WebDeveloper</option>
                    <option> Backend Engineer</option>
                    <option> FrontEnd Engineer</option>
                    <option> Web Designer</option>
                    <option> Data Science</option>
                    <option> iOS Development</option>
                    <option>Technician</option>
                </select>
            </label><br/>
                
                </div>
            </div>
            <div style={makeStyle('black', '100%', '1.5rem').div} className="interested-checkboxes">
               <h3 style={{color: 'blue'}} >Interested</h3>
                    <label style={{color: 'black'} } className="label-form">
                        <input
                            type="checkbox"
                            name="movie"
                            checked={values.interested.movie}
                            onChange={checkboxChange}
                        />
                        Movies:&nbsp;
                    </label>
                    <label style={{color: 'black'} } className="label-form">
                    <input
                            type="checkbox"
                            name="games"
                            checked={values.interested.games}
                            onChange={checkboxChange}
                        />
                        Games:&nbsp;
                    </label>
                    <label style={{color: 'black'} } className="label-form">
                    <input
                            type="checkbox"
                            name="coding"
                            checked={values.interested.coding}
                            onChange={checkboxChange}
                        />
                        Coding:&nbsp;
                    </label>
                    <label style={{color: 'black'} } className="label-form">
                    <input
                            type="checkbox"
                            name="travel"
                            checked={values.interested.travel}
                            onChange={checkboxChange}
                        />
                        Travel:&nbsp;
                    </label>
                    
                </div>
                    <label  className="label-form">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={values.term.terms}
                                onChange={checkboxChange}
                            />
                            Term of service:&nbsp;
                    </label>
                   
                <div className="button-div">
                    <button disabled={disabled}>Submit</button>
                    <div className="error-container">
                    <div> {errors.flname} </div>
                    <div> {errors.username} </div>
                    <div> {errors.email} </div>
                    <div> {errors.password} </div>
                    <div> {errors.gender} </div>
                </div>
            </div>
        </form>
    )
}

export default FormMember;