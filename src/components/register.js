import React, {useState} from "react";
import axios from 'axios';
import validator from 'validator';
import * as root from "react-dom";

export default function Register () {
  const [register, setRegister] = useState(() => {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
    }
  })

  const changeInputRegistr = event => {
    event.persist()
    setRegister(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  const submitChackin = event => {
    event.preventDefault();
    if (!validator.isEmail(register.email)) {
      alert("You did not enter email")
    } else if (register.password !== register.password2) {
      alert("Repeated password incorrectly")
    } else if (!validator.isStrongPassword(register.password, {minSymbols: 0})) {
      alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
    } else {
      axios.post(`http://localhost:3000/` + `/auth/registration`, {
        username: register.username,
        email: register.email,
        password: register.password,
      }).then(res => {
        if (res.data === true) {
          window.location.href = `http://localhost:3000/` + `/auth`
        } else {
          alert("There is already a user with this email")
        }
      }).catch(() => {
        alert("An error occurred on the server")
      })
    }
  }
  register.render(
    <div className="form">
      <h2>Register user:</h2>
      <form onSubmit={submitChackin}>
        <p>Name: <input
        type="username"
        id="username"
        name="username"
        value={register.username}
        onChange={changeInputRegistr}
        /></p>
        <p>Email: <input
        type="email"
        id="email"
        name="email"
        value={register.email}
        onChange={changeInputRegistr}
        formNoValidate
        /></p>
        <p>Password: <input
        type="password"
        id="password"
        name="password"
        value={register.password}
        onChange={changeInputRegistr}
        />
        </p>
        <p>Repeat password: <input
          type="password"
          id="password2"
          name="password2"
          value={register.password2}
          onChange={changeInputRegistr}
        />
        </p>
        <input type="submit"/>
      </form>
    </div>
  )
}
