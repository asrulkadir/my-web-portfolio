import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../../components/Animated";
import Layout from "../../components/Layout";

const Home = () => {
  const [isView, setIsView] = useState(false);
  return (
    <Layout>
      <AnimatedPage>
        <div className="w-4/5 mx-auto max-md:w-[95%] [&_h3]:text-center [&_h3]:mt-8 [&_h4]:text-center [&_h4]:mt-8 [&_h1]:text-center [&_h1]:mt-8 [&_hr]:text-center [&_hr]:mt-8 [&_p]:text-center">
          <h3>Hello, I am</h3>
          <h1>ASRUL KADIR</h1>
          <h4>FRONTEND ENGINEER | FULL STACK ENGINEER</h4>
          <hr />
          <p>
          Hi, I am Asrul Kadir, a Frontend Engineer with experience building responsive and high-quality web applications using React.js, Next.js, and TypeScript. 
          I also have experience with backend development using Node.js, NestJS, and Golang to create full-stack applications. 
          I am dedicated to delivering the best results in every project, ensuring that clients are satisfied with clean, efficient, and dependable code. 
          I stay enthusiastic about learning new technologies and constantly work to improve my skills.
          </p>
          <h4>+62 822-3822-8544</h4>
          <p>me@asrulkadir.com</p>

          <div>
            <button
              className="block h-8 w-40 border-2 border-primary mx-auto my-4 text-center no-underline text-primary font-bold cursor-pointer bg-app-bg hover:bg-primary hover:text-white transition-all duration-500"
              onClick={() => setIsView(true)}
            >
              View My CV
            </button>
            <Link
              to="./Asrul_Kadir.pdf"
              target="_blank"
              download
              className="no-underline"
            >
              <button className="block h-8 w-40 border-2 border-primary mx-auto my-4 text-center no-underline text-primary font-bold cursor-pointer bg-app-bg hover:bg-primary hover:text-white transition-all duration-500">
                Download My CV
              </button>
            </Link>
          </div>
          {isView && (
            <div className="fixed top-0 left-0 z-[1000] w-full h-full bg-black/50">
              <button
                className="block h-8 w-40 border-2 border-primary mx-auto my-4 text-center no-underline text-primary font-bold cursor-pointer bg-app-bg hover:bg-primary hover:text-white transition-all duration-500"
                onClick={() => setIsView(false)}
              >
                Close
              </button>
              <iframe
                src="./Asrul_Kadir.pdf"
                width="100%"
                height="90%"
                title="Asrul Kadir CV"
              />
            </div>
          )}
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Home;
