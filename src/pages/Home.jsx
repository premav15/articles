import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

   const posts = [

    
     {
       id: 1,
       title: "Application of knowledge for achieving goals in a reproducible way.",
       desc: "visual art, a visual object or experience consciously created through an expression of skill or imagination. The term art encompasses diverse media such as painting, sculpture, printmaking, drawing, decorative arts, photography, and installation!",
       img: "https://www.volhighspeed.at/wp-content/uploads/2020/06/volhighspeed_blogbeitrag_wlan_optimieren_beitragsbild.jpg",
     },
     {
       id: 2,
       title: "How Technology Is Transforming The Food Industry. ",
       desc: "Technology over the years has changed how we produce and find our food through applications, robotics, data and processing techniques.Precision agriculture is a major player when it comes to how technology can make a difference. It is the use of GPS tracking systems and satellite imagery to monitor crop yields on the farm!",
       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 3,
       title: "Technology and art: Engineering the future.",
       desc: "  Now think technology - and you'll probably imagine a smartphone or a computer.Today, these two seemingly distinct disciplines are interlinked more than ever, with technology being a fundamental force in the development and evolution of art.!",
       img: "https://i5.walmartimages.com/asr/28e380eb-14d6-48a4-909d-fccbd3d8b712.84df4a1c897c76f8eeb268f972190062.jpeg",
     },
     {
       id: 4,
       title: "To Build More-Inclusive Technology, Change Your Design Process.",
       desc: "“Empathizing” with user communities to understand their needs and challenges is traditionally the first step in design thinking and human-centered product development. But this approach can lead designers astray!",
       img: "https://hbr.org/resources/images/article_assets/2020/10/Oct20_19_72983853.jpg",
     },
     {
      id: 5,
      title: "An AI can decode speech from brain activity with surprising accuracy.",
      desc: "Developed by Facebook’s parent company, Meta, the AI could eventually be used to help people who can’t communicate through speech, typing or gestures.An artificial intelligence can decode words and sentences from brain activity with surprising — but still limited — accuracy. Using only a few seconds of brain activity data, the AI guesses what a person has heard.!",
      img: "https://www.sciencenews.org/wp-content/uploads/2022/09/090622_jm_ai-words_feat-1341x776.jpg",
    },
    {
      id: 6,
      title: "New Film Technologies Disrupting the Entertainment Industry",
      desc: "At its core, algorithmic editing simply refers to the process of editing according to a set of well-defined rules.Due to the increasingly digital nature of new film technology, computer programming languages are increasingly integrated into the future of filmmaking technology itself!",
      img: "https://th.bing.com/th/id/OIP.WKQievnMAHY2rTR3_NuaJwHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    },
   ];


  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;