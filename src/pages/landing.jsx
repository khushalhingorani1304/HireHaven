import {Link} from 'react-router-dom';
import {Button} from '../components/ui/button'
import {Carousel} from '../components/ui/carousel'
import {CarouselItem} from '../components/ui/carousel'
import {CarouselContent} from '../components/ui/carousel'
import companies from '../data/companies.json'
import faqs from '../data/faq.json'
// import faq from faqs
import Autoplay from "embla-carousel-autoplay"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">

      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">Find Your Dream Job <span className="flex items-center gap-2 sm:gap-6">and get <img src="/logo.png" alt="Hirrd Logo" className="h-14 sm:h-24 lg:h-32"/> </span></h1>
      
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">Explore thousands of job listing or find the perfect candidate</p>
      </section>
      <div className='flex gap-6 justify-center'>
        <Link to='/jobs'>
        <Button variant="blue" size="xl">Find jobs</Button>
        </Link>
    
        <Link to='/post-job'>
        <Button variant="destructive" size="xl" >Post a job</Button>
        </Link>
      </div>



        {/* Crousel */}

        <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>


      <div className='flex gap-10'>

      {/* Banner */}
        <img src="/banner.jpeg" className='w-2/4' alt="" />


      
      {/* Features */}

          <div className='max-w-xl'> 
            <ul>
              <li className='mt-8 ml-5'><span className='font-bold'>Driven by Advanced AI Recommendation Engine:</span> Utilizing cutting-edge artificial intelligence to deliver tailored job and internship recommendations</li>
              <li className='m-5'><span className='font-bold'>Real-Time Updates:</span> Ensuring that job listings and application statuses are continually refreshed to provide the most current information</li>
              <li className='m-5'><span className='font-bold'>Machine Learning-Powered User Dashboard:</span> Offering a sophisticated dashboard that tracks application progress and evaluates skill scores using machine learning algorithms</li>
              <li className='m-5'><span className='font-bold'>Recruitment by Leading Industry Employers:</span> Featuring opportunities from top-tier companies actively seeking exceptional talent</li>
            </ul>
          </div>

      </div>

      {/* card */}


    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidate.
          </CardContent>
        </Card>

    </section>



      {/* Accordian */}

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


    </main>
  )
}

export default LandingPage;