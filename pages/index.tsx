import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Square } from "@/components/square" 
import { AspectRatio } from "@/components/ui/aspect-ratio"


export default function IndexPage() {
  const jobs = [
    {
      "company": "Apple",
      "logo": "https://i.pinimg.com/474x/b0/d2/6e/b0d26e8122dffa8a51081f7f814581d7.jpg",
      "position": "Software Engineering Intern",
      "date": "🏖 Summer '22",
      "url": "/videos/apple.mp4",
      "type": "mp4"
    },
    {
      "company": "Teradyne",
      "logo": "https://cdn.worldvectorlogo.com/logos/teradyne-1.svg",
      "position": "Computer Engineering Intern",
      "date": "🍂 Fall '21",
      "url": "https://cdn.worldvectorlogo.com/logos/teradyne-1.svg",
      "type": "svg"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>josh.</title>
        <meta
          name="description"
          content="how can i be of assistance?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div>
          <Image
            className="rounded-full"
            src="/images/profile.jpg" 
            height={144}
            width={144}
            alt="me!"
          />
        </div>
        <div>
          <h2 className="mt-10 scroll-m-20 pb-4 text-xl font-semibold tracking-tight transition-colors first:mt-0">
            Work Experience
          </h2>
          <div className="relative flex space-x-4">
            {
              jobs.map((job,i) => <Square key={i} props={job}/>)
            }
          </div>
        </div>
      </main>
      <div className="absolute bottom-8 left-8 flex gap-x-1 items-center">
        <div className="w-[30px]">
          <AspectRatio ratio={1 / 1}>
            <Image
            alt="apple-fitness-workout"
            src="/images/fitness.gif"
            fill
            className="rounded-3xl object-cover"
            />
          </AspectRatio>
        </div>
        <span className="font-semibold text-xs italic">Currently working out</span>
      </div>
    </Layout>
  )
}
