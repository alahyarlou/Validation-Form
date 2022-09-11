import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validation } from "./../../utils/Validation";
import { RiErrorWarningFill } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "../../utils/Toast";

const Signup = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    confiremPassword: "",
    isAccepted: false,
  });

  const [errors, setErorrs] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErorrs(validation(dataForm));
  }, [dataForm]);

  const changeHandler = (e) => {
    e.target.name === "isAccepted"
      ? setDataForm({ ...dataForm, [e.target.name]: e.target.checked })
      : setDataForm({ ...dataForm, [e.target.name]: e.target.value });
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
        name: true,
        email: true,
        password: true,
        confiremPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className="border  shadow-md p-5 w-full max-w-md rounded-md">
      <h1 className="text-3xl text-center font-bold mb-5 text-indigo-600">
        Sign up
      </h1>

      <form className="flex flex-col gap-y-5" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          {/* name */}
          <label htmlFor="name">name</label>
          <input
            type="name"
            name="name"
            id="name"
            className={`${
              errors.name && touch.name && "border-red-700 bg-red-50"
            } border-2 placeholder:font-light rounded-md px-2 py-3 outline-none`}
            placeholder="name"
            value={dataForm.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touch.name && (
            <p className="text-sm flex items-center gap-x-2 text-red-700 bg-red-200 p-2 rounded-md font-medium">
              <RiErrorWarningFill className="text-xl" />
              {errors.name}
            </p>
          )}
        </div>
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
          {errors.email && touch.email && (
            <p className="text-sm flex items-center gap-x-2 text-red-700 bg-red-200 p-2 rounded-md font-medium">
              <RiErrorWarningFill className="text-xl" />
              {errors.email}
            </p>
          )}
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
            <p className="text-sm flex items-center gap-x-2 text-red-700 bg-red-200 p-2 rounded-md font-medium">
              <RiErrorWarningFill className="text-xl" />
              {errors.password}
            </p>
          )}
        </div>
        {/* confirem password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="confiremPassword">confiremPassword</label>
          <input
            type="password"
            name="confiremPassword"
            id="confiremPassword"
            className={`${
              errors.confiremPassword &&
              touch.confiremPassword &&
              "border-red-700 bg-red-50"
            } border-2 placeholder:font-light rounded-md px-2 py-3 outline-none`}
            placeholder="confiremPassword"
            value={dataForm.confiremPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confiremPassword && touch.confiremPassword && (
            <p className="text-sm flex items-center gap-x-2 text-red-700 bg-red-200 p-2 rounded-md font-medium">
              <RiErrorWarningFill className="text-xl" />
              {errors.confiremPassword}
            </p>
          )}
        </div>
        {/* checkbox roles */}
        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            name="isAccepted"
            id="isAccepted"
            value={dataForm.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <label htmlFor="isAccepted" className="select-none cursor-pointer">
            I agree with the rules
          </label>
        </div>
        {errors.isAccepted && touch.isAccepted && (
          <p className="text-sm flex items-center gap-x-2 text-red-700 bg-red-200 p-2 rounded-md font-medium">
            <RiErrorWarningFill className="text-xl" />
            {errors.isAccepted}
          </p>
        )}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-7 py-4 rounded-md transition-colors hover:bg-indigo-700"
        >
          Sign up
        </button>

        <p className="text-gray-600 text-sm text-center">
          alredy have account?
          <Link
            to="/login"
            className="text-indigo-400 underline underline-offset-2 ml-1 hover:text-indigo-600 transition-colors hover:no-underline"
          >
            Sign in
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
