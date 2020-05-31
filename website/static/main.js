const specificTypes = [
  'all',
  'slides',
  'video',
  'book',
]
const allTypes = [
  ...specificTypes,
  'other'
]
const filter = (event, type) => {
  const isActive = event.target.classList.contains('active');

  showAll();
  if (!isActive) {
    hideAll()
    event.target.classList.add('active');
    if (type !== 'other') {
      document.querySelectorAll(`.${type}`).forEach(item => item.classList.remove('hide'))
    } else {
      document.querySelectorAll(`.card${specificTypes.map(type => `:not(.${type})`).join('')}`).forEach(item => item.classList.remove('hide'))
    }
  }
}

const showAll = () => {
  allTypes.forEach(type => {
    document.querySelectorAll(`.${type}`).forEach(item => item.classList.remove('hide'))
    document.querySelectorAll(`.filter-${type}`).forEach(filterItem => filterItem.classList.remove('active'))
  })
}

const hideAll = () => {
  allTypes.forEach(type => {
    document.querySelectorAll(`.container a.card`).forEach(item => item.classList.add('hide'))
  })
}


allTypes.forEach(type => {
  document.querySelectorAll(`.filter-${type}`).forEach(filterItem => filterItem.addEventListener('click', (event) => filter(event, type)))
});

document.querySelector(`.show-all`).addEventListener('click', showAll)