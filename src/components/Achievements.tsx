import { motion } from "framer-motion";

const achievements = [
  {
    year: "2023",
    title: "Led Frontend Development Team",
    description: "Successfully managed a team of 5 developers for a major project",
  },
  {
    year: "2022",
    title: "Open Source Contribution",
    description: "Major contribution to popular React library",
  },
  {
    year: "2021",
    title: "Tech Conference Speaker",
    description: "Presented at major tech conference about modern web development",
  },
];

const Achievements = () => {
  return (
    <section className="py-20 px-4" id="achievements">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="achievement-item"
            >
              <div className="mb-1 text-accent font-semibold">
                {achievement.year}
              </div>
              <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;