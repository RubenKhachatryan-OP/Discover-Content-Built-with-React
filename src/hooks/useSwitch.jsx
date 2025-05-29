import { useCallback, useState } from "react"

const useSwitch = (initialState = true) => {
  const [state, setState] = useState(initialState)
  const callback = useCallback(
    (newState = null) =>
      typeof newState === "boolean"
        ? setState(newState)
        : setState((state) => !state),
    []
  )
  return [state, callback]
}

export default useSwitch
