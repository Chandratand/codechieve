import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const OurServicesSection = () => {
  return (
    <section className="container py-8">
      <div>
        <h2 className="text-center text-lg font-semibold text-primary">OUR SERVICES</h2>
        <p className="text-center text-xl font-semibold sm:text-2xl">The solution to drive your business forward</p>
      </div>
      <SolutionItem title={'Software Developement'} description={'We provides customized software development services, which include websites and mobile apps, to help you digitalise your business.'} />
      <SolutionItem title={'Talent Providers'} description={'Providing experienced software developers who will help you develop and maintain your business from a technology perspective.'} imagePosition="right" />
      <SolutionItem
        title={'Consultation'}
        description={'Discuss your needs or digital plan with us; we have dozens of IT solutions. By supplying IT experts in many fields, we are confident that you will experience the best technology solutions ever.'}
      />
    </section>
  );
};

export default OurServicesSection;

interface SolutionItemProps {
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
}

const SolutionItem = ({ title, description, imagePosition = 'left' }: SolutionItemProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-y-4 py-4 md:px-4">
      <div
        className={cn('flex w-full items-center justify-center md:justify-start md:w-1/2', {
          'md:order-2 md:pl-4': imagePosition === 'right',
          'md:pr-4': imagePosition === 'left',
        })}
      >
        <div className={'w-full max-w-sm overflow-hidden rounded-3xl md:max-w-lg'}>
          <AspectRatio ratio={4 / 3}>
            <Image alt="dummy" src={'/dummy.jpg'} fill className="object-cover" sizes="100vw" />
          </AspectRatio>
        </div>
      </div>

      {/* Text Part */}
      <div className="order-1 flex w-full flex-col justify-center gap-2 md:w-1/2">
        <h3 className="text-xl font-bold text-primary md:text-3xl">{title}</h3>
        <div className="space-y-5">
          <p className="mb-5 max-w-xl text-justify text-muted-foreground sm:text-lg">{description}</p>
        </div>
        <Link href={'/'} className="flex items-center text-sm font-semibold text-primary underline-offset-2 hover:underline">
          Explore More <ArrowRight className="ml-1 size-4" />
        </Link>
      </div>
    </div>
  );
};
