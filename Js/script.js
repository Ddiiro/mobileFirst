const Mobilecards = [
  {
    title: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: '/Images/Snapshoot Portfolio.png',
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

Mobilecards.forEach((card) => {
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

  // Modal set up
  const anchorDetails = document.createElement('a');
  button.append(anchorDetails);
  anchorDetails.textContent = 'See Project';

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('hidden');
  main.append(modal);

  const h1 = document.createElement('h1');
  modal.append(h1);
  h1.innerHTML = 'hey';
});