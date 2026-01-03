// import authReducer, { setCredentials, clearCredentials } from "./authSlice";

// describe("auth reducer", () => {
//   it("should handle initial state", () => {
//     expect(authReducer(undefined, { type: "unknown" })).toEqual({
//       token: null,
//       user: null,
//     });
//   });

//   it("should set credentials", () => {
//     const actual = authReducer(
//       undefined,
//       setCredentials({ token: "abc.123", user: { name: "Test" } })
//     );
//     expect(actual.token).toBe("abc.123");
//     expect(actual.user?.name).toBe("Test");
//   });

//   it("should clear credentials", () => {
//     const state = { token: "tok", user: { name: "x" } } as any;
//     const actual = authReducer(state, clearCredentials());
//     expect(actual.token).toBeNull();
//     expect(actual.user).toBeNull();
//   });
// });
