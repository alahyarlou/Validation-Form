import React, { useState, useEffect } from "react";
import { validation } from "./../../utils/Validation";
import Error from "./../../components/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "./../../utils/Toast";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Singin = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErorrs] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErorrs(validation(dataForm, "signin"));
  }, [dataForm]);

  const changeHandler = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouch({
      ...touch,
      [e.target.name]: true,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      Notification("Your registration was successful", "success");
    } else {
      Notification("Please fill in the required fields", "error");
      setTouch({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className="border  shadow-md p-5 w-full max-w-md rounded-md">
      <h1 className="text-3xl text-center font-bold mb-5 text-indigo-600">
        Sign in
      </h1>

      <form className="flex flex-col gap-y-5" onSubmit={submitHandler}>
        {/* email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={`${
              errors.email && touch.email && "border-red-700 bg-red-50"
            } border-2 placeholder:font-light rounded-md px-2 py-3 outline-none`}
            placeholder="example@email.com"
            value={dataForm.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touch.email && <Error error={errors.email} />}
        </div>
        {/* password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={`${
              errors.password && touch.password && "border-red-700 bg-red-50"
            } border-2 placeholder:font-light rounded-md px-2 py-3 outline-none`}
            placeholder="password"
            value={dataForm.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touch.password && (
            <Error error={errors.password} />
          )}
        </div>
        <Button type="submit" text="Sign in" />

        <p className="text-gray-600 text-sm text-center">
          do you have an account?
          <Link
            to="/signup"
            className="text-indigo-400 underline underline-offset-2 ml-1 hover:text-indigo-600 transition-colors hover:no-underline"
          >
            Sign up
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Singin;
