import React from 'react'

const Contacts = () => {
  return (
    <>
    <main className="py-[70px] max-sm:py-[40px] px-0">
        <div className="my-0 mx-auto py-0 px-[15px] max-w-[1200px]">
                <h1 className="mb-[60px] max-sm:mb-[30px] text-[60px] max-sm:text-[40px] font-bold leading-[1.3] text-[var(--title-1)] text-center">Contacts</h1>

                <ul className="my-0 mx-auto max-w-[570px] flex flex-col items-center gap-y-[40px] max-sm:gap-y-[20px] text-center">
                    <li className="text-[18px] max-sm-[16px] leading-[1.5]">
                        <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3] max-sm:mb-[10px] max-sm:text-[30px]">Location</h2>
                        <p>Mykolaiv, Ukraine</p>
                    </li>
                    <li className="text-[18px] max-sm-[16px] leading-[1.5]">
                        <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3] max-sm:mb-[10px] max-sm:text-[30px]">Mobile / Telegram</h2>
                        <p><a className='text-indigo-500' href="tel:+79051234567">+380 (97) 818-17-20</a></p>
                    </li>
                    <li className="text-[18px] max-sm-[16px] leading-[1.5]">
                        <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3] max-sm:mb-[10px] max-sm:text-[30px]">Email</h2>
                        <p><a className='text-indigo-500' href="mailto:dmitriyshustak@gmail.com">dmitriyshustak@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
  </>
  )
}

export default Contacts