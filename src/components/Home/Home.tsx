import React from 'react'
import headerImg from './../../assets/header-bg.png'

const Home = () => {
    return (
        <>
            <header
                style={{ backgroundImage: `url(${headerImg})` }}
                className={`py-[40px] px-0 min-h-[695px] max-sm:min-h-0 flex justify-center items-center bg-[var(--header-bg)] bg-no-repeat bg-center bg-auto text-[--header-text] text-center`}
            >
                <div className="py-0 px-[15px] max-w-[660px]">
                    <h1 className="mb-[20px] text-[40px] max-sm:text-[30px] font-bold leading-[1.4]">
                        <strong className='text-[60px] max-sm:text-[40px] font-bold'>Hi, my name is <em className='not-italic text-[var(--accent)]'>Dmytro Shustak</em></strong><br />
                        a frontend developer
                    </h1>
                    <div className="mb-[40px] text-[18px] leading-[1.333]">
                        <p className='mt-[0.5em]'>with passion for learning and creating.</p>
                    </div>
                    <a href="https://t.me/dshustak" target='_blank' className="inline-block mx-auto font-medium shadow bg-[var(--accent)] hover:opacity-80 focus:shadow-outline focus:outline-none active:top-[1px] active:relative text-[var(--white)] text-[16px] py-3 px-7 rounded-[5px]">Contact me</a>
                </div>
            </header>

            <main className="py-[70px] max-sm:py-[40px] px-0 ">
                <div className="max-w-[1200px] my-0 mx-auto p-0 px-[15px]">

                    <ul className="my-0 mx-auto max-w-[570px] flex flex-col items-center gap-y-[40px] max-sm:gap-y-[20px] text-center">
                        <li className="text-[18px] max-sm:text-[16px] leading-[1.5]">
                            <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3] max-sm:mb-[10px] max-sm:text-[30px]">Frontend</h2>
                            <p className='mt-[0.5em]'>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, Yarn, TailwindCSS</p>
                        </li>
                        <li className="text-[18px] max-sm:text-[16px] leading-[1.5]">
                            <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3] max-sm:mb-[10px] max-sm:text-[30px]">Backend</h2>
                            <p className='mt-[0.5em]'>NodeJS, ExpressJS, MySQL, PostgreSQL, Sequelize</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Home