import { constants } from './constants.js'

window.getModalData = getModalData;
export function generateTemplate(content) {
  populateSlider(content);
  populateAboutUs(content);
  populateProducts(content);
  populateServices(content);
  populateTeamSection(content);
  populateTestimonials(content);
  hideSpinner();
}

function populateSlider(content) {
  let carouselSection = document.querySelector(constants.carouselControlsId);
  let slideElements = carouselSection.querySelector(constants.slidesWrapperId);
  let slideElement = slideElements.children[0];

  for (let index = 0; index < content.slider.slides.length; index++) {
    if (index === 0) {
      slideElement.children[0].src = content.slider.slides[index].imageUrl;
      slideElement.children[0].alt = content.slider.slides[index].name;
      slideElement.classList.add(constants.active);
    } else {
      let newSlide = slideElement.cloneNode(true);
      newSlide.children[0].src = content.slider.slides[index].imageUrl;
      newSlide.children[0].alt = content.slider.slides[index].name;
      newSlide.classList.remove(constants.active);
      slideElements.appendChild(newSlide);
    }
  }
}

function populateAboutUs(content) {
  let aboutUsComponent = document.querySelector(constants.aboutUsSectionId);
  let aboutUsImageElement = aboutUsComponent.querySelector(constants.aboutUsImageId);
  aboutUsImageElement.src = content.aboutUs.imageUrl;
  aboutUsImageElement.alt = content.aboutUs.name;
  let aboutUsTitleElement = aboutUsComponent.querySelector(constants.aboutUsTitleId);
  aboutUsTitleElement.innerHTML = content.aboutUs.name;

  let aboutUsBodyElement = aboutUsComponent.querySelector(constants.aboutUsBodyId);
  aboutUsBodyElement.innerHTML = content.aboutUs.content;
}

function populateProducts(content) {
  let productsComponents = document.querySelector(constants.productsSectionId);
  let productsTitle = productsComponents.querySelector(constants.productsTitleId);
  productsTitle.innerHTML = content.products.name;

  let productElements = productsComponents.querySelector(constants.productContainerId);
  let product = productElements.children[0];

  clearComponents(productElements);

  for (let index = 0; index < content.products.productsList.length; index++) {
    if (index === 0) {
      let productImage = product.querySelector(constants.productImageId);
      productImage.alt = content.products.productsList[index].name;
      productImage.src = content.products.productsList[index].imageUrl;
      let productTitle = product.querySelector(constants.productTitleId);
      productTitle.innerHTML = content.products.productsList[index].name;
      let productContent = product.querySelector(constants.productContentId);
      productContent.innerHTML = content.products.productsList[index].content;
    } else {
      let newProduct = product.cloneNode(true);
      let productImage = newProduct.querySelector(constants.productImageId);
      productImage.alt = content.products.productsList[index].name;
      productImage.src = content.products.productsList[index].imageUrl;
      let productTitle = newProduct.querySelector(constants.productTitleId);
      productTitle.innerHTML = content.products.productsList[index].name;
      let productContent = newProduct.querySelector(constants.productContentId);
      productContent.innerHTML = content.products.productsList[index].content;
      productElements.appendChild(newProduct);
    }
  }
}

function populateServices(content) {
  let servicesComponent = document.querySelector(constants.servicesSectionId);
  let servicesTitle = servicesComponent.querySelector(constants.servicesTitleId);
  servicesTitle.innerHTML = content.services.name;

  let servicesTabs = servicesComponent.querySelector(constants.servicesTabWrapperId);
  let serviceTab = servicesTabs.children[0];

  clearComponents(servicesTabs);

  let servicesContent = servicesComponent.querySelector(constants.servicesContentWrapperId);
  let serviceContent = servicesContent.children[0];

  clearComponents(serviceContent);

  for (let index = 0; index < content.services.servicesList.length; index++) {
    if (index == 0) {
      let tabButton = serviceTab.querySelector(constants.button);
      let serviceId = content.services.servicesList[index].name.toLowerCase().replaceAll(' ', '-')
      tabButton.id = serviceId;
      tabButton.setAttribute(constants.bsDataTargetAttribute, `#${serviceId}${constants.bsPaneIdentifier}`);
      tabButton.setAttribute(constants.bsAriaControl, `#${serviceId}${constants.bsPaneIdentifier}`);
      tabButton.innerHTML = content.services.servicesList[index].name;

      serviceContent.id = `${serviceId}${constants.bsPaneIdentifier}`;
      serviceContent.setAttribute(constants.bsArialLabeledBy, `#${serviceId}${constants.bsTabIdentifier}`);
      serviceContent.innerHTML = content.services.servicesList[index].content;

    } else {
      let newTab = serviceTab.cloneNode(true);
      let tabButton = newTab.querySelector(constants.button);
      let serviceId = content.services.servicesList[index].name.toLowerCase().replaceAll(' ', '-')
      tabButton.id = serviceId;
      tabButton.setAttribute(constants.bsDataTargetAttribute, `#${serviceId}${constants.bsPaneIdentifier}`);
      tabButton.setAttribute(constants.bsAriaControl, `#${serviceId}${constants.bsPaneIdentifier}`);
      tabButton.innerHTML = content.services.servicesList[index].name;
      tabButton.classList.remove(constants.active)
      servicesTabs.appendChild(newTab);

      let newServiceContent = serviceContent.cloneNode(true);
      newServiceContent.id = `${serviceId}${constants.bsPaneIdentifier}`;
      newServiceContent.setAttribute(constants.bsArialLabeledBy, `#${serviceId}${constants.bsTabIdentifier}`);
      newServiceContent.innerHTML = content.services.servicesList[index].content;
      newServiceContent.classList.remove(constants.show);
      newServiceContent.classList.remove(constants.active);

      servicesContent.appendChild(newServiceContent);
    }
  }
}

function populateTeamSection(content) {
  let ourTeamSection = document.querySelector(constants.ourTeamSectionId);
  let ourTeamTitle = ourTeamSection.querySelector(constants.ourTeamTitleId);
  ourTeamTitle.innerHTML = content.team.name;

  let teamMembersComponent = ourTeamSection.querySelector(constants.teamMembersId)
  let teamMember = teamMembersComponent.children[0];

  clearComponents(teamMembersComponent);

  for (let index = 0; index < content.team.teamMembers.length; index++) {
    if (index === 0) {
      let teamMemberImage = teamMember.querySelector(constants.teamMemberImageId);
      teamMemberImage.alt = `${content.team.teamMembers[index].name} - ${content.team.teamMembers[index].position}`
      teamMemberImage.src = content.team.teamMembers[index].imageUrl;
      let teamMemberName = teamMember.querySelector(constants.teamMemberNameId);
      teamMemberName.innerHTML = content.team.teamMembers[index].name;
      teamMemberName.setAttribute(constants.teamBioIdentifier, content.team.teamMembers[index].bio);
      let teamMemberPosition = teamMember.querySelector(constants.teamMemberPositionId);
      teamMemberPosition.innerHTML = content.team.teamMembers[index].position;
    } else {
      let newTeamMember = teamMember.cloneNode(true);
      let teamMemberImage = newTeamMember.querySelector(constants.teamMemberImageId);
      teamMemberImage.alt = `${content.team.teamMembers[index].name} - ${content.team.teamMembers[index].position}`
      teamMemberImage.src = content.team.teamMembers[index].imageUrl;
      let teamMemberName = newTeamMember.querySelector(constants.teamMemberNameId);
      teamMemberName.innerHTML = content.team.teamMembers[index].name;
      teamMemberName.setAttribute(constants.teamBioIdentifier, content.team.teamMembers[index].bio);
      let teamMemberPosition = newTeamMember.querySelector(constants.teamMemberPositionId);
      teamMemberPosition.innerHTML = content.team.teamMembers[index].position;
      teamMembersComponent.appendChild(newTeamMember);
    }
  }
}

function populateTestimonials(content) {
  let testimonialsSection = document.querySelector(constants.testimonialsSectionId);
  let testimonialsTitle = testimonialsSection.querySelector(constants.testimonialsTitleId);
  testimonialsTitle.innerHTML = content.testimonials.name;
  let testimonials = testimonialsSection.querySelector(constants.testimonialsWrapperId);
  let testimonial = testimonials.children[0];

  clearComponents(testimonials);

  for (let index = 0; index < content.testimonials.testimonialsList.length; index++) {
    if (index === 0) {
      let testimonialContent = testimonial.querySelector(constants.testimonialContentId)
      testimonialContent.innerHTML = content.testimonials.testimonialsList[index].testimonial;
      let testimonialCredentials = testimonial.querySelector(constants.testimonialCredentialsId);
      testimonialCredentials.innerHTML = `${content.testimonials.testimonialsList[index].author}, ${content.testimonials.testimonialsList[index].position}`;
      let testimonialDate = testimonial.querySelector(constants.testimonialDateId);
      testimonialDate.innerHTML = content.testimonials.testimonialsList[index].date;
    } else {
      let newTestimonial = testimonial.cloneNode(true);
      let testimonialContent = newTestimonial.querySelector(constants.testimonialContentId)
      testimonialContent.innerHTML = content.testimonials.testimonialsList[index].testimonial;
      let testimonialCredentials = newTestimonial.querySelector(constants.testimonialCredentialsId);
      testimonialCredentials.innerHTML = `${content.testimonials.testimonialsList[index].author}, ${content.testimonials.testimonialsList[index].position}`;
      let testimonialDate = newTestimonial.querySelector(constants.testimonialDateId);
      testimonialDate.innerHTML = content.testimonials.testimonialsList[index].date;
      testimonials.appendChild(newTestimonial);
    }
  }

}

function clearComponents(parentElement) {
  while (parentElement.children.length > 1) {
    parentElement.removeChild(parentElement.lastChild);
  }
}

export function showSpinner() {
  let spinnerElement = document.querySelector(constants.spinnerIdentifier);
  spinnerElement.classList.remove(constants.displayNone);
  spinnerElement.classList.add(constants.displayFlex);
  document.body.classList.add(constants.noScroll);
}

function hideSpinner() {
  let spinnerElement = document.querySelector(constants.spinnerIdentifier);
  spinnerElement.classList.add(constants.displayNone);
  spinnerElement.classList.remove(constants.displayFlex);
  document.body.classList.remove(constants.noScroll);
}

function getModalData(eventTarget) {
  let modalId = eventTarget.getAttribute(constants.bsDataTargetAttribute);
  let targetContentLabel = eventTarget.querySelector(constants.contentLabelDataAttribute);
  let targetContentImage = eventTarget.querySelector(constants.contentImageDataAttribute);
  let targetContentBody = eventTarget.querySelector(constants.contentBodyDataAttribute);
  let targetModal = document.querySelector(modalId);
  let targetModalLabel = targetModal.querySelector(constants.modalLabelDataAttribute);
  let targetModalImage = targetModal.querySelector(constants.modalImageDataAttribute);
  let targetModalBody = targetModal.querySelector(constants.modalBodyDataAttribute);

  if (targetContentLabel) {
    targetModalLabel.innerHTML = modalId === '#ourTeamModal' ? `${targetContentLabel.innerHTML} - ${targetContentBody.innerHTML}` : targetContentLabel.innerHTML;
  }

  if (targetContentImage) {
    targetModalImage.alt = targetContentImage.alt;
    targetModalImage.src = targetContentImage.src;
  }

  if (targetContentBody) {
    targetModalBody.innerHTML = modalId === '#ourTeamModal' ? targetContentLabel.getAttribute(constants.teamBioIdentifier) : targetContentBody.innerHTML;
  }
}
