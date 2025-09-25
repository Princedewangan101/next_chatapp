import Image from "next/image";
import Link from "next/link";

type Topic = {
  text: string;
  img: string;
  desc: string;
  slug: string;
};

const topics: Topic[] = [
  {
    text: "Python",
    img: "/python.png",
    desc: "lets discuss everything related to python",
    slug: "Python"
  },
  {
    text: "Javascript",
    img: "/javascript.png",
    desc: "explore the world of frontend and backend with JS",
    slug: "Javascript"
  },
  {
    text: "Typescript",
    img: "/typescript.png",
    desc: "strongly typed superset of JavaScript for safer code",
    slug: "Typescript"
  },
  {
    text: 'React',
    img: '/react.png',
    desc: 'build interactive UIs with components and hooks',
    slug: 'React'
  },
  {
    text: 'Node.js',
    img: '/node.png',
    desc: 'server-side JavaScript runtime built on V8 engine',
    slug: 'Node.js'
  },
  {
    text: 'CSS',
    img: '/css.png',
    desc: 'style your apps with layouts, animations, and effects',
    slug: 'CSS'
  },
  {
    text: 'HTML',
    img: '/html.png',
    desc: 'the standard markup language for building web pages',
    slug: 'HTML'
  },
  {
    text: 'Java',
    img: '/java.png',
    desc: 'object-oriented programming language used worldwide',
    slug: 'Java'
  },
  {
    text: 'C++',
    img: '/cpp.png',
    desc: 'powerful language for systems programming and games',
    slug: 'C++'
  },
];

export default function TopicsList() {
  return (
    <>
      <div className=" ">
        <h1 className="text-center text-[35px] font-semibold " >Discuss Fourms</h1>
        <div className="min-h-screen  flex justify-center items-center p-6 pt-11">
          <div className="flex flex-wrap gap-6 justify-center">
            {topics.map((topic) => (
              <div
                key={topic.text}
                className="group relative p-6 w-64 h-72 rounded-2xl bg-[#111111] text-white shadow-lg transition-transform duration-500 [transform-style:preserve-3d] [perspective:1000px] hover:[transform:rotateX(10deg)_rotateY(10deg)]"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                    src={topic.img}
                    alt={topic.text}
                    width={64}
                    height={64}
                    className="mb-4"
                  />
                  <h2 className="text-lg font-semibold">{topic.text}</h2>
                  <p className="text-gray-400 text-sm text-center mt-2">
                    {topic.desc}
                  </p>
                  <Link href={`/fourm/${topic.slug}`}>
                    <div>
                      <button className=" mt-5 border px-2.5 py-1 rounded-md  ">Discuss</button>
                    </div>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
