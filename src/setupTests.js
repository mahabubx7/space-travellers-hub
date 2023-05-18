// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// handler
const handlers = [
  // for rocket-api
  rest.get('https://api.spacexdata.com/v3/rockets', (req, res, ctx) => res(ctx.status(200), ctx.json([
    {
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'rocket',
      flickr_images: ['img_link', ''],
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
    },
    {
      rocket_id: 'falcon2',
      rocket_name: 'Falcon 2',
      rocket_type: 'rocket',
      flickr_images: ['img_link', ''],
      description: 'The Falcon 2 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
    },
  ]), ctx.delay(30))),
];

// server
const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());
