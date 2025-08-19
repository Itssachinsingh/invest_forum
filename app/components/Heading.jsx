import React from 'react'

export const Heading = ({text, bg}) => {
    return (
        <div>
            <div
                className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${bg} px-2`}  data-aos="fade-up" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 py-2 sm:py-4">
                    {text}
                </h2>
            </div>
        </div>
    )
}
