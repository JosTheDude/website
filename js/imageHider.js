document.addEventListener('DOMContentLoaded', () => {
  const mobileTapArea = document.querySelector('.mobile-tap-area');
  const toggleMobileFirst = document.querySelectorAll('.toggle-mobile-first');
  const toggleMobileSecond = document.querySelectorAll('.toggle-mobile-second');
  const bgPhoto = document.querySelector('.bg-photo');
  const hoverIndication = document.querySelector('.hover-indication');

  const toggleDisplay = (elements) => {
    elements.forEach((element) => {
      const isHidden = window.getComputedStyle(element).display === 'none';
      element.style.display = isHidden ? '' : 'none';
    });
  };

  const setVisibility = (shouldHide) => {
    if (!bgPhoto || !hoverIndication) {
      return;
    }
    bgPhoto.style.display = shouldHide ? 'none' : '';
    hoverIndication.style.display = shouldHide ? 'none' : '';
  };

  if (mobileTapArea) {
    mobileTapArea.addEventListener('click', () => {
      toggleDisplay(toggleMobileFirst);
      toggleDisplay(toggleMobileSecond);
    });
  }

  setVisibility(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setVisibility(window.innerWidth < 728);
  });
});
