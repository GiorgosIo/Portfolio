import { motion } from "framer-motion";

const Summary = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">About My Work</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-muted/30 backdrop-blur-sm">
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">Pushing boundaries with cutting-edge solutions</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 backdrop-blur-sm">
            <h3 className="font-semibold mb-2">Quality</h3>
            <p className="text-muted-foreground">Delivering robust and scalable applications</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 backdrop-blur-sm">
            <h3 className="font-semibold mb-2">Efficiency</h3>
            <p className="text-muted-foreground">Optimizing performance and user experience</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Summary;