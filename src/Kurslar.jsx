import { Link } from "react-router-dom";

const courses = [
  { name: "Frontend Development", tech: "React · Vue · Angular", students: 3200, level: "Boshlang'ich" },
  { name: "Backend Development", tech: "Node.js · Python · Java", students: 2800, level: "O'rta" },
  { name: "Mobile Development", tech: "Flutter · React Native", students: 1900, level: "O'rta" },
  { name: "UI/UX Design", tech: "Figma · Adobe XD", students: 1500, level: "Boshlang'ich" },
  { name: "Data Science", tech: "Python · TensorFlow", students: 1200, level: "Yuqori" },
  { name: "DevOps", tech: "Docker · Kubernetes · CI/CD", students: 800, level: "Yuqori" },
];

function Kurslar() {
  return (
    <div>
      {/* Courses */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Mashhur kurslar</h2>
          <a href="#" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
            Barchasini ko'rish →
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
         
          {courses.map((course) => (
            <div
              key={course.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                  {course.name}
                </h3>
                <span className="text-xs bg-white/10 text-white/50 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {course.level}
                </span>
              </div>
              <p className="text-white/40 text-sm mb-4">{course.tech}</p>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <span>👤</span>
                <span>{course.students.toLocaleString()} talaba</span>
              </div>
            </div>

          ))}
        </div>
      </section>

    </div>
  );
}

export default Kurslar;