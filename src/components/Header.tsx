import Categories from "@/features/categories/Categories"
import { Button } from "./Button"

// Mock Header component
export default function Header() {
  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-wrap w-full gap-3 px-16 text-xs font-bold leading-snug bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap items-center gap-2 text-white max-md:max-w-full">
          <img
            loading="lazy"
            src="./check.svg"
            className="object-contain w-5 my-auto shrink-0 aspect-square"
          />
          <div>verzendkosten €3,95 vanaf €225,-</div>
          <img
            loading="lazy"
            src="./check.svg"
            className="object-contain w-5 my-auto shrink-0 aspect-square"
          />
          <div>Snelle levering</div>
          <img
            loading="lazy"
            src="./check.svg"
            className="object-contain w-5 my-auto shrink-0 aspect-square"
          />
          <div>Gratis retourneren</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full gap-5 py-3 pl-8 pr-20 font-medium bg-zinc-600 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/logo.png"
          className="object-contain shrink-0 aspect-square w-[78px]"
        />
        <div className="flex flex-wrap gap-10 px-8 py-4 my-auto text-lg leading-loose bg-white rounded-[100px] text-stone-900 max-md:px-5 max-md:max-w-full">
          <div>Waar ben jij naar op zoek?</div>
          <img
            loading="lazy"
            src="/search.svg"
            className="object-contain shrink-0 my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="flex items-center justify-center gap-10 text-white ">
          <img
            loading="lazy"
            src="/account.svg"
            className="object-contain w-5 mt-3 shrink-0 aspect-1"
          />
          <div className="relative">
            <img
              loading="lazy"
              src="/cart.svg"
              className="object-contain w-5 mt-3 shrink-0 aspect-1"
            />
            <div className="absolute top-0 -right-3 px-2 bg-orange-600 h-[22px] min-h-[22px] rounded-[214px] w-[22px] flex items-center justify-center">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>

      <Categories />
    </div>
  )
}
