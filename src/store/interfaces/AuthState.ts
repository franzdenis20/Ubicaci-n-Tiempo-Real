
export interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated"
  user: null | {
    username : string;
    password : string;
  }
  errorMessage: string | null
}