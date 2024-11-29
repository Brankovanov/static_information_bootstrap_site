// Carousel ids
const carouselControlsId = '[id="carousel-controls"]';
const slidesWrapperId = '[id="slides-wrapper"]';

// About us ids
const aboutUsSectionId = '[id="about-us-section-container"]';
const aboutUsImageId = '[id="about-us-image"]';
const aboutUsTitleId = '[id="about-us-title"]';
const aboutUsBodyId = '[id="about-us-body"]';

// Products ids
const productsSectionId = '[id="products-section-container"]';
const productsTitleId = '[id="products-title"]';
const productContainerId = '[id="product-wrapper"]';
const productTitleId = '[id="product-title"]';
const productContentId = '[id="product-content"]';
const productImageId = '[id="product-image"]';

// Services ids
const servicesSectionId = '[id="services-wrapper"]';
const servicesTitleId = '[id="services-title"]';
const servicesTabWrapperId = '[id="services-tab-navigation-wrapper"]';
const servicesContentWrapperId = '[id="services-tab-content-wrapper"]';

//Our team ids
const ourTeamSectionId = '[id="out-team-wrapper"]';
const ourTeamTitleId = '[id="our-team-title"]';
const teamMembersId = '[id="team-members"]';
const teamMemberImageId = '[id="team-member-image"]';
const teamMemberNameId = '[id="team-member-name"]';
const teamMemberPositionId = '[id="team-member-position"]';

//Testimonials
const testimonialsSectionId = '[id="testimonials-wrapper"]';
const testimonialsTitleId = '[id="testimonials-title"]';
const testimonialsWrapperId = '[id="testimonials-wrapper"]';
const testimonialContentId = '[id="testimonial-content"]';
const testimonialCredentialsId = '[id="testimonial-credentials"]';
const testimonialDateId = '[id="testimonial-date"]';

//Modals
const modalDataAttribute = 'data-bs-target';
const modalLabelDataAttribute = '[data-modal-label="modalLabel"]';
const modalImageDataAttribute = '[data-modal-label="modalImage"]';
const modalBodyDataAttribute = '[data-modal-label="modalBody"]';
const contentLabelDataAttribute = '[data-content-label="contentLabel"]';
const contentImageDataAttribute = '[data-content-image="contentImage"]';
const contentBodyDataAttribute = '[data-content-body="contentBody"]';

const content = {
  slider:
  {
    slides: [
      {
        name: 'LoremIpsum Solutions',
        imageUrl: 'https://picsum.photos/id/119/1200/500.webp'
      },
      {
        name: 'LoremIpsum Solutions',
        imageUrl: 'https://picsum.photos/id/180/1200/500.webp'
      },
      {
        name: 'LoremIpsum Solutions',
        imageUrl: 'https://picsum.photos/id/192/1200/500.webp'
      }
    ]
  },
  aboutUs:
  {
    name: 'About us',
    imageUrl: 'https://picsum.photos/id/668/600/500.webp',
    content: "At LoremIpsum Solutions, we believe in turning challenges into opportunities and ideas into realities. Our mission is to empower businesses with innovative solutions, cutting-edge technology, and unparalleled customer service. Whether you're a start-up looking to establish your presence or an established company seeking growth, LoremIpsum Solutions is here to support you every step of the way. We pride ourselves on delivering customized strategies that drive success and create lasting value for our clients. <br> LoremIpsum Solutions was founded in 2010 with a clear vision: to create a company that blends creativity, technology, and strategic thinking. What started as a small consultancy firm has evolved into a full-service provider, offering a wide array of products and services tailored to meet the unique needs of diverse industries. Over the years, we have built a reputation for excellence, innovation, and trust. <br> From our humble beginnings in a shared workspace to establishing a global presence, our journey has been defined by continuous growth and transformation. We have partnered with over 500 businesses worldwide, helping them achieve their goals through collaboration and cutting-edge solutions. Today, LoremIpsum Solutions is proud to be a leader in delivering impactful results while innovation, and client satisfaction. <br> With a talented team of professionals, a robust portfolio of products, and a commitment to staying ahead LoremIpsum Solutions is ready to help your business thrive in an ever-changing marketplace."
  },
  products:
  {
    name: 'Products',
    productsList:
      [
        {
          name: 'Lorem IpsumCRM Pro',
          content: 'An advanced customer relationship management tool designed to streamline communication, manage customer data, and enhance sales efficiency. With features such as automated workflows, detailed analytics, and seamless integration with other business tools, Lorem IpsumCRM Pro simplifies customer interactions while maximizing team productivity. It is a perfect solution for businesses seeking to deepen relationships and drive long-term loyalty.',
          imageUrl: 'https://picsum.photos/id/802/600/500.webp'
        },
        {
          name: 'Lorem Ipsum Analytics Suite',
          content: 'Harness the power of data with Lorem Ipsum Analytics Suite, a comprehensive analytics platform that provides real-time insights into your business operations. From tracking customer behavior to optimizing supply chains, this suite enables you to make informed decisions based on actionable metrics. Its intuitive dashboard, predictive modeling capabilities, and scalability make it an essential tool for growth-oriented businesses.',
          imageUrl: 'https://picsum.photos/id/8/600/500.webp'
        },
        {
          name: 'Lorem Ipsum Web Builder',
          content: 'Create stunning, professional websites effortlessly with Lorem Ipsum Web Builder. This platform features drag-and-drop functionality, responsive design templates, and advanced e-commerce integrations, allowing businesses to launch online stores or showcase their services with ease. Whether you’re a small business owner or a large enterprise, Lorem Ipsum Web Builder adapts to your needs, empowering you to establish a strong digital presence.',
          imageUrl: 'https://picsum.photos/id/20/600/500.webp'
        },
        {
          name: 'Lorem Ipsum Cloud Secure',
          content: 'Store, access, and manage your data with confidence using Lorem Ipsum Cloud Secure. This cloud storage solution offers end-to-end encryption, automatic backups, and customizable storage plans to meet your unique needs. Ideal for businesses of all sizes, it ensures your sensitive information is protected while remaining accessible from anywhere in the world.',
          imageUrl: 'https://picsum.photos/id/36/600/500.webp'
        },
        {
          name: 'Lorem Ipsum Pay Gatewa',
          content: 'Simplify transactions and enhance customer experience with Lorem Ipsum Pay Gateway, a seamless payment processing system that supports multiple currencies and payment methods. With features like fraud detection, recurring billing, and integration with popular accounting software, Lorem Ipsum Pay Gateway ensures secure and efficient transactions, making it an ideal choice for businesses of all scales.',
          imageUrl: 'https://picsum.photos/id/48/600/500.webp'
        },
        {
          name: 'Lorem CyberShield Protect',
          content: 'Safeguard your business against cyber threats with CyberShield Protect. This all-in-one cybersecurity solution offers advanced threat detection, real-time monitoring, and compliance tools to keep your operations secure. Designed with businesses in mind, CyberShield Protect not only defends against attacks but also educates your team on best practices for maintaining digital safety.',
          imageUrl: 'https://picsum.photos/id/60/600/500.webp'
        },
      ]
  },
  services:
  {
    name: 'Services',
    servicesList: [
      {
        name: 'IT Consultancy',
        content: 'Our IT consultancy service is designed to help businesses navigate the complex world of technology. From evaluating your current systems to creating a roadmap for future growth, our experts provide strategic advice tailored to your goals. Whether you need to optimize processes, reduce costs, or integrate new technologies, we ensure that your IT investments align perfectly with your business objectives.'
      },
      {
        name: 'Custom Software Development',
        content: 'Every business is unique, and so are its challenges. Our custom software development service delivers solutions that address your specific needs. From designing user-friendly applications to building complex enterprise systems, our team ensures seamless functionality and scalability. We prioritize collaboration, ensuring that your vision is at the core of every project we undertake.'
      },
      {
        name: 'Cybersecurity Audits',
        content: 'Stay ahead of cyber threats with our comprehensive cybersecurity audits. We thoroughly analyze your IT infrastructure to identify vulnerabilities, recommend robust security measures, and implement solutions to safeguard your data. From compliance assessments to penetration testing, our audits provide peace of mind in an increasingly connected world.'
      },
      {
        name: 'Cloud Migration Services',
        content: 'Transitioning to the cloud doesn’t have to be daunting. Our cloud migration service ensures a smooth, secure, and efficient move from on-premise systems to cloud-based platforms. We handle everything from planning and data migration to testing and optimization, minimizing downtime and maximizing productivity. Post-migration support ensures your business reaps the full benefits of the cloud.'
      },
      {
        name: 'Digital Marketing Solutions',
        content: 'Expand your reach and grow your brand with our end-to-end digital marketing services. From crafting compelling content and managing social media to implementing SEO strategies and running targeted ad campaigns, we help businesses connect with their audience. Our data-driven approach ensures measurable results that drive engagement and conversions.'
      },
      {
        name: '24/7 Technical Support',
        content: 'Your business deserves uninterrupted operations, and our 24/7 technical support ensures just that. Our dedicated team is always on standby to troubleshoot issues, provide guidance, and implement solutions in real-time. Whether it’s software glitches, hardware failures, or network concerns, you can rely on us to keep your systems running smoothly around the clock.'
      }
    ]
  },
  team: {
    name: 'Our Team',
    teamMembers:
      [
        {
          name: 'Jessica Rivera',
          position: 'CEO & Founder',
          bio: 'Jessica Rivera is the visionary leader behind LoremIpsum. With a Master has degree in Business Administration and over 15 years of experience in technology and innovation, Jessica founded LoremIpsum to bridge the gap between businesses and cutting-edge solutions. She is passionate about fostering a culture of creativity, collaboration, and excellence. Outside of work, Jessica is an avid traveler and a mentor to aspiring entrepreneurs.',
          imageUrl: 'https://picsum.photos/id/64/600/500.webp'
        },
        {
          name: 'Daniel Lee',
          position: 'Chief Technology Officer (CTO)',
          bio: 'Daniel Lee is the technical powerhouse driving LoremIpsum\'s innovative solutions. With a background in software engineering and extensive experience in AI and cloud computing, Daniel ensures the company stays ahead of technological trends. Known for his analytical mind and problem-solving skills, he’s instrumental in developing products that meet evolving business needs. Daniel is also a dedicated mentor, helping young developers hone their skills.',
          imageUrl: 'https://picsum.photos/id/433/600/500.webp'
        },
        {
          name: 'Amara Singh',
          position: 'Head of Marketing',
          bio: 'Amara Singh is the creative force behind LoremIpsum\'s dynamic marketing campaigns. With a decade of experience in digital marketing and brand strategy, she has a knack for connecting businesses with their audiences in meaningful ways. Amara’s innovative approach has led to award-winning campaigns that drive measurable results. When she\'s not crafting strategies, she enjoys photography and exploring local cuisines.',
          imageUrl: 'https://picsum.photos/id/823/600/500.webp'
        },
        {
          name: 'James Carter',
          position: 'Lead Software Developer',
          bio: 'James Carter has over a decade of experience in software development, specializing in building scalable, user-friendly applications. His expertise spans multiple programming languages, frameworks, and methodologies. James is known for his meticulous attention to detail and commitment to delivering high-quality solutions. A tech enthusiast at heart, he also enjoys contributing to open-source projects and organizing coding bootcamps for the community.',
          imageUrl: 'https://picsum.photos/id/177/600/500.webp'
        },
        {
          name: 'Elena Ivanov',
          position: 'Client Success Manager',
          bio: 'Elena Ivanov is dedicated to ensuring every client’s journey with LoremIpsum is smooth, rewarding, and impactful. With a background in business communication and project management, Elena excels at understanding client needs and delivering tailored solutions. Her empathetic approach and problem-solving skills have made her a trusted advisor to many clients. In her spare time, she volunteers at local charities and enjoys painting.',
          imageUrl: 'https://picsum.photos/id/832/600/500.webp'
        },
        {
          name: 'Mohammed Ali',
          position: 'Cybersecurity Specialist',
          bio: 'Mohammed Ali is LoremIpsum’s guardian of digital safety. With certifications in ethical hacking and cybersecurity management, Mohammed specializes in protecting businesses against evolving threats. He has a proven track record of fortifying IT infrastructures and ensuring compliance with industry standards. Known for his calm demeanor and quick thinking, Mohammed is the go-to expert in crisis situations. He is also a chess enthusiast and a speaker at cybersecurity conferences.',
          imageUrl: 'https://picsum.photos/id/349/600/500.webp'
        }
      ]
  },
  testimonials: {
    name: 'Testimonials',
    testimonialsList : [
      {
        testimonial: '"LoremIpsum transformed our operations with their innovative tools. Their team truly understands our needs and provided solutions that exceeded our expectations. The implementation process was seamless, and we’ve seen remarkable improvements in efficiency and customer engagement."',
        author: 'Sarah Johnson',
        position: 'CEO of Bright Futures Consulting',
        date: 'October 5, 2024'
      },
      {
        testimonial: '"Partnering with LoremIpsum was one of the best decisions we’ve ever made. Their cloud migration service saved us countless hours of downtime, and their technical support team is always just a call away. It feels like we’ve gained not just a service provider but a true partner."',
        author: 'Mark Peterson',
        position: 'IT Manager at Green Horizon Tech',
        date: 'August 12, 2024'
      },
      {
        testimonial: '"The cybersecurity audit by LoremIpsum identified vulnerabilities we didn’t even know existed. Thanks to their proactive approach and robust solutions, we’ve avoided several potential threats. I highly recommend their services to any company looking to strengthen their digital defenses."',
        author: 'Priya Kapoor',
        position: 'Operations Director at SecureNow Finance',
        date: 'July 25, 2024'
      },
      {
        testimonial: '"I can’t say enough good things about LoremIpsum’s marketing team. Their digital campaigns helped us reach a wider audience and increased our sales by over 30% in just six months. They don’t just deliver results; they understand your vision and bring it to life."',
        author: 'Laura Chen',
        position: 'COO of Streamline Logistics',
        date: 'May 3, 2024'
      },
      {
        testimonial: '"LoremIpsum’s software development team built a custom solution for our logistics business, and the results have been phenomenal. The system is intuitive, reliable, and has significantly reduced our operational bottlenecks. We look forward to working with them again on future projects."',
        author: 'Laura Chen',
        position: 'CEO of Bright Futures Consulting',
        date: 'October 5, 2024'
      },
      {
        testimonial: '"The tools and insights provided by LoremIpsum’s analytics suite have completely changed how we approach decision-making. Their team is professional, knowledgeable, and genuinely invested in their clients’ success. I highly recommend their services to anyone looking to grow their business."',
        author: 'Carlos Martinez',
        position: 'General Manager at Urban Roots Retail',
        date: 'March 15, 2024'
      }
    ]
  }
}


//TODO - navigation populate logic
//TODO - contacts section
//TODO -  About the product information
//TODO -  Split js code
//TODO - themes

main();
function main() {
  generateTemplate();
}

function generateTemplate() {
  populateSlider();
  populateAboutUs();
  populateProducts();
  populateServices();
  populateTeamSection();
  populateTestimonials();
}

function populateSlider() {
  let carouselSection = document.querySelector(carouselControlsId);
  let slideElements = carouselSection.querySelector(slidesWrapperId)
  let slideElement = slideElements.children[0];

  for (let index = 0; index < content.slider.slides.length; index++) {
    if (index === 0) {
      slideElement.children[0].src = content.slider.slides[index].imageUrl;
      slideElement.children[0].alt = content.slider.slides[index].name;
      slideElement.classList.add('active');
    } else {
      let newSlide = slideElement.cloneNode(true);
      newSlide.children[0].src = content.slider.slides[index].imageUrl;
      newSlide.children[0].alt = content.slider.slides[index].name;
      newSlide.classList.remove('active');
      slideElements.appendChild(newSlide);
    }
  }
}

function populateAboutUs() {
  let aboutUsComponent = document.querySelector(aboutUsSectionId);
  let aboutUsImageElement = aboutUsComponent.querySelector(aboutUsImageId);
  aboutUsImageElement.src = content.aboutUs.imageUrl;
  aboutUsImageElement.alt = content.aboutUs.name;

  let aboutUsTitleElement = aboutUsComponent.querySelector(aboutUsTitleId);
  aboutUsTitleElement.innerHTML = content.aboutUs.name;

  let aboutUsBodyElement = aboutUsComponent.querySelector(aboutUsBodyId);
  aboutUsBodyElement.innerHTML = content.aboutUs.content;

}

function populateProducts() {
  let productsComponents = document.querySelector(productsSectionId);
  let productsTitle = productsComponents.querySelector(productsTitleId);
  productsTitle.innerHTML = content.products.name;

  let productElements = productsComponents.querySelector(productContainerId);
  let product = productElements.children[0];

  for (let index = 0; index < content.products.productsList.length; index++) {
    if (index === 0) {
      let productImage = product.querySelector(productImageId);
      productImage.alt = content.products.productsList[index].name;
      productImage.src = content.products.productsList[index].imageUrl;
      let productTitle = product.querySelector(productTitleId);
      productTitle.innerHTML = content.products.productsList[index].name;
      let productContent = product.querySelector(productContentId);
      productContent.innerHTML = content.products.productsList[index].content;
    } else {
      let newProduct = product.cloneNode(true);
      let productImage = newProduct.querySelector(productImageId);
      productImage.alt = content.products.productsList[index].name;
      productImage.src = content.products.productsList[index].imageUrl;
      let productTitle = newProduct.querySelector(productTitleId);
      productTitle.innerHTML = content.products.productsList[index].name;
      let productContent = newProduct.querySelector(productContentId);
      productContent.innerHTML = content.products.productsList[index].content;
      productElements.appendChild(newProduct);
    }
  }


}

function populateServices() {
  let servicesComponent = document.querySelector(servicesSectionId);
  let servicesTitle = servicesComponent.querySelector(servicesTitleId);
  servicesTitle.innerHTML = content.services.name;

  let servicesTabs = servicesComponent.querySelector(servicesTabWrapperId);
  let serviceTab = servicesTabs.children[0];

  let servicesContent = servicesComponent.querySelector(servicesContentWrapperId);
  let serviceContent = servicesContent.children[0];

  for (let index = 0; index < content.services.servicesList.length; index++) {
    if (index == 0) {
      let tabButton = serviceTab.querySelector('button');
      let serviceId = content.services.servicesList[index].name.toLowerCase().replaceAll(' ', '-')
      tabButton.id = serviceId;
      tabButton.setAttribute('data-bs-target', `#${serviceId}-pane`);
      tabButton.setAttribute('aria-controls', `#${serviceId}-pane`);
      tabButton.innerHTML = content.services.servicesList[index].name;

      serviceContent.id = `${serviceId}-pane`;
      serviceContent.setAttribute('aria-labelledby', `#${serviceId}-tab`);
      serviceContent.innerHTML = content.services.servicesList[index].content;

    } else {
      let newTab = serviceTab.cloneNode(true);
      let tabButton = newTab.querySelector('button');
      let serviceId = content.services.servicesList[index].name.toLowerCase().replaceAll(' ', '-')
      tabButton.id = serviceId;
      tabButton.setAttribute('data-bs-target', `#${serviceId}-pane`);
      tabButton.setAttribute('aria-controls', `#${serviceId}-pane`);
      tabButton.innerHTML = content.services.servicesList[index].name;
      tabButton.classList.remove('active')
      servicesTabs.appendChild(newTab);

      let newServiceContent = serviceContent.cloneNode(true);
      newServiceContent.id = `${serviceId}-pane`;
      newServiceContent.setAttribute('aria-labelledby', `#${serviceId}-tab`);
      newServiceContent.innerHTML = content.services.servicesList[index].content;
      newServiceContent.classList.remove('show');
      newServiceContent.classList.remove('active');

      servicesContent.appendChild(newServiceContent);
    }
  }
}

function populateTeamSection() {
  let ourTeamSection = document.querySelector(ourTeamSectionId);
  let ourTeamTitle = ourTeamSection.querySelector(ourTeamTitleId);
  ourTeamTitle.innerHTML = content.team.name;

  let teamMembersComponent = ourTeamSection.querySelector(teamMembersId)
  let teamMember = teamMembersComponent.children[0];

  for(let index = 0; index < content.team.teamMembers.length; index++) {
    if(index === 0) {
      let teamMemberImage = teamMember.querySelector(teamMemberImageId);
      teamMemberImage.alt = `${content.team.teamMembers[index].name} - ${content.team.teamMembers[index].position}`
      teamMemberImage.src =content.team.teamMembers[index].imageUrl;
      let teamMemberName =  teamMember.querySelector(teamMemberNameId);
      teamMemberName.innerHTML = content.team.teamMembers[index].name;
      teamMemberName.setAttribute('data-bio', content.team.teamMembers[index].bio);
      let teamMemberPosition = teamMember.querySelector(teamMemberPositionId);
      teamMemberPosition.innerHTML = content.team.teamMembers[index].position;
    } else {
      let newTeamMember = teamMember.cloneNode(true);
      let teamMemberImage = newTeamMember.querySelector(teamMemberImageId);
      teamMemberImage.alt = `${content.team.teamMembers[index].name} - ${content.team.teamMembers[index].position}`
      teamMemberImage.src =content.team.teamMembers[index].imageUrl;
      let teamMemberName =  newTeamMember.querySelector(teamMemberNameId);
      teamMemberName.innerHTML = content.team.teamMembers[index].name;
      teamMemberName.setAttribute('data-bio', content.team.teamMembers[index].bio);
      let teamMemberPosition = newTeamMember.querySelector(teamMemberPositionId);
      teamMemberPosition.innerHTML = content.team.teamMembers[index].position;
      teamMembersComponent.appendChild(newTeamMember);
    }
  }
}

function populateTestimonials() {
  let testimonialsSection = document.querySelector(testimonialsSectionId);
  let testimonialsTitle = testimonialsSection.querySelector(testimonialsTitleId);
  testimonialsTitle.innerHTML = content.testimonials.name;
  let testimonials = testimonialsSection.querySelector(testimonialsWrapperId);
  let testimonial = testimonials.children[0];

  for(let index = 0; index < content.testimonials.testimonialsList.length; index++){
    if(index === 0) {
      let testimonialContent = testimonial.querySelector(testimonialContentId)
      testimonialContent.innerHTML = content.testimonials.testimonialsList[index].testimonial;
      let testimonialCredentials = testimonial.querySelector(testimonialCredentialsId);
      testimonialCredentials.innerHTML = `${content.testimonials.testimonialsList[index].author}, ${content.testimonials.testimonialsList[index].position}`;
      let testimonialDate = testimonial.querySelector(testimonialDateId);
      testimonialDate.innerHTML = content.testimonials.testimonialsList[index].date;
    } else {
      let newTestimonial = testimonial.cloneNode(true);
      let testimonialContent = newTestimonial.querySelector(testimonialContentId)
      testimonialContent.innerHTML = content.testimonials.testimonialsList[index].testimonial;
      let testimonialCredentials = newTestimonial.querySelector(testimonialCredentialsId);
      testimonialCredentials.innerHTML = `${content.testimonials.testimonialsList[index].author}, ${content.testimonials.testimonialsList[index].position}`;
      let testimonialDate = newTestimonial.querySelector(testimonialDateId);
      testimonialDate.innerHTML = content.testimonials.testimonialsList[index].date;
      testimonials.appendChild(newTestimonial);
    }
  }

}

function getModalData(eventTarget) {
  let modalId = eventTarget.getAttribute(modalDataAttribute);
  let targetContentLabel = eventTarget.querySelector(contentLabelDataAttribute);
  let targetContentImage = eventTarget.querySelector(contentImageDataAttribute);
  let targetContentBody = eventTarget.querySelector(contentBodyDataAttribute);
  let targetModal = document.querySelector(modalId);
  let targetModalLabel = targetModal.querySelector(modalLabelDataAttribute);
  let targetModalImage = targetModal.querySelector(modalImageDataAttribute);
  let targetModalBody = targetModal.querySelector(modalBodyDataAttribute);

  if (targetContentLabel) {
    targetModalLabel.innerHTML = modalId === '#ourTeamModal' ? `${targetContentLabel.innerHTML} - ${targetContentBody.innerHTML}` : targetContentLabel.innerHTML;
  }

  if (targetContentImage) {
    targetModalImage.alt = targetContentImage.alt;
    targetModalImage.src = targetContentImage.src;
  }
 
  if (targetContentBody) {
    targetModalBody.innerHTML = modalId === '#ourTeamModal' ? targetContentLabel.getAttribute('data-bio') :targetContentBody.innerHTML;
  }
}
