"use client";

import { SIDEBAR_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <section className='sticky left-0 top-0 flex flex-col justify-between bg-dark-sidebar h-screen w-fit p-6 pt-28 text-white max-sm:hidden lg:w-66'>
            <div className='flex flex-1 flex-col gap-6'>
                {
                    SIDEBAR_LINKS.map((link) => {
                        const isActive = pathname === link.route || pathname.startsWith(link.route);

                        return (
                            <Link
                                key={link.label}
                                href={link.route}
                                className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', { 'bg-blue-500': isActive })}
                            >
                                {link.label}
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Sidebar;