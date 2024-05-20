"use client"
import { Carousel } from "./component/carousel"
import { Trending } from "./component/trending"
import { Allblogs } from "./component/allblogs"

export default function Home() {
  return (
    <div>
      <Carousel />
      <Trending />
      <Allblogs />
    </div>
  )
}
