import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';  
const Home = () => {
  const mehenthi = [
    { name: 'SUBI', image1: 'https://images.pexels.com/photos/12872531/pexels-photo-12872531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',image2:"https://th.bing.com/th/id/R.f6112f81f2d61284115eaa9c8469f898?rik=xBglUx8NMInPjQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-EWUxeWelTQ8%2fTn86O38kJtI%2fAAAAAAAABMI%2fklwDHLA1FO4%2fs1600%2fMehndi%2bdesign%2b%25252812%252529.jpg&ehk=csk%2bFbtS1%2baqXBLoViWSicd3uU4qepoaVfG7cgFpqWM%3d&risl=&pid=ImgRaw&r=0" ,image3:"https://i.pinimg.com/originals/45/95/91/459591ce385d7f6650e3fbe5ec00039d.jpg"},
    { name: 'THANA LAKSHMI', image1: 'https://images.pexels.com/photos/5281835/pexels-photo-5281835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',image2:"https://www.weddingbels.com/wp-content/uploads/2018/10/WhatsApp-Image-2020-08-26-at-2.05.33-PM-3.jpeg",image3:"https://www.bookeventz.com/blog-old/wp-content/uploads/moon-design-1-321x400.jpg" },
    { name: 'CHITRA', image1: 'https://images.pexels.com/photos/4125853/pexels-photo-4125853.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' ,image2:"https://www.weddingbels.com/wp-content/uploads/2018/10/WhatsApp-Image-2020-08-26-at-2.05.33-PM-3.jpeg",image3:"https://i.pinimg.com/originals/08/d3/fc/08d3fc47a18dd00a99783041e83f3f5b.jpg"},
    { name: 'SUBI', image1: 'https://images.pexels.com/photos/12872541/pexels-photo-12872541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' ,image2:"https://i.pinimg.com/736x/cc/0f/a5/cc0fa5355666902d5426084e65d8ef12.jpg",image3:"https://th.bing.com/th/id/OIP.Tub1NkUQr9-iiHJ2XEJ7hwHaJQ?rs=1&pid=ImgDetMain"},
    { name: 'THANA LAKSHMI', image1: 'https://images.pexels.com/photos/11019293/pexels-photo-11019293.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' ,image2:"https://th.bing.com/th/id/OIP.Kh_44h3Rpvl1qMnCV61oSwHaH5?w=1080&h=1152&rs=1&pid=ImgDetMain",image3:"https://media.weddingz.in/images/5f9c06b993cbbb4dd0862aa0736ed66a/fWU7GHe2Z7HUvv0rNgicMQtpCZhtEC03HXp_vmHOev87KcnnA697Y-lhTFm4R_6Q8F2urDw6MpXT9vfxivb_WwOB3DGBnxTRFo2N72LJLrvo-LqciLgRIiNqq1kk2fq7LtaFbnr1.jpg"},
    { name: 'CHITRA', image1: 'https://images.pexels.com/photos/5602866/pexels-photo-5602866.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' ,image2:"https://shaadiwish.com/blog/wp-content/uploads/2023/11/Traditional-Elephant-Mehndi-Design-For-Brides-NS-Mehendi-Artist.jpg",image3:"https://www.weddingbels.com/wp-content/uploads/2018/10/WhatsApp-Image-2020-08-26-at-2.05.33-PM-3.jpeg"},
    { name: 'SUBI',  image1: 'https://images.pexels.com/photos/2750395/pexels-photo-2750395.jpeg?auto=compress&cs=tinysrgb&w=600' ,image2:"https://cdn0.weddingwire.in/article/3353/original/1920/jpg/83533-peacock-mehndi-design-henna-by-divya-intricate-peacock-mehndi-backhand.jpeg",image3:"https://i.pinimg.com/736x/52/39/45/52394567bb0e668f2508efc71aebd4bb.jpg"},
    { name: 'THANA LAKSHMI', image1: 'https://images.pexels.com/photos/18074563/pexels-photo-18074563/free-photo-of-henna-tattoos-on-hands-and-foot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',image2:"https://i.pinimg.com/564x/57/1f/68/571f68ae88de50d08f6863030ff8311c.jpg" ,image3:"https://i.ytimg.com/vi/d6l7DGUrjAE/maxresdefault.jpg"},
    { name: 'CHITRA', image1: 'https://images.pexels.com/photos/27024442/pexels-photo-27024442/free-photo-of-traditional-bride-with-henna-on-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',image2:"https://i.pinimg.com/originals/08/d3/fc/08d3fc47a18dd00a99783041e83f3f5b.jpg",image3:"https://i.pinimg.com/originals/b5/4f/10/b54f10df5e3b881d1c97940d911ed2be.jpg" }
  
  ];

  return (
    <div>
    <Navbar />
      

      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Shenba Mehanthi Booking</h1>
          <p>Make memories beautiful.</p>
          <a href="/Contact" className="btn btn-primary">Book Now</a>
        </div>
      </header>

      <div className="container mt-5">
        <h2 className="text-center">Mehanthi works</h2>
        <div className="row">
          {mehenthi.map((mehenthi, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card">
  <div className="card-gallery">
    <img src={mehenthi.image1} alt={mehenthi.name} />
    <img src={mehenthi.image2} alt={mehenthi.name} />
    <img src={mehenthi.image3} alt={mehenthi.name} />
  </div>
  <div className="card-body">
    <h5 className="card-title">{mehenthi.name}</h5>
    <a href="/Contact" className="btn btn-success">Book Now</a>
  </div>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
     <br/><br/><br/>
      <footer className="footer bg-light mt-5">
          <div className="container text-center">
             <p>&copy; 2024 Shenba Mehendi Booking. All rights reserved.</p>
          </div>
      </footer>

    </div>
  );
};

export default Home;