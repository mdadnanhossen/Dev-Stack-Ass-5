import { Suspense, useState } from "react";
import toast from "react-hot-toast";
import HeroSection from "./components/shared/HeroSection";
import Navber from "./components/shared/Navber";
import type { Technology } from "./types/techType";
import Tech from "./components/techSection/Tech";
import YourStack from "./components/techSection/YourStack";
import Footer from "./components/shared/Footer";



const fetchTech = async (): Promise<Technology[]> => {
  const res = await fetch("/tech.json");
  const data = await res.json();
  return data;
};

// const techPromise = fetchTech();


const App = () => {
  const [techPromise] = useState(() => fetchTech());

  const [saved, setSaved] = useState<Technology[]>([]);

  const handleSavedTech = (tech: Technology) => {
   
    const ids = saved.map((item) => item.id);

    if (ids.includes(tech.id)) {
      toast.error(`${tech.name} is already on your stack`);
      return;
    }

    setSaved([...saved, tech]);

    toast.success(`${tech.name} added to your stack`);
  };



  const handleRemoveTech = (id: string) => {
    const findTech = saved.find((item) => item.id === id);

    const updatedList = saved.filter((item) => item.id !== id);

    setSaved(updatedList);

    if (findTech) {
      toast.success(`${findTech.name} removed from your stack`);
    }
  };

  const handleClearAll = () => {
    if (!saved.length) return;

    setSaved([]);

    toast.success("Your stack is cleared.", {
      position: "top-center",
    });
  };


  return (
    <div>
      <Navber />

      <HeroSection />

      <main>
        <section className="container mx-auto my-10">
          <div className="grid grid-cols-4 gap-5 items-start">

            {/* Technology component */}
            <Suspense fallback={<h2>loading...</h2>}>
              <Tech
                techPromise={techPromise}
                handleSavedTech={handleSavedTech}
                saved={saved}
              />
            </Suspense>
            <YourStack
							techs={saved}
							handleClearAll={handleClearAll}
							handleRemoveTech={handleRemoveTech}
						/>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;