import { useAuthInitialization } from "./hooks/useAuth"
import { AppRouter } from "./router/AppRouter"

export const TarijaSur = () => {

  useAuthInitialization()
  return (
    <>
      <AppRouter />
    </>
  )
}
