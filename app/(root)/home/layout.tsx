import Navbar from '@/components/custom/navbar';
import Sidebar from '@/components/custom/sidebar';
import React, { ReactNode } from 'react';

const RootLayout = ({ children } : { children: ReactNode }) => {
    return (
        <main className='relative'>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <aside className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                    <section className='w-full'>
                        {children}
                    </section>
                </aside>
            </div>
        </main>
    )
}

export default RootLayout;