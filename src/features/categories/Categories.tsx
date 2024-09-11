import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store"
import { useAppDispatch } from "@/app/hooks"
import { fetchCategories } from "./categoriesSlice"
import { Button } from "@/components/Button"

const Categories: React.FC = () => {
  const dispatch = useAppDispatch()
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div className="flex flex-wrap gap-10 px-16 py-3 max-w-full bg-zinc-50 w-[1439px] max-md:px-5">
      <div className="flex flex-wrap items-center flex-auto gap-6 my-auto text-base font-medium text-black uppercase bg-stone-50 max-md:max-w-full">
        {categories.map(category => (
          <a
            className="self-stretch my-auto cursor-pointer hover:text-orange-600"
            key={category}
          >
            {category}
          </a>
        ))}
      </div>
      <Button
        text={categories.at(-1) || ""}
        buttonType="right"
        onClick={() => {
          alert("hoi")
        }}
      />
    </div>
  )
}

export default Categories
