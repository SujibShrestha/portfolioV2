import CardComponent from "./CardComponent";

const Projects = () => {
    
  return (
    <section
      className="bg-card p-3 border  border-gray-400 flex justify-center items-center flex-col    "
    >
      <h1 className="text-2xl lg:w-[55vw] w-full flex justify-start m-3 text-center text-foreground">
        Featured Projects
      </h1>
     <CardComponent/>
    </section>
  );
};

export default Projects;
