import React, { Component } from 'react'
// import { Link } from 'react-router-dom';


export default class NewsItem extends Component {
    render() {
        let { title, description, imgurl, publishedAt, link, source } = this.props
        return (

            // <div className='sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
                <div className='shadow-md bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700'>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <img className='h-56 lg:h-60 w-full object-cover rounded-t-lg' src={!imgurl ? 'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg' : imgurl} alt='' />
                        <div className='p-5 h-[230px] relative'>
                            <span className='bg-blue-200 text-xs font-medium text-blue-800 text-center p-1 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-14'>{source}</span>
                            <span className='text-sm text-primary text-gray-400'>Last updated {publishedAt} by {source}</span>
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white news-card-heading'> {title}</h5>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 news-card-description'>{description}</p>
                        </div>
                    </a>
                </div>
            // </div >

            // <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10'>
            // <div>
            //     <Link to='/'>
            //         <div className='container max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'>
            //             <img className='rounded-t-lg' src={imgurl} alt='Kylie Jenner Splits From Rapper Travis Scott For The Second Time, Claims Report - NDTV' />
            //             {/* </Link> */}
            //             <div className='p-5'>
            //                 {/* <a href='/'> */}
            //                 <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
            //                 {/* </Link> */}
            //                 <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
            //                 {/* <a href='/' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> */}
            //                 {/* Read more */}
            //             </div>
            //         </div>
            //     </Link>
            // </div>

            //    
            // https://tailwindcomponents.com/component/user-card
            // <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4'>
            //         <img className='w-full h-56 object-cover object-center' src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' alt='avatar'>
            //         <div className='flex items-center px-6 py-3 bg-gray-900'>
            //         <h1 className='mx-3 text-white font-semibold text-lg'>Focusing</h1>
            //         </div>
            //         <div className='py-4 px-6'>
            //             <h1 className='text-2xl font-semibold text-gray-800'>Patterson johnson</h1>
            //             <p className='py-2 text-lg text-gray-700'>Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
            //             <div className='flex items-center mt-4 text-gray-700'>
            //                <icon>
            //                 <h1 className='px-2 text-sm'>MerakiTeam</h1>
            //             </div>
            //             <div className='flex items-center mt-4 text-gray-700'>
            //                 <h1 className='px-2 text-sm'>California</h1>
            //             </div>
            //             <div className='flex items-center mt-4 text-gray-700'>
            //                 <h1 className='px-2 text-sm'>patterson@example.com</h1>
            //             </div>
            //         </div>
            //     </div>
            // 
            // https://tailwindcomponents.com/component/postarticle-card
            // <div className='mx-auto px-4 py-8 max-w-xl my-20'>
            //         <div className='bg-white shadow-2xl rounded-lg mb-6 tracking-wide' >
            //             <div className='md:flex-shrink-0'>
            //                 <img src='https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg' alt='mountains' className='w-full h-64 rounded-lg rounded-b-none'>
            //             </div>
            //             <div className='px-4 py-2 mt-2'>
            //                 <h2 className='font-bold text-2xl text-gray-800 tracking-normal'>My Amaizing Journey to the Mountains.</h2>
            //                     <p className='text-sm text-gray-700 px-2 mr-1'>
            //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
            //                     </p>
            //                     <div className='flex items-center justify-between mt-2 mx-6'>
            //                         <Link href='#' className='text-blue-500 text-xs -ml-3 '>Show More</Link>
            //                     </div>
            //                 <div className='author flex items-center -ml-3 my-3'>
            //                     <div className='user-logo'>
            //                         <img className='w-12 h-12 object-cover rounded-full mx-4  shadow' src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80' alt='avatar'>
            //                     </div>
            //                     <h2 className='text-sm tracking-tighter text-gray-900'>
            //                         <Link href='#'>By Mohammed Ibrahim</Link> <span className='text-gray-600'>21 SEP 2015.</span>
            //                     </h2>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>

            //      https://tailwindcomponents.com/component/responsive-grid-layout

        )
    }
}
