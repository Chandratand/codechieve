'use client';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Icons } from '../icons';
import { Button, buttonVariants } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const MENUS = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/#our-solution',
    label: 'Our Solution',
  },
  {
    href: '/our-works',
    label: 'Our Works',
  },
  {
    href: '/career',
    label: 'Career',
  },
];

export default function Header() {
  const headerRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add('shadow-lg');
      headerRef.current?.classList.add('bg-background');
    } else {
      headerRef.current?.classList.remove('shadow-lg');
      headerRef.current?.classList.remove('bg-background');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={headerRef} className="fixed inset-x-0 top-0 z-20 backdrop-blur">
      <nav className="container relative flex items-center justify-between px-4 py-2 sm:py-3">
        <div>
          <Link href={'/'} className="font-semibold">
            <Icons.logo />
          </Link>
        </div>
        <div>
          <div className={'hidden items-center gap-4 sm:flex'}>
            {MENUS.map((menu) => (
              <Link key={menu.href} href={menu.href} className="text-sm font-semibold text-muted-foreground hover:text-foreground">
                {menu.label}
              </Link>
            ))}
            <Link href={'/'} className={buttonVariants({})}>
              Contact Us
            </Link>
          </div>
          <div className="sm:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant={'ghost'} size={'icon'}>
                  <MenuIcon className="hover:cursor-pointer" />
                </Button>
              </SheetTrigger>
              <SheetContent className="!px-0">
                <div className="space-y-4 py-4">
                  <div className="px-3 py-2">
                    <Icons.logo />
                    <div className="mt-4 flex flex-col gap-4">
                      {MENUS.map((menu) => (
                        <Link key={menu.href} href={menu.href} className="text-sm font-semibold text-muted-foreground hover:text-foreground">
                          {menu.label}
                        </Link>
                      ))}
                      <Link href={'/'} className={buttonVariants({})}>
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}
