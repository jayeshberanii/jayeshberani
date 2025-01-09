import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { Gradient } from './design/Roadmap'
import { getInTouch, socials } from '../constants'
import { check, gmail, phone } from '../assets'

const GetInTouch = () => {
    return (
        <Section crosses id="get-in-touch">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Let's connect"
                    tag="Let’s Build Something Extraordinary Together"
                />
                <div className="relative md:pb-[7rem] grid md:grid-cols-2 gap-6">
                    <div
                        className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-radial-gradient`}
                    >
                        <div className="relative w-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            <div className="relative w-full flex flex-col gap-8">
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    className='w-full py-4 px-6 border border-n-1/10 rounded-xl outline-none '
                                />
                                <input
                                    type='text'
                                    placeholder='Email'
                                    className='w-full py-4 px-6 border border-n-1/10 rounded-xl outline-none '
                                />
                                <input
                                    type='text'
                                    placeholder='Phone number'
                                    className='w-full py-4 px-6 border border-n-1/10 rounded-xl outline-none '
                                />
                                <textarea
                                    type='text'
                                    placeholder='Write your message...'
                                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] py-4 px-6 border border-n-1/10 outline-none"
                                />
                                <button className='self-start p-3 border border-n-1/10 bg-gray-800 rounded-md transition-all duration-300 hover:bg-gray-500'>Send message</button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`md:flex p-0.25 rounded-[2.5rem] bg-radial-gradient`}
                    >
                        <div className="relative w-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            <div className="relative w-full flex flex-col gap-8">
                                <div className='flex flex-col gap-4'>
                                    <h2 className='text-2xl font-extrabold'>Why Reach Out?</h2>
                                    <ul>
                                        {getInTouch.map((item) => (
                                            <li className="flex gap-3 py-1" key={item.id}>
                                                <img className='self-start mt-0.5' src={check} width={20} height={20} alt="check" />
                                                <div className="flex flex-col">

                                                    <h6 className="body-2">{item.title}</h6>
                                                    {item.text && (
                                                        <p className="body-2 text-n-4">{item.text}</p>
                                                    )}
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h2 className='text-2xl font-extrabold'>Contact Information:</h2>
                                    <div className='flex flex-col gap-2'>
                                        <a className="w-fit flex items-center mb-2 transition-all cursor-pointer opacity-75 hover:opacity-100">
                                            <img src={gmail} width={22} height={22} alt="check" />
                                            <h6 className="body-2 ml-3 leading-none">jayeshberanii@gmail.com</h6>
                                        </a>
                                        <a className="w-fit flex items-center transition-all cursor-pointer opacity-75 hover:opacity-100">
                                            <img src={phone} width={24} height={24} alt="check" />
                                            <h6 className="body-2 ml-3 leading-none">+91 6355353728</h6>
                                        </a>
                                    </div>
                                    <ul className="flex gap-5 ">
                                        {socials.map((item) => (
                                            <a
                                                key={item.id}
                                                href={item.url}
                                                target="_blank"
                                                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                                            >
                                                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                                            </a>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Gradient />
                </div>
            </div>
        </Section>
    )
}

export default GetInTouch