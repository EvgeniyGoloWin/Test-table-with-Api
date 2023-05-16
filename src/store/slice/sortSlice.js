// import { createSlice } from "@reduxjs/toolkit";
//
// const initialState = {
//     isAscending: true,
// };
//
// const compareValues = (a, b, label, isAscending) => {
//     if (a[label] < b[label]) {
//         return isAscending ? -1 : 1;
//     }
//     if (a[label] > b[label]) {
//         return isAscending ? 1 : -1;
//     }
//     return 0;
// };
//
// const sortSlice = createSlice({
//     name: "sort",
//     initialState,
//     reducers: {
//         toggleSortDirection: (state) => {
//             state.isAscending = !state.isAscending;
//         },
//     },
// });
//
// export const { toggleSortDirection } = sortSlice.actions;
// export const sortReducer = sortSlice.reducer;
// export default sortReducer;
