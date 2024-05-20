"use client"

export const Carousel = ()=>{
    return(
        <div>
            <div className="relative w-[100%] h-[600px] p-[10px]">
                <img className="w-[100%] h-[100%]" src="/carousel.png"/>
                <div className="absolute left-5 bottom-5 p-[40px] w-[550px] bg-white rounded-lg">
                    <p className="text-white bg-[#4B6BFB] mb-[10px] w-fit px-[10px] py-[5px] rounded-lg">Technology</p>
                    <h2 className="text-[36px]">Grid system for better <br></br>Design User Interface</h2>
                    <p className="text-[#97989F]">August 20, 2022</p>
                </div>
            </div>
            <div className="flex place-content-end gap-[5px] w-[100%] px-[10px] items-end">
                <img className="h-[24px] w-[24px]" src="/leftArrow.png"/>
                <img className="h-[24px] w-[24px]" src="/rightArrow.png"/>
            </div>
            
        </div>
    )
}