import { useState } from "react"

// Use pre-typed versions of the React-Redux
// `useDispatch` and `useSelector` hooks
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"
import { Button } from "@/components/Button"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex ">
        <Button
          variant="secondary"
          text="Decrement"
          onClick={() => dispatch(decrement())}
        />

        <span className="w-20 p-2 text-center" aria-label="Count">
          {count}
        </span>
        <Button
          variant="secondary"
          text="Increment"
          onClick={() => dispatch(increment())}
        />
      </div>
      <div className="flex gap-5 ">
        <input
          className="w-20 p-2 border border-gray-300 rounded-md"
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <Button
          variant="secondary"
          text="Add Amount"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        />
      </div>
      <div className="flex gap-5">
        <Button
          variant="secondary"
          text="Add Async"
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        />

        <Button
          variant="secondary"
          text="Add If Odd"
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        ></Button>
      </div>
    </div>
  )
}
