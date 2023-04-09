import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';
import { setupServer } from 'msw/node';

export const testTitle = 'mon';
export const testId = '1';

export const serverData: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get('https://my-json-server.typicode.com/TrickyPie/react-api/items/', (req, res, ctx) => {
    if (req.url.searchParams.get('title_like') === testTitle) {
      return res(
        ctx.json([
          {
            id: 1,
            image: [
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/money-tree-plant1.jpg',
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/money-tree-plant2.jpg',
            ],
            title: 'Money Tree Plant',
            petFriendly: true,
            easyCare: true,
          },
          {
            id: 6,
            image: [
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/monstera-deliciosa1.jpg',
              'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/monstera-deliciosa2.jpg',
            ],
            title: 'Monstera Deliciosa',
            petFriendly: false,
            easyCare: true,
          },
        ])
      );
    } else if (req.url.searchParams.get('id') === testId) {
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
    } else {
      return res(ctx.status(404), ctx.json({ error: 'Not found' }));
    }
  }),
];
