import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("Required")
        .min(2, "minimum 2 characters"),
    lastName: yup
        .string()
        .required("Required")
        .min(2, "minimum 2 characters"),
	email: yup
		.string()
		.email("Required, must be in a valid email format")
		.required("Required, must be in a valid email format"),
    message: yup
        .string()
        .required("Message is required")
        .min(10, "Message has to be longer then 10 characters")
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("message", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" placeholder="First name" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" placeholder="Last name" ref={register} />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Please enter your email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" as="textarea" rows="3" name="message" placeholder="Your message here" ref={register} />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default Contact;