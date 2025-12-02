import { ArrowRight } from "lucide-react";
import { Projects } from "../../utils";

export default function Home() {
    const h1Style = `text-5xl py-7 max-w-[400px] text-center`
    const buttonStyle = `cursor-pointer mt-4 py-2 px-7 bg-gray-100 rounded-full hover:bg-gray-200`

    return (
        <div className="py-25 flex flex-col items-center">
            <h1 className={h1Style}>Works that define my <span className="text-gray-500">expertise</span></h1>
            <button className={buttonStyle} >
                <span>{"Contact me"}</span>
            </button>
            <div className="mt-20 grid grid-cols-2">
                {Projects.map((project, i) => (
                    <div key={i} className="my-2 mx-2 border border-gray-300 rounded-lg py-5 px-5 max-w-[500px]">
                        <h1 className="text-2xl font-normal">{project.name}</h1>
                        <h2 className="text-[16px] font-normal leading-5 my-4">{project.description}</h2>
                        <div className="mt-10">
                            {project.points.map((point, i) => (
                                <div key={i} className="flex items-center gap-4 my-2">
                                    <ArrowRight size={15} />
                                    <p className="font-normal">
                                        {point.point.split(point.underline).map((part, index, arr) => (
                                            <span key={index}>
                                                {part}
                                                {index < arr.length - 1 && <span className="underline">{point.underline}</span>}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex">
                            <button className={buttonStyle}>Github</button>
                            <button className={`${buttonStyle} ml-4`}>Demo</button>
                        </div>
                        <img src={project.image} alt={project.name} className="rounded-lg mt-10 object-cover h-[200px] w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}
