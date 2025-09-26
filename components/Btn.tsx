import React from 'react'

const Btn = (props: { btn_text: string | number }) => {
    return (
        <>
            
            <div className="btn group relative overflow-hidden px-6 py-1 mt-5 border bg-transparent cursor-pointer">
                <div className="absolute top-8 left-[-6px] border h-27 w-27 rounded-full bg-white transition-all duration-500 group-hover:top-[-37px] z-0"></div>
                <div className="btn_text z-10 text-white transition-colors duration-500 group-hover:text-black">
                    {props.btn_text}
                </div>
            </div>


        </>
    )
}

export default Btn
