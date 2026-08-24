'use client'


import CustomButton from "../forms/CustomButton";




const ConversationDetail = () => {
    

    return (
        <>
            <div 
              
                className="my-20 max-h-[400px] overflow-auto flex flex-col space-y-4"
            >
               
                    <div
                    
                        className={`w-[80%]py-4 px-6 rounded-xl ml-[20%] bg-blue-200 `}
                    >
                        <p className="font-bold text-gray-500">Pramil</p>
                        <p>lallalalalalaallaal</p>
                    </div>
             

                
                    <div
                       
                        className={`w-[80%]py-4 px-6 rounded-xl bg-gray-200`}
                    >
                        <p className="font-bold text-gray-500">Dikshya</p>
                        <p>i love u</p>
                    </div>
               
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message.."
                    className="w-full p-2 bg-gray-200 rounded-xl"
         
                />

                <CustomButton 
                onClick={()=> console.log('clicked')}
                lable="send" />
            </div>
        </>
    )
}

export default ConversationDetail;