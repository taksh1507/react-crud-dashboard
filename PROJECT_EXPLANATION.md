# Technical Overview

## Redux Implementation

**usersSlice.js**:
- State: `{ users, loading, error }`
- Async thunk: `getUsersFromAPI` - Fetches data with error handling
- Reducers: `addUser`, `updateUser`, `deleteUser`, `clearError`

```javascript
// Async thunk handles 3 states:
pending: loading = true
fulfilled: loading = false, store users
rejected: error set
```

## CRUD Operations

1. **Create**: `addUser` reducer adds to state (auto ID)
2. **Read**: `getUsersFromAPI` fetches on app mount
3. **Update**: `updateUser` modifies user by ID
4. **Delete**: `deleteUser` filters out user

## Component Design

- **UserForm**: Form input + validation, dispatches actions
- **UserTable**: Maps users to rows, handles edit/delete
- **App**: Manages state, coordinates components

## Key Patterns

- **Redux Toolkit** simplifies Redux (auto action creators, Immer)
- **createAsyncThunk** handles async with loading/error states
- **useSelector/useDispatch** connect components to Redux
- **Service layer** separates API logic from Redux

## Service Layer

`userApi.js` exports `fetchUsers()` - Single source for API calls

## Scalability

- Add slices for new features
- Reusable service functions
- Component modularity
- Redux DevTools for debugging
