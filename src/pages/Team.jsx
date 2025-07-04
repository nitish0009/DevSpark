import Avatar from "react-avatar";

export default function Team() {
  const teamMembers = [
    { name: "Nitish Sharma", role: "Frontend, Backend & Vision", icon: "👨‍💻" },
    { name: "Namya Sharma", role: "Frontend Development", icon: "💻" },
    { name: "Anusha Bisht", role: "UI/UX & Branding", icon: "🎨" },
    { name: "Yashika Kaushik", role: "AI/ML & Data", icon: "🧠" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">👥 Meet the Team</h1>
        <p className="text-gray-600 dark:text-gray-300">
          We're a passionate group of developers, designers, and data lovers working to make an impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
          >
            <div className="mb-4">
              <Avatar name={member.name} round size="80" />
            </div>
            <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{member.role}</p>
            <div className="text-2xl">{member.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
