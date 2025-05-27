import { useCallback, useState } from "react"

const useSwitch = (initialState = true) => {
  const [state, setState] = useState(initialState)
  const callback = useCallback(() => setState((state) => !state), [])
  return [state, callback]
}

export default useSwitch
