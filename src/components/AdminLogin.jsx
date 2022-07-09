import React, { useState } from "react";
import PropTypes from "prop-types";
import bcrypt from "bcryptjs";
import { ReactSession } from "react-client-session";

const AdminLogin = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();

  const saltRounds = 10;

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      await fetch(`https://backendtesting1234.herokuapp.com/api/admin/${name}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    };
    fetchData().catch(console.error);
    console.log(data);

    const hash = bcrypt.hashSync(password, saltRounds);
    console.log(hash);
    console.log(data.passwordHash);
    if (bcrypt.compareSync(password, data.passwordHash)) {
      ReactSession.set("admin", "LoggedIn");
      const admin = ReactSession.get("admin");
      console.log(admin);
      refreshPage();
    }
  };

  return (
    <div>
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p class="text-lg font-medium">Admin Login</p>

            <div>
              <div class="relative mt-1">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="input w-full max-w-xl"
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </span>
              </div>
            </div>

            <div>
              <div class="relative mt-1">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="input w-full max-w-xl"
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="block w-full px-5 py-3 text-sm font-medium text-white bg-accent-color hover:bg-hover-color rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
