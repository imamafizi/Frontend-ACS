"use client";
import useRegister from "@/hooks/api/auth/useRegister";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaBuilding,
  FaEnvelope,
  FaIdCard,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RegisterSchema } from "./schemas/RegisterSchema";

const Register = () => {
  const router = useRouter();
  const { id } = useSelector((state) => state.user);
  const { mutateAsync: register, isPending } = useRegister();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      jabatan: "",
      company: "",
      badge: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      const { username, email, jabatan, company, badge, password } = values;
      await register({ username, email, jabatan, company, badge, password });
    },
  });

  if (id) {
    return router.replace("/");
  }

  return (
    <div className="md:p-20 p-10">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="px-6 py-4">
          <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center mx-auto">
              <Image
                src="/acs.png"
                width={100}
                height={20}
                alt="Picture of the author"
              />
            </div>
            <h3 className="mt-3 text-xl font-medium text-center text-gray-600">
              Welcome
            </h3>
            <p className="mt-1 text-center text-gray-500">Create account</p>

            <div className="flex items-center justify-center mt-6">
              <Link
                href="/login"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-red-500"
              >
                Register
              </Link>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute left-3">
                <FaUser className="w-6 h-6 text-gray-300" />
              </span>
              <div className="w-full">
                <input
                  type="text"
                  name="username"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-10 focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="User Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.fullName}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute left-3">
                <FaEnvelope className="w-6 h-6 text-gray-300" />
              </span>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-10 focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute left-3">
                <FaIdCard className="w-6 h-6 text-gray-300" />
              </span>
              <div className="w-full">
                <input
                  type="text"
                  name="jabatan"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-10 focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Jabatan"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jabatan}
                />
                {formik.touched.jabatan && formik.errors.jabatan ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.jabatan}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute left-3">
                <FaBuilding className="w-6 h-6 text-gray-300" />
              </span>
              <div className="w-full">
                <input
                  type="text"
                  name="company"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-10 focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Company"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                />
                {formik.touched.company && formik.errors.company ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.company}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute left-3">
                <FaBuilding className="w-6 h-6 text-gray-300" />
              </span>
              <div className="w-full">
                <input
                  type="text"
                  name="badge"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-10 focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="badge"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.badge}
                />
                {formik.touched.badge && formik.errors.badge ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.badge}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute left-3">
                <FaLock className="w-6 h-6 text-gray-300" />
              </span>
              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute left-3">
                <FaLock className="w-6 h-6 text-gray-300" />
              </span>
              <div className="w-full">
                <input
                  type="password"
                  name="confirmPassword"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-900 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
                disabled={isPending}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50">
          <a href="/login" className="text-sm text-red-900 hover:underline ">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
