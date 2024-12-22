import React, { useState } from 'react';

const Contact = () => {
  const [error, setError] = useState({})
  const [inputValue, setInputValue] = useState({
    name:'',
    email:'',
    textarea:'',
  })

  const handleInputValue = (e)=>{
    const {name,value} = e.target;
    setInputValue(()=>{
      return {
        ...inputValue,
        [name]:value
      }
    })
  }


  // input Validation
  const validateInpute = (values)=>{
    const errors = {}
     // Name Validation
     if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    } else if (values.name.length > 10) {
      errors.name = "Name must be less than 10 characters";
    }

    // Email Validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email format is invalid";
    }

    // Textarea Validation
    if (!values.textarea) {
      errors.textarea = "Message is required";
    } else if (values.textarea.length < 10) {
      errors.textarea = "Message must be at least 10 characters";
    }


    return errors;
  }


  // form submit
  const handleFormSubmit = (e)=>{
    e.preventDefault();
   const validation = validateInpute(inputValue)

    if(Object.keys(validation).length === 0){
      alert("form submited successfully..")
    setInputValue({ 
      name:'',
      email:'',
      textarea:'',
    })
    setError({})
    }else{
      setError(validation)
    }
    
    
  }
  return (
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="max-w-md w-full bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Contact Us</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-gray-500"
              placeholder="Your Name"
              name='name'
              value={inputValue.name}
              onChange={handleInputValue}
              
            />
            {error && <span className='text-red-600'>{error.name}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-gray-500"
              placeholder="Your Email"
              name='email'
              value={inputValue.email}
              onChange={handleInputValue}
              
            />
            {error && <span className='text-red-600'>{error.email}</span>}

          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-gray-500"
              placeholder="Your Message"
              name='textarea'
              
              onChange={handleInputValue}
              
              value={inputValue.textarea}
            >
            </textarea>
            {error && <span className='text-red-600'>{error.textarea}</span>}

          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 rounded focus:outline-none focus:ring focus:ring-gray-500 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;