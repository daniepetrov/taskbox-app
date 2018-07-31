import { configure } from '@storybook/react';
import '../src/index.css';

const filesWithStories = require.context('./../src', true, /\.stories\.js$/);

function loadStories() {
    filesWithStories.keys().forEach(filename => filesWithStories(filename));
}

configure(loadStories, module);