import Link from 'next/link'
import React from 'react'

const CommonLink = ({ redirectTo, linkText }) => {
    return (
        <div className='flex gap-8 flex-wrap items-center mt-4'>
            <Link href={redirectTo}
                style={{ transition: "all ease-in-out 0.3s" }}
                className='w-16 h-16 hover:scale-110 border-2 border-titlestroke-100 rounded-full flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                    <path d="M19.206 11.26H0.5V9.64899H19.206H20.3966L19.563 8.7989L12.7474 1.84907L13.8611 0.713909L23.4156 10.4502L13.8609 20.1949L12.7474 19.0599L19.563 12.1101L20.3966 11.26H19.206Z" fill="#101010" stroke="#004132" />
                </svg>
            </Link>
            <div className='text-title-100 text-2xl  title-stroke'>
                {linkText}
            </div>
        </div>
    )
}

export default CommonLink