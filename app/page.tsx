import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Benefits } from "@/components/Benefits";
import { GlobalScale } from "@/components/GlobalScale";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-kast-teal/30 selection:text-black">
            <Navbar />
            <Hero />
            <Logos />
            <div id="about">
                <Benefits />
            </div>
            <GlobalScale />
            {/* <SocialProof /> */}
            <div id="faq">
                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
