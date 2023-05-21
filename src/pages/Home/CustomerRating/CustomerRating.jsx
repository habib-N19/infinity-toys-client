import React from 'react'

const CustomerRating = () => {
  return (
    <div>
      <h2 className='text-lg md:text-4xl my-24 text-center'>
        Some of our users review on toys
      </h2>
      <div class='grid w-10/12 mx-auto mb-8 border gap-4 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 grid-cols-1 md:grid-cols-2'>
        <figure
          data-aos='fade-down'
          class='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700'
        >
          <blockquote class='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
              Son loves Spider-Man toys.
            </h3>
            <p class='my-4'>
              My son is a huge fan of Spider-Man, and he loves playing with his
              Marvel action figures. He's always asking me to buy him more!
            </p>
          </blockquote>
          <figcaption class='flex items-center justify-center space-x-3'>
            <img
              class='rounded-full w-9 h-9'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png'
              alt='profile picture'
            />
            <div class='space-y-0.5 font-medium dark:text-white text-left'>
              <div>Catherine</div>
              <div class='text-sm text-gray-500 dark:text-gray-400'>
                Software Engineer
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          data-aos='fade-down'
          class='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700'
        >
          <blockquote class='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
              Educational Marvel toys for kids.
            </h3>
            <p class='my-4'>
              "I use Marvel toys in my classroom to help my students learn about
              different cultures and history. They're a great way to engage my
              students and make learning fun!"
            </p>
          </blockquote>
          <figcaption class='flex items-center justify-center space-x-3'>
            <img
              class='rounded-full w-9 h-9'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
              alt='profile picture'
            />
            <div class='space-y-0.5 font-medium dark:text-white text-left'>
              <div>Roberta Casas</div>
              <div class='text-sm text-gray-500 dark:text-gray-400'>Nurse</div>
            </div>
          </figcaption>
        </figure>
        <figure
          data-aos='fade-up-right'
          class='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700'
        >
          <blockquote class='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
              Marvel toys in the classroom.
            </h3>
            <p class='my-4'>
              "I love collecting Marvel toys. They're a great way to relax and
              de-stress after a long day at work."
            </p>
          </blockquote>
          <figcaption class='flex items-center justify-center space-x-3'>
            <img
              class='rounded-full w-9 h-9'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
              alt='profile picture'
            />
            <div class='space-y-0.5 font-medium dark:text-white text-left'>
              <div>Jese Leos</div>
              <div class='text-sm text-gray-500 dark:text-gray-400'>
                Teacher
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          data-aos='fade-up-left'
          class='flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700'
        >
          <blockquote class='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
              Marvel gifts for loved ones
            </h3>
            <p class='my-4'>
              "I love giving Marvel toys as gifts. They're a great way to show
              someone you care."
            </p>
          </blockquote>
          <figcaption class='flex items-center justify-center space-x-3'>
            <img
              class='rounded-full w-9 h-9'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
              alt='profile picture'
            />
            <div class='space-y-0.5 font-medium dark:text-white text-left'>
              <div>Joseph McFall</div>
              <div class='text-sm text-gray-500 dark:text-gray-400'>
                Engineer
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default CustomerRating
