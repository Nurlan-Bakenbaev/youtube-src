import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});
const lastName = createSlice({
  
})
export const { setFirstName } = userSlice.actions;
export default userSlice.reducer;
