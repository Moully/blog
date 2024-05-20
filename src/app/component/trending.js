"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

export const Trending = ()=>{
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
      fetch(`https://dev.to/api/articles?top=4&&per_page=4`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return(

        <div className="my-[40px]">
            <h2 className="text-[24px] font-bold my-[10px]">Trending</h2>
            <div className="grid grid-cols-4 gap-[20px]">
                {data.map((item, index)=>(
                    <Link href={`/blogPage/${item.id}`}>
                        <div key={index} className="h-[320px] relative rounded-lg overflow-hidden">
                            <img className="w-[100%] h-[100%]" src={item.social_image}/>
                            <div className="h-[320px] w-[100%] z-10 absolute left-0 top-0 rounded-lg" style={{backgroundColor:"rgb(0, 0, 0, 0.6)"}}>
                                <div className="p-[20px] absolute bottom-0 left-0"> 
                                    <p className="bg-[#4B6BFB] w-fit px-[10px] py-[5px] rounded-md mb-[5px] text-white">{item.tags.split(",")[0]}</p>
                                    <p style={{ display: "box", boxOrient: "vertical" }} className="my-[10px] line-clamp-[2] text-justify text-ellipsis text-white text-600">
                                        {item.description}{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}