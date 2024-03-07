import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="ellipse" />
      <section className={`container relative flex flex-col items-center justify-center gap-4 py-10 text-center md:h-[calc(100vh-64px)]`}>
        {/* Text Part */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Helping you turn ideas <br /> <span className="text-primary"> into reality</span>
        </h1>
        <div className="space-y-5">
          <p className="mb-5 text-accent-foreground sm:text-lg md:max-w-[1000px]">
            CodeChieve will assist you with software development, where our team of skilled developers will passionately translate your wildest ideas into unique and cutting-edge products, applications, and websites.
          </p>
          <div className="flex justify-center gap-2">
            <Button>Start Consultation</Button>
            <Button variant={'outline'}>Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
