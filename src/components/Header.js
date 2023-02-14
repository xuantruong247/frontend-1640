import React from 'react'

export default function Header() {
    return (
        <>
            <header className='mt-3 '>
                <div className="flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2 mx-20">
                        <img src='https://seeklogo.com/images/C/CMS-logo-C675F3A03E-seeklogo.com.png' style={{height:40, width:140}} id='logo' />
                    </a>
                    <a className='mx-20 p-2'>
                        <button type="button" className="px-3 py-2 font-semibold rounded bg-gray-100 text-gray-800 
                            transition ease-in-out delay-150 hover:scale-110 hover:bg-red-300
                            ">Sign in</button>
                    </a>

                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
            <hr />
        </>
    )
}
