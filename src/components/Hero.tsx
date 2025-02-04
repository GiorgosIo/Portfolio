import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center"
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Hi, I'm Giorgos
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Building innovative solutions with modern technologies
        </motion.p>
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