import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: 'https://images.squarespace-cdn.com/content/v1/544c3e3ee4b07c493b221236/1529277494334-3LRAD6OLXUFVEHPX1KZU/me.?format=1500w',
  imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' },
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}
const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AboutMe() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  return (
    <>
    
    <main>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Adrià Vallès</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              

              
            </div>

            <div className="mt-4 space-y-6">
              <p className="pb-8 text-base text-gray-500">
              Adrià Valles Baradad is a freelance content creator from Barcelona, 
              Spain. With a natural eye for detail and a passion for all things digital, 
              he encapsulates brands, places and experiences through the lens, capturing 
              scenes in sport, travel, food and events.
              With years of travel all over the world, and having lived in both Spain and 
              Australia, Adrià has an ability to see moments before they happen and pick out 
              the subtle details within a scene, giving his work an individual quality and edge. 
              </p>
              <Link to="/contact-me">
              <button
                  type="submit"
                  className="pt-8flex w-full items-center justify-center rounded-md border border-transparent dark:bg-blue-200 dark:text-blue-800 py-3 px-8 text-base font-medium text-white hover:dark:bg-blue-800 hover:dark:text-blue-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Contact Me!
                </button>
                </Link>
            </div>

           
          </section>
        </div>
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            
          </section>
        </div>
      </div>
    </div>
        
    </main>
    

</>
  )
}

export default AboutMe