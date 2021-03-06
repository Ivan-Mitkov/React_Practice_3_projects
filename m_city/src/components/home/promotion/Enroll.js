import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formFields";
import { validate } from "../../ui/misc";

import { firebasePromotions } from "../../../firebase";

export class Enroll extends Component {
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
      }
    }
  };
  resetFormSuccess = type => {
    const newFormdata = { ...this.state.formdata };
    for (const key in newFormdata) {
      newFormdata[key].value = "";
      newFormdata[key].valid = false;
      newFormdata[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formdata: newFormdata,
      formSuccess: type ? "Success" : "Already on the database"
    });
    this.clearSuccessMessage();
  };

  clearSuccessMessage = () => {
    setTimeout(() => {
      this.setState({ formSuccess: "" });
    }, 3000);
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
      //check if the user is in the database
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
    } else {
      console.log("ERROR");
      this.setState({ formError: true });
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

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {/* <button onClick={(event)=>this.submitForm(event)}>Enroll</button> */}
              {this.state.formError && (
                <div className="error_label">Error in the form</div>
              )}
              <div className="success_label">{this.state.formSuccess}</div>
              <button type="submit">Enroll</button>
              <div className="enroll_discl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora est rerum quae eum, exercitationem ut magnam architect
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
