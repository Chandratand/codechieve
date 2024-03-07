import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="ellipse" />
      <section className="container relative flex flex-col py-10 md:py-12 lg:flex-row lg:py-20">
        {/* Text Part */}
        <div className="flex flex-1 flex-col justify-center space-y-4 text-center lg:pr-4 lg:text-start">
          <h1 className="text-4xl font-bold md:text-6xl">
            Helping you turn <span className="text-primary">ideas into reality</span>
          </h1>
          <div className="space-y-5">
            <p className="mb-5 text-accent-foreground sm:text-lg">
              CodeChieve will assist you with software development, where our team of skilled developers will passionately translate your wildest ideas into unique and cutting-edge products, applications, and websites.
            </p>
            <div className="flex justify-center gap-2 lg:justify-start">
              <Button>Start Consultation</Button>
              <Button variant={'outline'}>Learn More</Button>
            </div>
          </div>
        </div>

        <div className="flex-1 px-8"></div>
      </section>
    </div>
  );
};

export default HeroSection;
