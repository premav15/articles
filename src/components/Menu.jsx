import React from 'react'

const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "ChatGPT and pickleball are in. Crypto and Meta are out: What's hot in tech this year",
          desc: "The tech industry has been rocked by a revolution in generative AI over the past few months.",
          img: "https://www.businessinsider.in/thumb/msid-99358835,width-700,height-525,imgsize-470516/artificial-intelligence.jpg",
        },
        {
          id: 2,
          title: "The Rise of Multimedia Art and Entirely new Genres ",
          desc: "Technology over the years has changed how we produce and find our food through applications, robotics, data and processing techniques.Precision agriculture is a major player when it comes to how technology can make a difference. It is the use of GPS tracking systems and satellite imagery to monitor crop yields on the farm!",
          img: "https://th.bing.com/th/id/OIP.qEDpn-6r7v3jQlyqyA1KzgHaE3?w=285&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        },
        {
          id: 3,
          title: "Food Tech Startups: Which is the best Food Tech Startup in India?",
          desc: "  Now think technology - and you'll probably imagine a smartphone or a computer.Today, these two seemingly distinct disciplines are interlinked more than ever, with technology being a fundamental force in the development and evolution of art.!",
          img: "https://qph.fs.quoracdn.net/main-qimg-33e418ac543d3cd8a5fb21a4efb1ae78",
        },
        {
          id: 4,
          title: "Install a virtual machine to put a computer inside your computer",
          desc: "“Empathizing” with user communities to understand their needs and challenges is traditionally the first step in design thinking and human-centered product development. But this approach can lead designers astray!",
          img: "https://th.bing.com/th/id/OIP.POKlRGO606MYGj-cefYmWAAAAA?pid=ImgDet&w=194&h=127&c=7&dpr=1.1",
        },
        
    ];
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
        <div className="post" key={post.id}>
        <img src={post.img} alt="" />
         <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
        ))}
       </div>
  );
}

export default Menu;