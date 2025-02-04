import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Development", items: ["React", "TypeScript", "Next.js"] },
  { name: "Backend Development", items: ["Node.js", "Python", "PostgreSQL"] },
  { name: "DevOps & Tools", items: ["Docker", "Git", "AWS"] },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-muted/20" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="skill-card"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;