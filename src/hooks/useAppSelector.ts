// Redux removed — use AuthContext / custom hooks instead.
// If you see this file imported anywhere, replace it with context-based hooks.

export const useAppSelector = () => {
  throw new Error(
    "useAppSelector: Redux has been removed. Use the AuthContext or other custom hooks instead."
  );
};

export default useAppSelector;
