import Image from "next/image";

interface HeroProps {
    imageUrl: string;
    quote: string;
    name: string;
}
const Hero = ({ imageUrl, quote, name }: HeroProps) => {
    return (
        <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-gray-900 text-center md:text-left  text-white px-6 py-12">
            {/* Image Section */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image 
                    src={imageUrl} 
                    alt="Hero Image" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>

            {/* Quote Section */}
            <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left max-w-lg">
                <p className="text-2xl md:text-3xl font-semibold italic">"{quote}"</p>
                <p className="mt-4 text-lg font-medium">- {name}</p>
            </div>
        </section>
    );
}

export default Hero;