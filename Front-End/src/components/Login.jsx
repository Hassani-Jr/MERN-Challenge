import axios from "axios";
import { useState } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

function Login() {
  const [data, setData] = useState([]);
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    password: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        username: userSignUp.username,
        password: userSignUp.password,
      });
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3000/user/update", {
        username: userSignUp.username,
        password: userSignUp.password,
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete("http://localhost:3000/user/delete", {
        username: userSignUp.username,
        password: userSignUp.password,
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={formSubmit} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            value={userSignUp.username}
            onChange={(e) =>
              setUserSignUp({
                ...userSignUp,
                username: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <div>
          <TextInput
            id="password1"
            type="password"
            required
            value={userSignUp.password}
            onChange={(e) =>
              setUserSignUp({
                ...userSignUp,
                password: e.target.value,
              })
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={forgotPassword} variant="secondary">
          Forgot password{" "}
        </Button>
        <Button type="button" onClick={deleteUser} variant="danger">
          Delete user
        </Button>
      </form>
      <div className="dark:text-white">{data}</div>
    </>
  );
}

export default Login;
