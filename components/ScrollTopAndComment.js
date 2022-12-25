import { useEffect, useState } from "react";
import { Provider, ClapButton } from "@lyket/react";
import ScrollTop from "@/components/ScrollTop";

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed right-8 bottom-9 hidden flex-col gap-6 ${
          show ? "md:flex" : "md:hidden"
        }`}
      >
        <button className="mb-16">
          <Provider apiKey="pt_61d6e5f0af64c3fe0202c68a646d71">
            <ClapButton namespace="testing-react" id="everybody-clap-now" />
          </Provider>
        </button>
      </div>
      <ScrollTop />
    </>
  );
};

export default ScrollTopAndComment;
