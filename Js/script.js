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
  main.classList.add('grid-container');
  const gridItem = document.createElement('div');
  gridItem.classList.add('card');
  main.append(gridItem);

  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.classList.add('p-2');
  gridItem.append(img);
  img.src = card.image;
  img.alt = 'img';

  const container = document.createElement('div');
  container.classList.add('card-body');
  gridItem.append(container);

  const title = document.createElement('h1');
  title.classList.add('card-title"');
  container.append(title);
  title.innerText = card.title;

  const subtext = document.createElement('div');
  subtext.classList.add('subtext');
  subtext.classList.add('d-flex');
  subtext.classList.add('flex-row');
  container.append(subtext);

  const canopy = document.createElement('p');
  canopy.classList.add('p-2');
  subtext.append(canopy);
  canopy.innerText = 'CANOPY';

  const dot = document.createElement('img');
  subtext.append(dot);
  dot.classList.add('seperator');
  dot.src = '/Images/Counter.png';
  dot.alt = 'img';

  const backend = document.createElement('p');
  canopy.classList.add('p-2');
  subtext.append(backend);
  backend.innerText = 'Backend';

  const dot2 = document.createElement('img');
  subtext.append(dot2);
  dot.classList.add('seperator');
  dot2.src = '/Images/Counter.png';
  dot2.alt = 'img';

  const year = document.createElement('p');
  year.classList.add('p-2');
  subtext.append(year);
  year.innerText = '2015';

  const content = document.createElement('div');
  content.classList.add('content');
  gridItem.append(content);
  const detail = document.createElement('p');
  content.append(detail);
  detail.innerText = card.description;
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
  const exit = document.createElement('div');
  exit.classList.add('exit');
  modal.append(exit);
  // const closeButton = document.createElement('img');
  // closeButton.classList.add('closepop');
  // closeButton.alt = 'closepop img';
  // closeButton.src = 'Images/cross.png';
  // exit.append(closeButton);
  // closeButton.addEventListener('click', () => {
  //   modal.style.display = 'none';
  // });

  // const titlePop = document.createElement('h1');
  // titlePop.classList.add('tonicPop');
  // modal.append(titlePop);
  // titlePop.innerText = card.title;

  // const modalsubtext = document.createElement('div');
  // modalsubtext.classList.add('modalsubtext');
  // modal.append(modalsubtext);

  // const modalsubcanopy = document.createElement('div');
  // modalsubcanopy.classList.add('modalsubcanopy');
  // modalsubtext.append(modalsubcanopy);

  // const canopytext = document.createElement('p');
  // canopytext.classList.add('canopytext');
  // modalsubcanopy.append(canopytext);
  // canopytext.innerText = 'CANOPY';

  // const modaldetails = document.createElement('div');
  // modaldetails.classList.add('modaldetails');
  // modalsubtext.append(modaldetails);

  // const backendtext = document.createElement('div');
  // backendtext.classList.add('backendtext');
  // modaldetails.append(backendtext);

  // const backendp = document.createElement('div');
  // backendtext.append(backendp);
  // backendp.classList.add('backendp');

  // const seperator = document.createElement('img');
  // backendp.append(seperator);
  // seperator.src = '/Images/Counter.png';
  // seperator.alt = 'img';

  // const p = document.createElement('p');
  // backendp.append(p);
  // backendp.classList.add('backendp');
  // p.innerText = 'Backend';

  // const seperato1 = document.createElement('img');
  // backendp.append(seperato1);
  // seperato1.classList.add('seperator');
  // seperato1.src = '/Images/Counter.png';
  // seperato1.alt = 'img';

  // const p1 = document.createElement('p');
  // backendp.append(p1);
  // p1.classList.add('backendp-1');
  // p1.innerText = '2015';

  // const imgPop = document.createElement('img');
  // imgPop.classList.add('snapPop');
  // modal.append(imgPop);
  // imgPop.src = card.image;
  // imgPop.alt = 'img';

  // const Lorem = document.createElement('p');
  // imgPop.classList.add('Lorem');
  // modal.append(Lorem);
  // Lorem.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

  // const modalButton = document.createElement('div');
  // modalButton.classList.add('modalButton');
  // modal.append(modalButton);

  // const modalButton1 = document.createElement('button');
  // modalButton1.classList.add('button');
  // modalButton.append(modalButton1);

  // const modalButton1a = document.createElement('a');
  // modalButton1a.classList.add('a');
  // modalButton1.append(modalButton1a);
  // modalButton1a.innerText = 'See live';

  // const modalButton1img = document.createElement('img');
  // modalButton1img.classList.add('img');
  // modalButton1a.append(modalButton1img);
  // modalButton1img.src = 'See live';

  // const modalButton2 = document.createElement('button');
  // modalButton2.classList.add('button');
  // modalButton.append(modalButton2);

  // const modalButton2a = document.createElement('a');
  // modalButton2a.classList.add('a');
  // modalButton2.append(modalButton2a);
  // modalButton2a.innerText = 'See live';

  // const modalButton2img = document.createElement('img');
  // modalButton2img.classList.add('img');
  // modalButton2a.append(modalButton2img);
  // modalButton2img.src = 'See live';
});