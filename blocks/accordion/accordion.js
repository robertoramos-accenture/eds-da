function decorateAccordion(el) {
  const titles = el.querySelectorAll(':scope hr+p');
  titles.forEach((title) => {
    // Add a class to the title container
    title.classList.add('item-title');
    // Add a class to the content
    title.nextElementSibling.classList.add('item-content');
    // Add a click handler to open the content
    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });

  // Remove the hr
  el.querySelectorAll(':scope hr').forEach((node) => node.remove());
}

const els = document.querySelectorAll('.accordion');
els.forEach((el) => {
  decorateAccordion(el);
});
