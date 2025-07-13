const Contact =() =>{
    return(
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <form action="/submit-form" method="post">
        
        {/* First Name Field */}
        <label htmlFor="first-name" className="block mb-2 font-medium text-gray-700">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <br /><br />
        
        {/* Last Name Field */}
        <label htmlFor="last-name" className="block mb-2 font-medium text-gray-700">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <br /><br />
        
        {/* Cuisines Field */}
        <label htmlFor="cuisines" className="block mb-2 font-medium text-gray-700">Preferred Cuisines:</label>
        <input
          type="text"
          id="cuisines"
          name="cuisines"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="e.g., Italian, Chinese"
        />
        <br /><br />
        
        {/* Area Field */}
        <label htmlFor="area" className="block mb-2 font-medium text-gray-700">Area/Location:</label>
        <input
          type="text"
          id="area"
          name="area"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <br /><br />
        
        {/* Preorder Field */}
        <label htmlFor="preorder" className="block mb-2 font-medium text-gray-700">Preorder Information:</label>
        <input
          type="text"
          id="preorder"
          name="preorder"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="e.g., Yes/No or order details"
        />
        <br /><br />
        
        {/* Feedback/Query Text Area */}
        <label htmlFor="feedback" className="block mb-2 font-medium text-gray-700">Feedback or Query:</label>
        <textarea
          id="feedback"
          name="feedback"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="Enter your feedback or questions here..."
        ></textarea>
        <br /><br />
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Submit
        </button>
      
      </form>
    </div>
    )
}

export default Contact;