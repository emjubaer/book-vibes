import Image from 'next/image';
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 my-6">
            <div className="bg-[#1313130d] rounded-3xl p-8 md:p-16 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Content */}
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#131313] leading-tight tracking-tight">
                        Books to freshen up <br className="hidden sm:inline" />
                        your bookshelf
                    </h1>

                    <button className="btn bg-[#23BE0A] hover:bg-[#1fa609] text-white font-semibold text-md px-7 py-3 rounded-xl border-none normal-case min-h-0 h-auto">
                        View The List
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src={bannerImage}
                        alt="The Dating Playbook For Men book cover"
                        className="max-w-[260px] sm:max-w-xs md:max-w-sm w-full h-auto object-contain drop-shadow-md"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;