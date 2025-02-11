"use client";

import { navItems, aboutme, reviews } from "@/data";

import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
// import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import ContactMeForm from "@/components/ContactMeForm";

import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-0 px-0 ">
      <div className="max-w-9xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero imageUrl="/my_image.jpg"
                quote="Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning." 
                name="Hassan Ikram"
        />
        <AboutMe 
                name={aboutme.name}
                bio={aboutme.bio}
                  skills={aboutme.skills}
            />
        <RecentProjects />
        <Clients reviews={reviews}/>
        {/* <Experience /> */}
        {/* <Approach /> */}
        <ContactMeForm />
        <Footer />
      </div>
    </main>
  );
};

export default Home;