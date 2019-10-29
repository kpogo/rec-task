import React, { useState, useEffect } from 'react';
import InputFiled from './InputField';

const Form = () => {
  //State - represent user inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password2: ''
  });
  //Destruc form data state
  const { name, email, phone, password, password2 } = formData;

  //Validation states:
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validPassword2, setValidPassword2] = useState(false);

  //When user types
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Name validator effect
  useEffect(() => {
    const nameValidator = () => {
      const validName = new RegExp(
        "^([a-zA-Z]+[',.-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[',.-]?[a-zA-Z ]+)+$",
        'gi'
      );

      if (name.match(validName)) {
        setValidName(true);
      } else {
        setValidName(false);
      }
    };

    nameValidator();
  }, [name]);

  //Email validator effect
  useEffect(() => {
    const emailValidator = () => {
      const validEmail = new RegExp(
        '^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,5})$'
      );
      if (email.match(validEmail)) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    };
    emailValidator();
  }, [email]);

  //Phone validator effect
  useEffect(() => {
    const phoneValidator = () => {
      const validPhone = new RegExp('^[0-9]{8,12}$');
      if (phone.match(validPhone)) {
        setValidPhone(true);
      } else {
        setValidPhone(false);
      }
    };
    phoneValidator();
  }, [phone]);
  //Password validatior effect
  useEffect(() => {
    const passwordValidator = () => {
      if (password.length < 6) {
        setValidPassword(false);
      } else if (password.length >= 6) {
        setValidPassword(true);

        if (password !== password2) {
          setValidPassword2(false);
        } else {
          setValidPassword2(true);
        }
      }
    };
    passwordValidator();
  }, [password, password2]);
  //onSubmit
  const onSubmit = e => {
    e.preventDefault();

    if ((validName, validEmail, validPhone, validPassword, validPassword2)) {
      let newUser = {
        name: name,
        email: email,
        phone: phone,
        password: password
      };

      alert(
        `Details of the new user has been successfully collected and are ready to be send\nData collected:\nName: ${newUser.name}\nEmail: ${newUser.email}\nPhone: ${newUser.phone}\nPassword: ${newUser.password}\n`
      );

      //Clear states
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
      });
      setValidName(false);
      setValidEmail(false);
      setValidPhone(false);
      setValidPassword(false);
      setValidPassword2(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <InputFiled
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Full name"
        iconLable="fas fa-user"
        iconStatus="fas fa-check"
        valid={validName}
        warning="Please provide you full name e.g John Smith, Kate Clark"
      />
      <InputFiled
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email address"
        iconLable="fas fa-at"
        iconStatus="fas fa-check"
        valid={validEmail}
        warning="Please provide a valid email address e.g johny182@gmail.com"
      />
      <InputFiled
        type="text"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder="Phone number"
        iconLable="fas fa-phone-alt"
        iconStatus="fas fa-check"
        valid={validPhone}
        warning="Phone number must consist of at least 8 up to 12 digits"
      />
      <InputFiled
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        iconLable="fas fa-lock"
        iconStatus="fas fa-check"
        valid={validPassword}
        warning="Password must consist of at least 6 characters"
      />
      <InputFiled
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
        placeholder="Re-Password"
        iconLable="fas fa-lock"
        iconStatus="fas fa-check"
        valid={validPassword2}
        warning="Please repeat the password provided above"
      />
      <button
        type="submit"
        className={`btn ${
          !validName ||
          !validEmail ||
          !validPhone ||
          !validPassword ||
          !validPassword2
            ? 'btn-disabled'
            : 'btn-success'
        }`}
        disabled={
          !validName ||
          !validEmail ||
          !validPhone ||
          !validPassword ||
          !validPassword2
            ? true
            : false
        }
      >
        Sign-up
      </button>
    </form>
  );
};

export default Form;
