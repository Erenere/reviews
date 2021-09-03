import React from 'react';
import './Review.css';


const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag flexitarian irony, vape.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const Review = ()=>{
    const [index,setIndex] = React.useState(0);
    const {image,name,job,text} = reviews[index];    
  
    const check = (num)=>{
      if(num>reviews.length-1){
        return 0;
      }else if(num<0){
        return reviews.length-1;
      }
      return num;
    };

    const randomPerson = ()=>{
      let random = Math.floor(Math.random()*4);
      if(random===index){
        setIndex(check(random+1));
      }else{
        setIndex(check(random));
      }
    }

    const nextEl = ()=>{
      setIndex(check(index+1));
    };

    const prevEl = ()=>{
      setIndex(check(index-1));
    };

    return(
        <div className = "Review">
            <div className="image-cont">
                <img src={image} className="image"></img>
            </div>            
            <h2 className="name">
                {name}
            </h2>
            <p className="job">
                {job}
            </p>
            <p className="text">
                {text}
            </p>
            <div className="buttons">
                <div className="arrows">
                <button className="left" onClick={prevEl} id="left"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg></button>
                <button className="right" onClick={nextEl} id="right"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg></button>
                </div>
                <button className="random-btn" onClick={randomPerson}>Surprise Me!</button>
            </div>
            
        </div>
    )
}
export default Review;