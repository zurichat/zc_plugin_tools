import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import '../style/GithubHome.css';
const GithubHome = () => {
  return (
    <section className='github_home github_home_padding'>
      <div className='top_nav'>
        <h2 className={`font-bold text-lg`}>Tool Directory</h2>
        <Link to='/' className='flex items-center gap-2 text-sm font-semibold'>
          <IoIosArrowBack /> Back home
        </Link>
      </div>
    </section>
  );
};

export default GithubHome;
