import React from 'react'
import gitHubImg from './../../assets/socials/gitHub.svg'
import telegramImg from './../../assets/socials/linkedIn.svg'

const Footer = () => {
    const currYear = new Date(Date.now()).getFullYear()

    return (
        <>
            <footer className="mt-auto px-0 pt-[60px] pb-[50px] bg-[var(--footer-bg)] text-[var(--footer-text)] max-sm:pt-[40px] max-sm:pb-[30px]">
                <div className="max-w-[1200px] my-0 mx-auto p-0 px-[15px]">
                    <div className="flex flex-col items-center gap-y-[27px] max-sm:gap-y-[20px]">
                        <ul className="flex gap-x-[30px] max-sm:gap-x-[20px] items-center">
                            <li className="max-sm:w-[28px]"><a target='_blank' href="https://github.com/Densdix/"><img src={gitHubImg} alt="Link" /></a></li>
                            {/* <li className="max-sm:w-[28px]"><a href="#"><img src={telegramImg} alt="Link" /></a></li> */}
                        </ul>
                        <div className="text-[16px]">
                            <p className='mt-[0.5em]'>© {currYear}<span className='font-semibold'> shustak.pp.ua</span> </p>
                        </div>
                    </div>
                </div>
            </footer></>
    )
}

export default Footer