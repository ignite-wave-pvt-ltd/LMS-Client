// Redux removed — use AuthContext / custom hooks instead.
// If you see this file imported anywhere, replace it with context-based hooks.

export const useAppDispatch = () => {
  throw new Error(
    "useAppDispatch: Redux has been removed. Use the AuthContext or other custom hooks instead."
  );
};

export default useAppDispatch;
