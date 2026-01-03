# Architecture notes — Auth & Routing (added)

- Centralized auth using a **Context + Custom Hooks** approach (`src/contexts/AuthContext.tsx` + `src/hooks/useAuth.ts`) with typed state (token, user).
- `AuthProviderWrapper` (`src/providers/AuthProvider.tsx`) initializes auth from `localStorage` and provides the `AuthContext` to the app.
- Hook `useAuth` (`src/hooks/useAuth.ts`) provides `login(token)`, `logout()`, `isAuthenticated`, `user`, and `token`.
- `ProtectedRoute` and `withAuth` HOC protect routes and preserve intended navigation (redirect back after login).
- `App.tsx` now wraps protected student routes under `ProtectedRoute` and uses `AppLayout` (per-route header/footer control).

Notes:

- Auth is now centralized in `AuthContext` (`src/contexts/AuthContext.tsx`) and `useAuth` (`src/hooks/useAuth.ts`). Replace token verification with a backend call for production.
- Previously introduced Redux store files remain in `src/store/` but are deprecated; feel free to remove them to avoid confusion.
- For enterprise scale, add role-based access checks into `AuthContext` and `ProtectedRoute`.

## Next improvements

- Add an `AuthService` that verifies tokens with backend and refresh tokens.
- Add E2E tests for login flow and protected routing.
- Add an `AuthProvider` that exposes a reactive `useAuth` context without requiring `useSelector` in components that don't need store access.
