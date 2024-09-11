// Mock Hero component

type HeroProps = {
  title: string
  description: string
  buttonText: string
  image: string
}
export default function Hero({
  title,
  description,
  buttonText,
  image,
}: HeroProps) {
  return (
    <div className="rounded-none">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            className="object-contain grow w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
          <div className="z-10 flex flex-col self-stretch w-full my-auto -mr-11 max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold leading-[52px] text-stone-900 max-md:max-w-full">
              {title}
            </div>
            <p>{description}</p>
            <div className="gap-2.5 self-start px-10 py-4 mt-28 text-lg font-medium text-center text-black bg-white rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10">
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
