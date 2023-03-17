const cards = [
  {
    title: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: '/Images/Snapshoot Portfolio.png',
    subtitle: [
      {
        stackName: 'CANOPY',
      },
      {
        stack: 'Backend Dev',
      },
      {
        stack: '2015',
      },
    ],
    technologies: [
      {
        name: 'Html',
      },
      {
        name: 'Css',
      },
      {
        name: 'Javascript',
      },
    ],
  },
  {
    title: 'Multi-Post Stories',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './Images/Snapshoot Portfolio (2).png',
    subtitle: [
      {
        stackName: 'CANOPY',
      },
      {
        stack: 'Backend Dev',
      },
      {
        stack: '2015',
      },
    ],
    technologies: [
      {
        name: 'Html',
      },
      {
        name: 'Css',
      },
      {
        name: 'Javascript',
      },
    ],
  },
  {
    title: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './Images/Snapshoot Portfolio (1).png',
    subtitle: [
      {
        stackName: 'CANOPY',
      },
      {
        stack: 'Backend Dev',
      },
      {
        stack: '2015',
      },
    ],
    technologies: [
      {
        name: 'Html',
      },
      {
        name: 'Css',
      },
      {
        name: 'Javascript',
      },
    ],
  },
  {
    title: 'Multi-Post Stories',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './Images/Snapshoot Portfolio (3).png',
    subtitle: [
      {
        stackName: 'CANOPY',
      },
      {
        stack: 'Backend Dev',
      },
      {
        stack: '2015',
      },
    ],
    technologies: [
      {
        name: 'Html',
      },
      {
        name: 'Css',
      },
      {
        name: 'Javascript',
      },
    ],
  },
];

cards.forEach((card) => {
  const main = document.querySelector('#main');
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  main.append(gridItem);
  const img = document.createElement('img');
  img.classList.add('snap');
  gridItem.append(img);
  img.src = card.image;
  img.alt = 'img';
  const title = document.createElement('h1');
  title.classList.add('tonic');
  gridItem.append(title);
  title.innerText = card.title;
  const container = document.createElement('div');
  container.classList.add('container');
  gridItem.append(container);
  const canopy = document.createElement('div');
  canopy.classList.add('canopy');
  container.append(canopy);
  card.subtitle.forEach((intro) => {
    const introtext = document.createElement('p');
    canopy.append(introtext);
    introtext.textContent = intro.stackName;
  });

  const stackItem = document.createElement('div');
  stackItem.classList.add('details');
  container.append(stackItem);
  card.subtitle.forEach((stack) => {
    const seperator = document.createElement('img');
    stackItem.append(seperator);
    seperator.src = '/Images/Counter.png';
    seperator.alt = 'img';
    const stacktext = document.createElement('p');
    stackItem.append(stacktext);
    stacktext.textContent = stack.stack;
  });

  const content = document.createElement('div');
  content.classList.add('content');
  gridItem.append(content);
  const details = document.createElement('p');
  content.append(details);
  details.innerText = card.description;
  const technologies = document.createElement('ul');
  technologies.classList.add('link');
  gridItem.append(technologies);
  card.technologies.forEach((tech) => {
    const techli = document.createElement('li');
    technologies.append(techli);
    const techanchor = document.createElement('a');
    techli.append(techanchor);
    techanchor.textContent = tech.name;
  });

  const button = document.createElement('button');
  button.classList.add('button');
  gridItem.append(button);
  const modal = document.createElement('div');
  modal.classList.add('modal-Container');
  gridItem.append(modal);
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  const anchorDetails = document.createElement('a');
  button.append(anchorDetails);
  anchorDetails.textContent = 'See Project';
  const closeButton = document.createElement('img');
  closeButton.classList.add('close');
  closeButton.alt = 'closepop img';
  closeButton.src = 'Images/cross.png';
  modal.append(closeButton);
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const titlePop = document.createElement('h1');
  titlePop.classList.add('tonicPop');
  modal.append(titlePop);
  titlePop.innerText = card.title;
  const containerPop = document.createElement('div');
  containerPop.classList.add('containerPop');
  modal.append(containerPop);
  const canopyPop = document.createElement('div');
  canopyPop.classList.add('canopy');
  containerPop.append(canopyPop);
  card.subtitle.forEach((introPop) => {
    const introtextPop = document.createElement('p');
    canopyPop.append(introtextPop);
    introtextPop.textContent = introPop.stackName;
  });

  const stackItemPop = document.createElement('div');
  stackItemPop.classList.add('details');
  containerPop.append(stackItemPop);
  card.subtitle.forEach((stackPop) => {
    const seperatorPop = document.createElement('img');
    stackItemPop.append(seperatorPop);
    seperatorPop.src = '/Images/Counter.png';
    seperatorPop.alt = 'img';
    const stacktextPop = document.createElement('p');
    stackItemPop.append(stacktextPop);
    stacktextPop.textContent = stackPop.stack;
  });

  const imgPop = document.createElement('img');
  imgPop.classList.add('snapPop');
  modal.append(imgPop);
  imgPop.src = card.image;
  imgPop.alt = 'img';

  const Lorem = document.createElement('p');
  imgPop.classList.add('Lorem');
  modal.append(Lorem);
  Lorem.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

//   const liveButton = document.createElement('button');
//   modal.append(liveButton);
//   liveButton.classList.add('button');
//   const liveAnchor = document.createElement('a');
//   liveButton.append(liveAnchor);
//   liveAnchor.textContent = 'See Live';

//   const livecontent = document.createElement('button');
//   modal.append(livecontent);
//   livecontent.classList.add('button');
//   const livecontentAnchor = document.createElement('a');
//   livecontent.append(livecontentAnchor);
//   livecontentAnchor.textContent = 'Live content';
});
// Popup
// cards.forEach((card) => {
// }
// const modal = document.getElementById('myModal');

// // Get the button that opens the modal
// const btn = document.getElementById('myBtn');

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName('close')[0];

// // Get the <a> element that closes the modal when the links are clicked
// const linkPortfolio = document.getElementsByClassName('link-x')[0];
// const linkAbout = document.getElementsByClassName('link-1')[0];
// const linkContact = document.getElementsByClassName('link-2')[0];

// // When the user clicks the button, open the modal
// btn.onclick = function btn() {
//   modal.style.display = 'block';
//   modal.style.backgroundColor = 'none';
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function span() {
//   modal.style.display = 'none';
// };

// // When the user clicks on porfolio link, close the modal
// linkPortfolio.onclick = function linkPortfolio() {
//   modal.style.display = 'none';
// };

// // When the user clicks on about link, close the modal
// linkAbout.onclick = function linkAbout() {
//   modal.style.display = 'none';
// };

// // When the user clicks on contact link, close the modal
// linkContact.onclick = function linkContact() {
//   modal.style.display = 'none';
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function window(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// };