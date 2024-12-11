import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";

type TeamMember = {
  name: string;
  website: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Aaron", website: "https://aaronxie.com/" },
  { name: "Ali", website: "https://www.alihkw.com/" },
  { name: "Ben", website: "https://ben.bolte.cc" },
  { name: "Denys", website: "https://www.linkedin.com/in/denys-bezmenov/" },
  { name: "Jingxiang", website: "https://www.jingxiangmo.com/" },
  { name: "Pawel", website: "https://budzianowski.github.io/" },
  { name: "Rui", website: "https://www.linkedin.com/in/ruixu/" },
  { name: "Viraj", website: "https://www.linkedin.com/in/virajtipnis/" },
  { name: "Wesley", website: "https://wesleymaa.com/" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow p-8 max-w-7xl mx-auto px-4 w-full">
        <section className="pt-16">
          <div className="flex flex-col items-center text-center pt-10 px-4 max-w-full">
            <h1 className="text-5xl mt-16">About Us</h1>
            <p className="text-xl mt-8">
              We are pioneers in humanoid robotics, committed to transparency and open-source
              development.
            </p>
            <div className="mt-12">
              <h2 className="text-3xl mb-4">Our Team</h2>
              <ul className="flex space-x-4">
                {TEAM_MEMBERS.map((member) => (
                  <li key={member.name} className="text-lg border rounded-md p-2">
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      {member.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
