"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function AuthGuard(Component) {
  return function IsAuth(props) {
    const id = useSelector((state) => state.user.id);

    if (!id) {
      return redirect("/login");
    }

    return <Component {...props} />;
  };
}
