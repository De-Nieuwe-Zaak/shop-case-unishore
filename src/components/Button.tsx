import React, { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  buttonType?: "right" | "left" | "none"
  variant?: "primary" | "secondary"
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  text,
  buttonType = "none",
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex justify-center items-center gap-2.5 px-5 py-2.5 text-md font-bold leading-none ${variant === "primary" ? "text-white bg-orange-600" : "text-black bg-white border border-1 border-gray-600"} rounded-full`}
    >
      {buttonType === "left" && (
        <img
          src="/arrow.svg"
          className="object-contain w-6 my-auto rotate-180 shrink-0 aspect-1"
        />
      )}
      <span>{text}</span>
      {buttonType === "right" && (
        <img
          src="/arrow.svg"
          className="object-contain w-6 my-auto shrink-0 aspect-1"
        />
      )}
    </button>
  )
}
