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




//TODO - navigation populate logic
//TODO - contacts section
//TODO -  About the product information
//TODO -  Split js code
//TODO - themes
//TODO - Language versions BG - EN
//TODO - Cookies
let content;
let chosenLanguage = 'en';

main();
async function main() {
  showSpinner();
  content = await readContent();
  generateTemplate();
}

async function readContent() {
  try {
    let contentLink=`assets/content/${chosenLanguage}-content.json`;
    console.log(contentLink)
    const response = await fetch(contentLink);
     
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const content = await response.json();
    console.log(content)
    return content;
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

async function changeLanguage(lang) {
  showSpinner();
  document.querySelector('[id="navigation-side-menu"]').classList.remove('show');
  chosenLanguage = lang.value;
  content = await readContent();
  generateTemplate();
  console.log(lang.value)
}

function showSpinner () {
  let spinnerElement = document.querySelector('[id="spinner"]');
  spinnerElement.classList.remove('d-none');
  spinnerElement.classList.add('d-flex');
  document.body.classList.add('no-scroll');
}

function hideSpinner () {
  let spinnerElement = document.querySelector('[id="spinner"]');
  spinnerElement.classList.add('d-none');
  spinnerElement.classList.remove('d-flex');
  document.body.classList.remove('no-scroll');

   
}

function generateTemplate() {
  populateSlider();
  populateAboutUs();
  populateProducts();
  populateServices();
  populateTeamSection();
  populateTestimonials();
  hideSpinner();
}

function populateSlider() {
  let carouselSection = document.querySelector(carouselControlsId);
  let slideElements = carouselSection.querySelector(slidesWrapperId);
  let slideElement = slideElements.children[0];

  if(slideElements.children.length > 1) {
    slideElements.children = [slideElements.children[0]];
  }

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
  console.log(content.aboutUs.content)
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
  
  if(productElements.children.length > 1) {
    productElements.children = [productElements.children[0]];
  }

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

    
  if(servicesTabs.children.length > 1) {
    servicesTabs.children = [servicesTabs.children[0]];
  }


  let servicesContent = servicesComponent.querySelector(servicesContentWrapperId);
  let serviceContent = servicesContent.children[0];
  
  if(servicesContent.children.length > 1) {
    servicesContent.children = [servicesContent.children[0]];
  }

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

  if(teamMembersComponent.children.length > 1) {
    teamMembersComponent.children = [teamMembersComponent.children[0]];
  }

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

  if(testimonials.children.length > 1) {
    testimonials.children = [testimonials.children[0]];
  }

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
