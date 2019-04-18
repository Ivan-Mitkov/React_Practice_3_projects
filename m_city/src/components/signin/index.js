import React, { Component } from "react";
import { firebase } from "../../firebase";

import FormField from "../ui/formFields";
import { validate } from "../ui/misc";

export class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };
  updateForm = element => {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    // console.log(validData)
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;
    this.setState({ formdata: newFormdata, formError: false });
    //    console.log(this.state.formdata);
  };

  submitForm = event => {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;
    // console.log(this.state.formdata)
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      console.log(dataToSubmit);
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
            console.log('User is auth')
            this.props.history.push('/dashboard')
    })
        .catch(err => {
          this.setState({ formError: true });
        });
    } else {
      console.log("ERROR");
      this.setState({ formError: true });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Login</h2>
            <FormField
              id={"email"}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"password"}
              formdata={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />
            {this.state.formError && (
              <div className="error_label">Error in the form</div>
            )}
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
