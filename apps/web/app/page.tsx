export default function Home() {
  const h1Style = `text-5xl py-7 max-w-[500px] text-center`
  const buttonStyle = `cursor-pointer py-3 px-7 bg-gray-100 rounded-full hover:bg-gray-200`
  return (
    <div className="py-25 flex flex-col items-center">
      <p>Harsh Kumar</p>
      <h1 className={h1Style}>
        Aspiring <span className="underline text-gray-500">Backend Developer</span> - Typescript
      </h1>
      <p className="font-normal max-w-[700px] text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima mollitia qui, dolor quasi, deleniti nihil ex culpa quos necessitatibus totam error, optio aliquid vel inventore.</p>
      <div className={"flex gap-1 py-10"}>
        <button className={buttonStyle} >
          <span>{"View Projects"}</span>
        </button>
        <button className={`${buttonStyle} bg-white`}>
          <span>{"Contact me"}</span>
        </button>
      </div>
      <img
        src="https://downloads.ctfassets.net/kftzwdyauwt9/4FnPiaiJdmc3R04H7kGR4N/8b115455fddf2921431f454f65b6ee22/Research_Hero.png?w=1920&q=90&fm=webp"
        alt="hero"
        height={100}
        className="rounded-lg w-auto max-w-[1200px] px-30 my-10 object-cover"
      />
      <span className="mt-20">Flutter Developer - Intern</span>
      <h1 className="text-xl mt-6">Go Extra Mile, Hyderabad</h1>
      <h1 className="text-xl text-gray-500">May, 2024 - July, 2025</h1>
      <p className="py-10 text-center max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis earum deleniti corrupti deserunt sed perspiciatis modi minus, reiciendis qui molestiae esse assumenda iusto quae nam placeat odio beatae quas eos! Mollitia amet autem voluptatum, iure esse dolorem eaque quae nisi eos! Explicabo culpa illum sed fuga laboriosam facere aliquam!</p>
      <span className="mt-20">Education</span>
      <p className="text-xl mt-6">CSE, Bihar Engineering University</p>
      <p className="text-xl text-gray-500">2019-2021</p>
    </div>
  );
}
