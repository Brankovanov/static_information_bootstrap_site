import { constants } from './constants.js'

window.getModalData = getModalData;
export function generateTemplate(chosenLanguage, content) {
  populateHeader(content);
  populateSideNavigation(content);
  populateLanguageSelect(chosenLanguage, content);
  populateSlider(content);
  populateAboutUs(content);
  populateProducts(content);
  populateServices(content);
  populateTeamSection(content);
  populateTestimonials(content);
  populateContacts(content);
  populateFooter(content);
  hideSpinner();
}

//Navbar
function populateHeader(content) {
  let title = document.getElementsByTagName(constants.titleId);
  title[0].innerHTML = content.header.companyName;
  let logoElement = document.getElementById(constants.logoId);
  logoElement.src = content.header.logoLink;
  logoElement.alt = content.header.companyName;
  let metaTag = document.querySelector(constants.metaTagId)
  metaTag.content = content.header.companyName;
}

//Side navigation
function populateSideNavigation(content) {
  let sideNavigation = document.querySelector(constants.sideNavigationId);
  let navigationItemList = sideNavigation.querySelector(constants.navItemId);
  clearComponents(navigationItemList);
  let navigationItem = navigationItemList.children[0];
  let navigationLink = navigationItem.children[0];
  navigationLink.href = constants.aboutUsNavigationId;
  navigationLink.innerHTML = content.aboutUs.name.toUpperCase();

  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.productsNavigationId, content.products.name.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.servicesNavigationId, content.services.name.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.teamNavigationId, content.team.name.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.testimonialsNavigationId, content.testimonials.name.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.contactsNavigationId, content.contacts.name.toUpperCase());
}

function appendNavigationLink(navigationItemList, navigationElement, navigationId, sectionName) {
  navigationElement.children[0].href = navigationId;
  navigationElement.children[0].innerHTML = sectionName;
  navigationItemList.appendChild(navigationElement);
}

function populateLanguageSelect(chosenLanguage, content) {
  let languageSelect = document.querySelector(constants.languageSelectId);
  let firstOption = languageSelect.children[0];
  firstOption.value = constants.bulgarianLanguage;
  firstOption.innerHTML = content.languages.bg;

  let secondOption = languageSelect.children[1];
  secondOption.value = constants.englishLanguage;
  secondOption.innerHTML = content.languages.en;

  let thirdOption = languageSelect.children[2];
  thirdOption.value = constants.germanLanguage;
  thirdOption.innerHTML = content.languages.de;

  for (let index = 0; index < languageSelect.children.length; index++) {
    let option = languageSelect.children[index];

    if (option.value === chosenLanguage) {
      languageSelect.selectedIndex = index;
      break;
    }
  }
}

//Slider
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

//About us
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

//Products
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

//Services
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

//Testimonials
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

//Contacts
function populateContacts(content) {
  let contactSection = document.querySelector(constants.contactsSectionId);
  let contactTitle = contactSection.querySelector(constants.contactsSectionTitleId);
  contactTitle.innerHTML = content.contacts.name;
  let nameInput = contactSection.querySelector(constants.inputName);
  nameInput.children[0].placeholder = content.contacts.fields[0];
  nameInput.children[1].innerHTML = content.contacts.fields[0];
  let emailInput = contactSection.querySelector(constants.inputEmail);
  emailInput.children[0].placeholder = content.contacts.fields[1];
  emailInput.children[1].innerHTML = content.contacts.fields[1];
  let phoneInput = contactSection.querySelector(constants.inputPhone);
  phoneInput.children[0].placeholder = content.contacts.fields[2];
  phoneInput.children[1].innerHTML = content.contacts.fields[2];
  let selectInput = contactSection.querySelector(constants.inputSelect);
  let selectElement = selectInput.children[0];
  let messageInput = contactSection.querySelector(constants.inputTextArea);
  messageInput.children[0].placeholder = content.contacts.fields[4];
  messageInput.children[1].innerHTML = content.contacts.fields[4];

  for (let index = 0; index < content.contacts.topics.length; index++) {
    selectElement.children[index].value = content.contacts.topics[index];
    selectElement.children[index].innerHTML = content.contacts.topics[index];
  }

  selectInput.children[1].innerHTML = content.contacts.fields[3];
  let phoneNumber = contactSection.querySelector(constants.phoneNumber);
  phoneNumber.children[0].innerHTML = content.contacts.phoneTitle;
  phoneNumber.children[1].innerHTML = content.contacts.phoneContent;
  phoneNumber.children[1].href = `${constants.phoneLinkPrefix}${content.contacts.phoneContent}`;
  let emailAddress = contactSection.querySelector(constants.emailAddress);
  emailAddress.children[0].innerHTML = content.contacts.emailTitle;
  emailAddress.children[1].innerHTML = content.contacts.emailContent;
  emailAddress.children[1].href = `${constants.mailLinkPrefix}${content.contacts.mailContent}`;
  let address = contactSection.querySelector(constants.address);
  address.children[0].innerHTML = content.contacts.addressTitle;
  address.children[1].innerHTML = content.contacts.addressContent;
  address.children[1].href = content.contacts.addressCoordinates;
  let submitButton = contactSection.querySelector(constants.sendButtonId);
  submitButton.innerHTML = content.contacts.buttonContent;
}

//Footer
function populateFooter(content) {
  let currentYear = new Date().getFullYear();
  let footerContent = content.footer.content;

  if (currentYear !== constants.yearCreated) {
    footerContent = footerContent.concat(`<span>${constants.yearCreated} - ${currentYear}</span>`);
  } else {
    footerContent = footerContent.concat(`<span>${constants.yearCreated.toString()}</span>`);
  }

  let footerElement = document.querySelector(constants.footerContentId);
  footerElement.innerHTML = footerContent;
}

function clearComponents(parentElement) {
  while (parentElement.children.length > 1) {
    parentElement.removeChild(parentElement.lastChild);
  }
}

//Spinner
export function showSpinner() {
  let spinnerElement = document.querySelector(constants.spinnerIdentifier);
  spinnerElement.classList.remove(constants.displayNone);
  spinnerElement.classList.add(constants.displayFlex);
  document.body.classList.add(constants.noScroll);
}

function hideSpinner() {
  setTimeout(() => {
    let spinnerElement = document.querySelector(constants.spinnerIdentifier);
    spinnerElement.classList.add(constants.displayNone);
    spinnerElement.classList.remove(constants.displayFlex);
    document.body.classList.remove(constants.noScroll);
  }, 100)
}

//Modals
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
