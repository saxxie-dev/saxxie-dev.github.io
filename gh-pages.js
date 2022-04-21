import { publish } from 'gh-pages';

publish(
  './build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/saxxie-dev/saxxie-dev.github.io.git',
    user: {
      name: 'saxxie-dev',
      email: 'c@saxxie.dev'
    },
    dotfiles: true
  },
  (err) => {
    if (err) {
      console.log('Ran into an issue - ' + err)
    } else {
      console.log('Deploy Complete!');
    }
  }
);