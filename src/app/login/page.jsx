"use client";
import useLogin from "@/hooks/api/auth/useLogin";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { LoginSchema } from "./schemas/LoginSchema";

const Login = () => {
  const router = useRouter();
  const { id } = useSelector((state) => state.user);

  const { mutateAsync: login, isPending } = useLogin();

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const userlogin = {
        usernameOrEmail: values.usernameOrEmail,
        password: values.password,
      };

      await login(userlogin);
    },
  });

  if (id) {
    return router.replace("/");
  }

  return (
    <div className="md:p-20 p-10">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <Image
              src="/acs.png"
              width={100}
              height={20}
              alt="Picture of the author"
            ></Image>
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">Login your account</p>
          <div className="flex items-center justify-center mt-6">
            <Link
              href="/login"
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b-2 border-red-500 dark:border-gray-400 dark:text-gray-300"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b  dark:border-blue-400 dark:text-white"
            >
              Register
            </Link>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="usernameOrEmail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.usernameOrEmail}
              />
              {formik.touched.usernameOrEmail &&
              formik.errors.usernameOrEmail ? (
                <div className="text-red-600">
                  {formik.errors.usernameOrEmail}
                </div>
              ) : null}
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm text-gray-600  hover:text-gray-500"
              >
                Forget Password?
              </a>

              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-900 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                disabled={isPending}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">
            Don&rsquo;t have an account?{" "}
          </span>

          <a
            href="/register"
            className="mx-2 text-sm font-bold text-red-900  hover:underline"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
