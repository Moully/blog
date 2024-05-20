"use client"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
import { search } from "../layout"

export const Allblogs = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [postNumber, setPostNumber] = useState(9)
  const [filter, SetFilter] =useState("")
  const {searchValue} = useContext(search)

  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=${postNumber}${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [postNumber, filter])
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  return (
    <div className="my-[40px]">
      <h2 className="text-[24px] font-bold my-[10px]">All Blog Post</h2>
      <div className="flex flex-col">
        <div className="w-[100%] flex justify-between my-[20px]">
          <div className="flex gap-[20px]">
            <button onClick={(()=>{SetFilter('')})} className="hover:text-[#D4A373]">All</button>
            <button onClick={(()=>{SetFilter('&tag=design')})} className="hover:text-[#D4A373]">Design</button>
            <button onClick={(()=>{SetFilter('&tag=travel')})} className="hover:text-[#D4A373]">Travel</button>
            <button onClick={(()=>{SetFilter('&tag=fashion')})} className="hover:text-[#D4A373]">Fashion</button>
            <button onClick={(()=>{SetFilter('&tag=technology')})} className="hover:text-[#D4A373]">Technology</button>
            <button onClick={(()=>{SetFilter('&tag=branding')})} className="hover:text-[#D4A373]">Branding</button>
          </div>
          <div>
            <Link href={`/blogPage`}>
              <p className="hover:text-[#D4A373]">View All</p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px]">
          {data.filter((item)=>item.title.includes(searchValue)).map((item, index) => (
            <Link href={`/blogPage/${item.id}`}>
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
