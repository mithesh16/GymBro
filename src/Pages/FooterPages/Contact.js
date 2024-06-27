import React,{useState}from 'react'
import Footer from '../../Components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
    
      return (
        <div className="flex flex-col items-center  pb-10 px-4">
          <div className="max-w-4xl w-full  rounded-lg shadow-lg p-8 mb-10">
            <h1 className="text-4xl font-bold text-center text-violet-400 mb-6">Contact Us</h1>
            <p className="text-lg text-white mb-6 text-center">
              We'd love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out to us.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-violet-600 text-white font-bold py-2 rounded-lg hover:bg-violet-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <Footer/>
        </div>
  )
}

export default Contact
