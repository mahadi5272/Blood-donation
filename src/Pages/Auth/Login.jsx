import UseAuth from "../../hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInUser} = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* password field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer{" "}
            </p>
          )}

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to Blood Donation?
          <Link
            state={location.state}
            className="text-blue-400 underline"
            to="/sign-up"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
