/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="m-auto flex w-[600px] my-[100px]">
      <h2 className="text-[72px] border-right-2 ">404</h2>
      <div className="flex flex-col gap-[10px]">
        <h3 className="font-semibold">Page not found</h3>
        <p className="text-[#696A75]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <button className="px-[20px] py-[10px] bg-[background: #4B6BFB] text-white w-fit">
          Back to Home
        </button>
      </div>
    </div>
  )
}
