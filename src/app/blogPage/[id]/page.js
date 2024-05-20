"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    const getData = async () => {
      setIsLoading(true)
      const res = await fetch(`https://dev.to/api/articles/${id}`)
      const data = await res.json()
      setPost(data)
      setIsLoading(false)
    }
    getData()
  }, [id])


  if (!post) {return <>Loading</>}

  return (
        <div className="mt-[50px] mb-[400px] w-[80%] m-auto">
            <h2 className="my-[20px] text-[36px] text-center">{post.title}</h2>
            <img src={post.social_image} className="rounded-xl my-[40px]"/>
            <div className="flex flex-col m-auto parent" dangerouslySetInnerHTML={{ __html: post.body_html }}></div>
        </div>
  )
}
