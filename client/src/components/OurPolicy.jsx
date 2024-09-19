import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

            <div>
                <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="exchange icon" />
                <p>Easy Exchange Policy</p>
                <p className='text-gray-500'>We Offer Hassle Free Exchanges</p>
            </div>

            <div>
                <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="quality icon" />
                <p>Return Policy</p>
                <p className='text-gray-500'>7 Day Free Returns, No Questions Asked</p>
            </div>

            <div>
                <img className='w-12 m-auto mb-5' src={assets.support_img} alt="support image" />
                <p>Award Winning Support</p>
                <p className='text-gray-500'>Here To Help, 7 Days A Week</p>
            </div>

        </div>
    )
}

export default OurPolicy