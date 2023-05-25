import React from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
import { Link } from 'react-router-dom';
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://th.bing.com/th/id/OIP.Nu9JYHgd3DPi2KrzJ3rvQAHaE5?pid=ImgDet&w=177&h=117&c=7&dpr=1.1" alt="" />
        <div className="user">
        <img src="https://th.bing.com/th/id/OIP.VEjnBkl5y660PHvUHN5TEAHaE7?pid=ImgDet&rs=1" alt="" />
        <div className="info">
        <span>Prema V</span>
        <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt=""/>
          </Link>
          <img src={Delete} alt=""/>
          </div>
        </div>
        
        <h1>Application of knowledge for achieving goals in a reproducible way.</h1>
        <p>From the earliest stone tools to the latest advances in artificial intelligence, robotics, blockchains and virtual reality, technology has continuously transformed our lives. Stay informed about the latest technological breakthroughs and the ethical and societal norms they challenge.</p>
        <p>Many technological advancements have led to societal changes. The earliest known technology is the stone tool, used in the prehistoric era,followed by fire use, which contributed to the growth of the human brain and the development of language in the Ice Age.
          <p>The invention of the wheel in the Bronze Age enabled wider travel and the creation of more complex machines. Recent technological developments, including the printing press, the telephone, and the Internet have lowered communication barriers and ushered in the knowledge economy.
        While technology contributes to economic development and human prosperity, it can also have negative impacts like pollution or resource depletion, or cause social harms like technological unemployment caused by automation. 
        <p>As a result, philosophical and political debates have arisen over the role and use of technology, the ethics of technology, and the mitigation of technology's potential downsides.
        </p>
        </p>
        <p>The notion of ‘the singularity’ has been tantalizing the tech community for decades, heralding a future with infinitely powerful artificial intelligence capable of independently improving itself.</p>
         Historical and contemporary movements like neo-Luddism and anarcho-primitivism criticize technology's pervasiveness, while adherents to transhumanism and techno-progressivism actively support technological change, viewing it as emancipatory.
         <p>Many negative impacts of technology can be mitigated through technological innovations like renewable energy in transportation and industry,genetically modified crops to address soil depletion,and space exploration to mitigate global catastrophic risks.
          </p>
        </p>
        </div>
        <Menu />
      
    </div>
  )
}

export default Single;