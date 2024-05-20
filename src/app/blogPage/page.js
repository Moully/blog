"use client"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { search } from "../layout"


export default function Home() {
  const [data, setData] =useState(null)
  const [isLoading, setLoading] = useState(true)
  const [postNumber, setPostNumber] = useState(12)
  const {searchValue}=useContext(search)
  useEffect(()=>{
    fetch(`https://dev.to/api/articles?per_page=${postNumber}`)
    .then((res)=>res.json())
    .then((data)=>{
      setData(data)
      setLoading(false)
    })
  }, [postNumber])
  if(isLoading) return <p>Loading ...</p>
  if (!data) return <p>No profile data</p>
  return (
    <div className="my-[40px]">
    <h2 className="text-[24px] font-bold my-[10px]">All Blog Post</h2>
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-[20px]">
        {data.filter((item)=>item.title.includes(searchValue)).map((item, index) => (
          <Link href={`/blogPage/${item.id}`} key={index}>
            <div
              key={index}
              className="flex flex-col rounded-lg overflow-hidden border-2 p-[20px]"
            >
              <img
                className="w-[100%] h-[240px] rounded-lg"
                src={item.social_image}
              />
              <div className="px-[10px]">
                <p className="bg-[#4B6BFB0D] w-fit px-[10px] py-[5px] my-[10px] rounded-md mb-[5px] text-[#4B6BFB] text-semibold">
                  {item.tags.split(",")[0]}
                </p>
                <p
                  style={{ display: "box", boxOrient: "vertical" }}
                  className="my-[10px] line-clamp-[3] text-justify text-ellipsis text-[#181A2A] text-semibold"
                >
                  {item.description}{" "}
                </p>
                <p className="text-[#97989F] my-[10px]">{item.published_at.slice(0, 10)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
        <button
          onClick={() => setPostNumber((prev) => prev + 3)}
          className="my-[40px] m-auto bg-[#696A754D] text-[#696A75] w-fit rounded-md px-[20px] py-[10px]"
        >
          Load More
        </button>
    </div>
  </div>
  )
}