import React from 'react';
import Nav from '../Navbar/Nav';

const Blogs = () => {
    return (
        <div>
            <Nav></Nav>
            <h1 className='m-5 d-flex justify-content-start'>Qus : What is Context Api ?</h1>
            <p className='fs-5 '>Ans : Context API is a way for a React app to pass global variables that can be passed all around. It is very difficult to pass data by prop drilling. Prop drilling means passing data from grandparent to child to parent.we can easily pass data from grandparents to children by setting the context API(usually you are only able to pass data from parent to child via props).context allows you to share information to any component, by storing it in a central place and allowing access to any component that needs .</p>
            <h1 className='m-5 d-flex justify-content-start'>Qus : What is semantic tag ?</h1>
            <p className='fs-5  te'>Ans :Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. HTML5 semantic markup helps the browser to understand the meaning of the content which is displayed in the UI. HTML5 semantic tag also helps search engines to read the page and find the required information faster.And it also eazy to understand for human when see the code .</p>
            <h4 className='d-flex justify-content-start m-4'>There some exampl of Semantic Tags:</h4>
            <ul className='d-flex '>
                <li className='m-3'> article </li>
                <li className='m-3'>aside</li>
                <li className='m-3'>details</li>
                <li className='m-3'>figcaption</li>
                <li className='m-3'>figure</li>
                <li className='m-3'>footer</li>
                <li className='m-3'>header</li>
                <li className='m-3'>main</li>
                <li className='m-3'>mark</li>
                <li className='m-3'>nav</li>
                <li className='m-3'>section</li>
                <li className='m-3'>summary</li>
                <li className='m-3'>time</li>
            </ul>
            <img className='mb-5' src="https://www.w3schools.com/html/img_sem_elements.gif" alt="" />
        </div >
    );
};

export default Blogs;