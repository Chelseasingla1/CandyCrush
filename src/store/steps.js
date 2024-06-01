// // steps.js
// const steps = [
//   {
//     id: 'welcome',
//     attachTo: { element: '.game-board', on: 'top' },
//     title: 'Welcome',
//     text: 'Welcome to the Candy Crush game! Let us guide you on how to play.',
//     buttons: [
//       {
//         text: 'Next',
//         action: tour => tour.next(),
//       },
//     ],
//   },
//   {
//     id: 'score',
//     attachTo: { element: '.score-display', on: 'bottom' },
//     title: 'Score',
//     text: 'This is your current score. Try to make matches to increase your score!',
//     buttons: [
//       {
//         text: 'Back',
//         action: tour => tour.back(),
//       },
//       {
//         text: 'Next',
//         action: tour => tour.next(),
//       },
//     ],
//   },
//   {
//     id: 'board',
//     attachTo: { element: '.game-board', on: 'top' },
//     title: 'Game Board',
//     text: 'This is the game board. Swap adjacent candies to make matches of three or more.',
//     buttons: [
//       {
//         text: 'Back',
//         action: tour => tour.back(),
//       },
//       {
//         text: 'Finish',
//         action: tour => tour.complete(),
//       },
//     ],
//   },
// ];

// export default steps;

const steps = [
  {
    id: 'intro',
    attachTo: { element: '.first-element', on: 'bottom' },
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: 'Welcome to React-Shepherd!',
    text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  // ...
];
