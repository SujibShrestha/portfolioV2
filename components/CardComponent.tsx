"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const CardComponent = () => {
  const projects = [
    {
      name: "PokeDex",
      href: "https://pokedex-two-rouge.vercel.app/",
      src: "/ss/pokedex.png",
      stack: ["Next.js", "Supabase", "TailwindCSS"],
    },
    {
      name: "Agent",
      href: "https://agent-v-ten.vercel.app/",
      src: "/ss/AgentV.png",
      stack: ["Next.js", "Supabase", "TailwindCSS","Clerk","Vapi"],
    },
  ];

  return (
    <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
      {projects.map((project, index) => (
        <motion.a
          key={index}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="w-full flex justify-center"
        >
          <Card className="w-64 h-100 overflow-hidden border border-border bg-card/80 backdrop-blur-sm shadow-md transition-shadow hover:shadow-lg hover:border-primary/60">
            {/* Image */}
            <CardHeader className="p-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <Image
                  src={project.src}
                  alt={project.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-40"
                />
              </motion.div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold text-foreground mb-2">
                {project.name}
              </CardTitle>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-1">
                {project.stack?.map((tech, i) => (
                  <Badge
                    key={i}
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className="p-4 pt-0">
              <p className="text-xs text-muted-foreground hover:text-primary transition-colors">
                View Project →
              </p>
            </CardFooter>
          </Card>
        </motion.a>
      ))}
    </div>
  );
};

export default CardComponent;
