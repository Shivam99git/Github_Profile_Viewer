import React from 'react';
import { Link } from 'react-router-dom';
import {FaHackerrank} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si' ;
import {SiGeeksforgeeks} from 'react-icons/si' ;

const About = () => {
  return (



     <div className='rounded-lg shadow-lg card bg-base-100'>
    <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
            SHIVAM SHARMA
        </h2>
   <img src="data:image/jpeg;base64,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"  alt="sharma" class="img-fluid" width="160px" title="Shivam Sharma"></img>
        <p>Hello,
     <p>
     I hope you are doing well in a life. My name is Shivam Sharma, I am from Uttar-Pradesh, India. Currently
     I am pursing my Bachelor's of Technology in Electrical Engineering from <br></br>Gurukula Kangri (Deemed to be University) formely known as Gurukula Kangri Vishwavidyalaya. My goal is to start a successful career in
     the field of IT sector so that it can benifit<br></br>company as well as me personally in order to grow and excel in the field of IT. Although I am a fresher, I will assure you that i will work hard to me full potential and contribute<br></br>as much as i can towards the growth and development of the company. 
    </p>
    <a href='https://www.hackerrank.com/shivamgfa987' className='btn btn-primary btn-sm mt-6' target={'_blank'}><FaHackerrank className='mr-2' />
          HackerRank Profile</a>
    <a href='https://auth.geeksforgeeks.org/user/shivamgfa987/' className='btn btn-primary btn-sm mt-6 ml-12' target={'_blank'}><SiGeeksforgeeks className='mr-2'/>
          GeeksforGeeks</a>
    <a href='https://leetcode.com/Shivam_Sharma15/' className='btn btn-primary btn-sm mt-6 ml-12' target={'_blank'}><SiLeetcode className='mr-2'/>
          LeetCode</a>
    </p>
  </div>
</div>
  );
};

export default About;