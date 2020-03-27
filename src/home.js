import * as React from "react";
import { styled } from "baseui";
import { DisplaySmall } from "baseui/typography";
import { Button } from "baseui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormInput } from "./components/form";
import { useDispatch } from "react-redux";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  width: "auto",
});

const validationSchema = yup.object().shape({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  // lastName: "",
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).max(25).label("Password"),
  // username: "",
});

const Home = () => {
  const dispatch = useDispatch();

  const formikInstance = useFormik({
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      dispatch({
        type: "add new data",
        user: values,
      });
      // eslint-disable-next-line no-undef
      console.log(values, formikHelpers);
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        console.log("done");
        formikInstance.setSubmitting(false);
      }, 5000);
    },
    validateOnChange: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <div style={{ flex: 9, padding: 10 }}>
      <Centered>
        <div>
          <DisplaySmall>Form</DisplaySmall>
        </div>
        <div style={{ width: 600 }}>
          <FormInput
            label="First Name"
            autoFocus
            required={true}
            error={
              formikInstance.touched.firstName &&
              formikInstance.errors.firstName
            }
            onBlur={formikInstance.handleBlur("firstName")}
            onChange={formikInstance.handleChange("firstName")}
            placeholder="Please enter your first name"
          />
        </div>
        <div style={{ width: 600 }}>
          <FormInput
            label="Last Name"
            required={true}
            error={
              formikInstance.touched.lastName && formikInstance.errors.lastName
            }
            onBlur={formikInstance.handleBlur("lastName")}
            onChange={formikInstance.handleChange("lastName")}
            placeholder="Please enter your last name"
          />
        </div>
        <div style={{ width: 600 }}>
          <FormInput
            label="Email"
            required={true}
            error={formikInstance.touched.email && formikInstance.errors.email}
            onBlur={formikInstance.handleBlur("email")}
            onChange={formikInstance.handleChange("email")}
            placeholder="Please enter your email"
          />
        </div>
        <div style={{ width: 600 }}>
          <FormInput
            label="Password"
            required={true}
            error={
              formikInstance.touched.password && formikInstance.errors.password
            }
            onBlur={formikInstance.handleBlur("password")}
            onChange={formikInstance.handleChange("password")}
            placeholder="Please enter your password"
            min={8}
            type="password"
            max={25}
          />
        </div>
        <div>
          <Button
            onClick={formikInstance.handleSubmit}
            isLoading={formikInstance.isSubmitting}
          >
            Submit
          </Button>
        </div>
      </Centered>
    </div>
  );
};

Home.displayName = "home";

export default Home;
