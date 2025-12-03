import { ArrowRight, ArrowRightIcon, BookIcon, Briefcase, Laptop } from "lucide-react";

export default function Home() {
  const h1Style = `text-5xl py-7 max-w-[500px] text-center`
  const buttonStyle = `flex items-center gap-2 cursor-pointer py-2 px-7 bg-gray-100 rounded-full hover:bg-gray-200`

  const goextramileTasks = [
    "Delivered 14+ production-ready modules, boosting app functionality and increasing DAU by 15%.",
    "Improved reliability by cutting crash rates by 60% through anti-redundancy and stabilization practices.",
    "Mentored 5+ junior developers, increasing team code contribution by 25% and reducing bug density.",
    "Led the adoption of Clean Architecture, reducing feature delivery time by 30% and improving onboarding efficiency.",
    "Integrated Razorpay and Google Maps APIs, driving a 20% increase in engagement for enabled features.",
    "Collaborated with product teams to design a scalable backend solution supporting a 10× projected user load."
  ];


  return (
    <div className="py-25 flex flex-col items-center">
      <p className="text-lg">Harsh Kumar</p>
      <h1 className={h1Style}>
        Backend Developer
      </h1>
      <span className="font-normal max-w-[700px] text-center text-lg">
        Aspiring <span className="font-semibold">Backend Developer</span> skilled in <span className="font-bold">TypeScript</span>, applying <span className="font-bold">best practices</span> and industry-standard tools to create efficient and scalable product solutions.
      </span>
      <div className={"flex gap-1 py-10"}>
        <button className={buttonStyle} >
          <span>{"View Projects"}</span>
          <ArrowRight size={16} />
        </button>
        <button className={`${buttonStyle} bg-white`}>
          <span>{"Contact me"}</span>
          <Laptop size={16} />
        </button>
      </div>
      <img
        src="https://downloads.ctfassets.net/kftzwdyauwt9/4FnPiaiJdmc3R04H7kGR4N/8b115455fddf2921431f454f65b6ee22/Research_Hero.png?w=1920&q=90&fm=webp"
        alt="hero"
        height={100}
        className="rounded-lg w-auto max-w-[1200px] px-30 my-10 object-cover"
      />
      <div className="mt-20 flex items-center gap-4">
        <span >Flutter Developer - Intern</span>
        <Briefcase size={16} />
      </div>
      <h1 className="text-xl mt-6">Go Extra Mile, Hyderabad</h1>
      <h1 className="text-xl text-gray-500">May, 2024 - July, 2025</h1>
      <div className="py-10 max-w-[600px]">
        {goextramileTasks.map((task, i) => (
          <div key={i} className="flex items-center">
            <ArrowRightIcon size={17} />
            <p className="ml-4 py-0.5">{task}</p>
          </div>
        ))}
      </div>
      <div className="mt-20 flex items-center gap-2">
        <span >Education</span>
        <BookIcon size={16} />
      </div>
      <p className="text-xl mt-6">CSE, Bihar Engineering University</p>
      <p className="text-xl text-gray-500">2019-2021</p>
    </div>
  );
}
