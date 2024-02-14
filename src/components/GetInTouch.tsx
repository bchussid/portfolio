import Link from "next/link"
import { Button } from "./ui/button";
const GetInTouch = () => {
  return (
    <section className="py-16 bg-tertiary dark:bg-secondary/40">
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
            Feel free to get in touch with me if you have any questions...
          </h2>
          <Link href="/contact"><Button>Hit Me Up!</Button></Link>
        </div>
        
      </div>
    </section>
  )
}

export default GetInTouch