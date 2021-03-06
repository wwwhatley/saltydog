import React from "react";

export default function SignUp({
  className,
  handleChange,
  handleSubmit,
  inputRef,
  errors = [],
  name = "",
  phone = "",
  email = "",
  hear = "",
  other = ""
}) {
  return (
    <section className={className}>
      <form className="form-container" onSubmit={handleSubmit}>
        <section className="inner-form-container">
          <h1 className="header">Log In</h1>
          <label htmlFor="name" className="input">
            <input
              type="input"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="email" className="input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <div className="button-container">
            <button className="button">Log In</button>
          </div>
        </section>
        <section className="errors">
          {Boolean(errors.length) &&
            <div>
              <h3>You have the following errors</h3>
              <ul>
                {errors.map(error => {
                  return (
                    <li>
                      {error}
                    </li>
                  );
                })}
              </ul>
            </div>}
        </section>
      </form>
    </section>
  );
}
