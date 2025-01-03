import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full h-fit'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4 dark:text-gray-300'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full border border-[#5651e5] rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 dark:text-gray-300'>Ajeet Singh</h2>
                <p className='dark:text-gray-400'>Front-End Developer</p>
                {/* <p className='py-4 dark:text-gray-400'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p> */}
              </div>
              <div>
                <p className='uppercase pt-8 dark:text-[#5651e5]'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://www.linkedin.com/in/ajeet-singh-667143200/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-gray-300'>
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href='https://github.com/ajeet8395'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-gray-300'>
                      <FaGithub />
                    </div>
                  </Link>

                  <Link href='mailto:ajeetsi8395@gmail.com'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-gray-300'>
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-gray-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto border border-[#5651e5] rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                id='contact-form'
                name='contact-form'
                action='https://api.web3forms.com/submit'
                method='POST'
                className='flex flex-col space-y-5'
              // encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <input type="hidden" name="access_key" value="24d8dfb7-5576-42bc-80cb-5396f40cd3fc" />
                  <label className='uppercase text-sm dark:text-gray-400'>Name
                    <input
                      className='w-full border-2 mt-2 rounded-lg p-3 flex border-gray-300 text-black dark:text-white'
                      type='text'
                      name='name'
                    />
                  </label>
                  <label className='uppercase text-sm dark:text-gray-400'>
                    Phone Number
                    <input
                      className='w-full border-2 mt-2 rounded-lg p-3 flex border-gray-300 text-black dark:text-white'
                      type='text'
                      name='phone'
                    />
                  </label>
                </div>
                <label className='uppercase text-sm dark:text-gray-400'>Email
                  <input
                    className='w-full border-2 mt-2 rounded-lg p-3 flex border-gray-300 text-black dark:text-white'
                    type='email'
                    name='email'
                  />
                </label>
                <label className='uppercase text-sm dark:text-gray-400'>Subject
                  <input
                    className='w-full border-2 mt-2 rounded-lg p-3 flex border-gray-300 text-black dark:text-white'
                    type='text'
                    name='subject'
                  />
                </label>
                <label className='uppercase text-sm dark:text-gray-400'>Message
                  <textarea
                    className='w-full border-2 mt-2 rounded-lg p-3 border-gray-300 text-black dark:text-white'
                    rows='10'
                    name='message'
                  ></textarea>
                </label>
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                <button className='w-full p-4 text-gray-100 mt-4 shadow-none'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
