import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Request } from 'node-fetch';

export const serverData = [
  rest.get('https://my-json-server.typicode.com/TrickyPie/react-api/items/', (req, res, ctx) => {
    if (req.url.searchParams.get('id') === '1') {
      return res(
        ctx.status(200),
        ctx.json({
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
        })
      );
    }
  }),
];
