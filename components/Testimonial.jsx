const Testimonial = () => {
    return (
        <div>


<section className="relative isolate overflow-hidden px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-black text-6xl text-center orange_gradient">Welcome</h1>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Text-to-Speech Conversion Service. Upload a text file and have it read back to you in high-quality audio. Try it out now!”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="/assets/images/logo.jpg"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Thanh Nguyen</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Fouder of Circula AI</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

{/* <section class="bg-white dark:bg-gray-900">
<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
    <figure class="max-w-screen-md mx-auto">
        <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
        </svg> 
        <blockquote>
            <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
            </div>
        </figcaption>
    </figure>
</div>
</section> */}


        </div>
    )
  }
  
  export default Testimonial