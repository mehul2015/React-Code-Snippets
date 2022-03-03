import React from 'react';
import { faker } from '@faker-js/faker';

import Card from './components/Card';
import Comment from './components/Comment';

function App() {
  return (
    <div class='ui comments'>
      <Card>
        <Comment
          image={faker.image.avatar()}
          name='Name 1'
          time='12:30'
          body='Good Blog'
        />
      </Card>
      <Card>
        <Comment
          image={faker.image.avatar()}
          name='Name 2'
          time='11:30'
          body='Gooder Blog'
        />
      </Card>
      <Card>
        <Comment
          image={faker.image.avatar()}
          name='Name 3'
          time='10:30'
          body='Goodest Blog'
        />
      </Card>
      <Card>
        <Comment
          image={faker.image.avatar()}
          name='Name 4'
          time='9:30'
          body='Bad'
        />
      </Card>
    </div>
  );
}

export default App;
