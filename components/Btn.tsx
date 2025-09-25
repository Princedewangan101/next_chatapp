import React from 'react'

const Btn = () => {
    return (
        <>
            {/* <div className='btn relative  px-3 py-1 mt-5 border  bg-transparent'>
                <div className='absolute top-8 left-[-18px] border h-27 w-27 rounded-full'></div>
                <div className='btn_text z-10'>Discuss</div>
            </div> */}

            {/* <div className="btn group relative overflow-hidden px-3 py-1 mt-5 border bg-transparent cursor-pointer ">
                <div className="absolute z-9 top-8 left-[-18px] border h-27 w-27 rounded-full bg-white transition-all duration-500 group-hover:top-[-20px]"></div>
                <div className="btn_text z-10 text-white transition-colors duration-500 group-hover:text-black">
                    Discuss
                </div>
            </div> */}

            <div className="btn group relative overflow-hidden px-3 py-1 mt-5 border bg-transparent cursor-pointer">
                <div className="absolute top-8 left-[-18px] border h-27 w-27 rounded-full bg-white transition-all duration-500 group-hover:top-[-20px] z-0"></div>
                <div className="btn_text z-10 text-white transition-colors duration-500 group-hover:text-black">
                    Discuss
                </div>
            </div>


        </>
    )
}

export default Btn
