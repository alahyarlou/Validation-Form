export const validation = (data) => {
  const errors = {};

  //   name validation
  if (data.name.trim() === "") {
    errors.name = "The name is required";
  } else {
    delete errors.name;
  }
  //   email validation
  if (data.email.trim() === "") {
    errors.email = "The email is required";
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      data.email
    )
  ) {
    errors.email = "The email is not valid";
  } else {
    delete errors.email;
  }
  //   password validation
  if (data.password === "") {
    errors.password = "The password is required";
  } else if (data.password.length < 6) {
    errors.password = "The password must be more than 6 characters";
  } else {
    delete errors.password;
  }

  //   confirem password Validation
  if (data.confiremPassword === "") {
    errors.confiremPassword = "The confirem password is required";
  } else if (data.confiremPassword !== data.password) {
    errors.confiremPassword =
      "The confirem password is not the same as password";
  } else {
    delete errors.confiremPassword;
  }

  //   checkbox Validation
  if (!data.isAccepted) {
    errors.isAccepted = "You must accept the rules";
  } else {
    delete errors.isAccepted;
  }

  return errors;
};
