import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "@/redux/slices/userSlices"

export default configureStore({
    reducer: {
        user: usersReduser,
    },
});
