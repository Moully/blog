"use client"
export default function Home(){
    return(
        <form className="m-auto w-[600px] my-[100px]">
            <h2 className="font-bold text-[36px] my-[20px]">Contact Us</h2>
            <p className="text-justify text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="flex gap-[40px] my-[40px]">
                <div className="flex flex-col gap-[10px] border-2 w-1/2 rounded-lg p-[10px]">
                    <h2 className="font-semibold text-[24px]">Address</h2>
                    <p className="text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                </div>
                <div className="flex flex-col gap-[10px] border-2 w-1/2 rounded-lg p-[10px]">
                    <h2 className="font-semibold text-[24px]">Contact</h2>
                    <div className="flex flex-col text-[#696A75]">
                        <p>313-332-8662</p>
                        <p>info@email.com</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-2 rounded-lg p-[30px] bg-[#F6F6F7]">
                <h3 className="font-semibold mb-[10px] text-[20px]">Leave a Message</h3>
                <div className="flex gap-[20px] w-[100%] my-[20px]">
                    <input className="w-[50%] rounded-lg p-[10px]" placeholder="Your Name" type="text"/>
                    <input className="w-[50%] rounded-lg p-[10px]" placeholder="Your Email" type="text"/>
                </div>
                <input className="w-[100%] rounded-lg p-[10px] my-[10px]" placeholder="Subject" type="text"/>
                <textarea style={{resize:"none"}} className="w-[100%] rounded-lg p-[10px] my-[10px]" rows="5" placeholder="Write a message" />
                <button className="text-white w-fit px-[20px] py-[10px] my-[10px] rounded-lg bg-[#4B6BFB]" type="submit">Send message</button>
            </div>
        </form>
    )
}