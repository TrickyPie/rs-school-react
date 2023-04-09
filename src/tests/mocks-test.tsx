import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const serverData = [
  rest.get('https://my-json-server.typicode.com/TrickyPie/react-api/items/', (req, res, ctx) => {
    const searchTerm = req.url.searchParams.get('title_like');
    if (searchTerm === 'plant') {
      return res(
        ctx.json([
          {
            id: 1,
            image: [
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/money-tree-plant1.jpg',
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/money-tree-plant2.jpg',
            ],
            title: 'Money Tree Plant',
            description:
              'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk.',
            petFriendly: true,
            easyCare: true,
            bright: 'Thrives in bright indirect to medium light.',
            water:
              'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
          },
          {
            id: 2,
            image: [
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/snake-laurentii1.jpg',
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/snake-laurentii2.jpg',
            ],
            title: 'Snake Plant Laurentii',
            description:
              'The Snake Plant Laurentii is a succulent plant characterized by its upright, sword-shaped leaves with vibrant yellow edges. It is incredibly low-maintenance and can survive in a variety of light conditions, making it perfect for beginners and those who may not have the greenest of thumbs.',
            petFriendly: false,
            easyCare: true,
            bright:
              'Thrives in medium to bright indirect light, but can tolerate low indirect light as well.',
            water:
              'Water every 2-6 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
          },
        ])
      );
    } else {
      return res(ctx.status(404), ctx.json({ error: 'Not found' }));
    }
  }),
];
