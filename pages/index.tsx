import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function Example() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        src="/images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}




// import Image from 'next/image'
// import { Inter } from 'next/font/google'
//
// const inter = Inter({ subsets: ['latin'] })
//
// export default function Home() {
//   return (
//       <main>
//
//       </main>
//     // <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//     //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//     //       Get started by editing&nbsp;
//     //       <code className="font-mono font-bold">pages/index.tsx</code>
//     //     </p>
//     //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//     //       <a
//     //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//     //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         By{' '}
//     //         <Image
//     //           src="/vercel.svg"
//     //           alt="Vercel Logo"
//     //           className="dark:invert"
//     //           width={100}
//     //           height={24}
//     //           priority
//     //         />
//     //       </a>
//     //     </div>
//     //   </div>
//     //
//     //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//     //     <Image
//     //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//     //       src="/next.svg"
//     //       alt="Next.js Logo"
//     //       width={180}
//     //       height={37}
//     //       priority
//     //     />
//     //   </div>
//     //
//     //   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//     //     <a
//     //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//     //         Docs{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p
//     //         className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     //       >
//     //         Find in-depth information about Next.js features and API.
//     //       </p>
//     //     </a>
//     //
//     //     <a
//     //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//     //         Learn{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p
//     //         className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     //       >
//     //         Learn about Next.js in an interactive course with&nbsp;quizzes!
//     //       </p>
//     //     </a>
//     //
//     //     <a
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//     //         Templates{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p
//     //         className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     //       >
//     //         Discover and deploy boilerplate example Next.js&nbsp;projects.
//     //       </p>
//     //     </a>
//     //
//     //     <a
//     //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//     //         Deploy{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p
//     //         className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     //       >
//     //         Instantly deploy your Next.js site to a shareable URL with Vercel.
//     //       </p>
//     //     </a>
//     //   </div>
//     // </main>
//   )
// }
