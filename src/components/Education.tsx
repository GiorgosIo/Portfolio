import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Education = () => {
  return (
    <section className="py-20 px-4" id="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Education & CV</h2>
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="cv">CV</TabsTrigger>
          </TabsList>
          <TabsContent value="education" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-muted/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Professional Diploma Level 6 - Software Development
                </h3>
                <p className="text-muted-foreground mb-2">
                  IEK DELTA 360, Thessaloniki, Greece
                </p>
                <p className="text-sm text-muted-foreground">
                  (2 years): Specialized in full-stack web development, database
                  management, and modern programming practices.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">
                  BSc - Petroleum and Gas Engineering
                </h3>
                <p className="text-muted-foreground mb-2">
                  IHU, Kavala, Greece
                </p>
                <p className="text-sm text-muted-foreground">
                  Focused on drilling, reservoir engineering, and production
                  optimization, providing a solid foundation in energy resource
                  management.
                </p>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="cv">
            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-accent-foreground px-4 py-2 rounded-lg transition-colors"
                download
              >
                Download CV
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default Education;