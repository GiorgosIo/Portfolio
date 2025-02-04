import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const title = "Software Developer";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="text-center"
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center gap-x-4">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
              style={{
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Building innovative solutions with modern technologies
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;