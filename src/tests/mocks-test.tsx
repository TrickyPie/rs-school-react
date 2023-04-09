import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';

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
    }
    return res(
      ctx.status(200),
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
          title: 'Snake Laurentii',
          description:
            'The Snake Plant is a succulent plant characterized by its sword-like leaves with vibrant yellow edges. It is popular for its easy-going nature—it can tolerate drought and lower light—and its air-purifying capabilities.',
          petFriendly: false,
          easyCare: true,
          bright:
            'Thrives in medium to bright indirect light, but can tolerate low indirect light.',
          water:
            'Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
        },
        {
          id: 3,
          image: [
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/zamioculcas1.jpg',
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/zamioculcas2.jpg',
          ],
          title: 'Zamioculcas',
          description:
            'The ZZ Plant is characterized by its waxy green leaves above the surface of its potting mix, and its large potato-like rhizomes underneath. These rhizomes store water, making the ZZ a hardy, drought-tolerant houseplant that only needs water every few weeks.',
          petFriendly: false,
          easyCare: true,
          bright:
            'Thrives in medium to bright indirect light, but can tolerate low indirect light. Not suited for intense, direct sun.',
          water:
            'Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
        },
        {
          id: 4,
          image: [
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/calathea-rattlesnake1.jpg',
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/calathea-rattlesnake2.jpg',
          ],
          title: 'Calathea Rattlesnake',
          description:
            'The Calathea Rattlesnake is known for its long, wavy green leaves with a brushstroke pattern resembling reptile skin. It raises and lowers these leaves from day to night, a phenomenon called nyctinasty and the source behind its nickname prayer plant.',
          petFriendly: true,
          easyCare: true,
          bright:
            'Thrives in medium to bright indirect light, but can tolerate low indirect light.',
          water:
            'Water every 1-2 weeks, allowing soil to dry out half way down between waterings. Expect to water more often in brighter light and less often in lower light. This plant can benefit from extra humidity. ',
        },
        {
          id: 5,
          image: [
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/parlor-palm1.jpg',
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/parlor-palm2.jpg',
          ],
          title: 'Parlor Palm',
          description:
            'The Parlor Palm is a favorite easy-care palm with tropical fronds known for its air-purifying qualities.',
          petFriendly: true,
          easyCare: true,
          bright:
            'Thrives in medium to bright indirect light, but can tolerate low indirect light. Not suited for intense, direct sun.',
          water:
            'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. This plant can benefit from extra humidity.',
        },
        {
          id: 6,
          image: [
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/monstera-deliciosa1.jpg',
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/monstera-deliciosa2.jpg',
          ],
          title: 'Monstera Deliciosa',
          description:
            'Nicknamed the “swiss cheese plant”, the quirky Monstera deliciosa is famous for its natural leaf holes. These holes are theorized to maximize sun fleck capture and develop over time as the plant matures.',
          petFriendly: false,
          easyCare: true,
          bright: 'Thrives in bright indirect to medium light.',
          water:
            'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Monsteras can benefit from filtered water or leaving water out overnight before using.',
        },
        {
          id: 7,
          image: [
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/bird-of-paradise1.jpg',
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/bird-of-paradise2.jpg',
          ],
          title: 'Bird of Paradise',
          description:
            "With its broad vibrant green leaves, the Bird of Paradise brings a touch of the tropics to any room. It's named after its unique flowers, which resemble brightly colored birds in flight. The Bird of Paradise thrives in warmer conditions with plenty of sunlight.",
          petFriendly: false,
          easyCare: false,
          bright: 'Thrives in bright indirect to direct light.',
          water:
            'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. This plant can benefit from extra humidity. Bird of Paradise can be sensitive to hard tap water.',
        },
        {
          id: 8,
          image: [
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/ficus-lyrata1.jpg',
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/ficus-lyrata2.jpg',
          ],
          title: 'Fiddle Leaf Fig Tree',
          description:
            'The Fiddle Leaf Fig, or Ficus lyrata, is famous for its broad green leaves with prominent veining. It is sometimes described as “fickle” but will thrive in an environment with stable temps and bright light.',
          petFriendly: false,
          easyCare: false,
          bright:
            'Thrives in bright indirect light to full sun. Can benefit from a few hours of direct sun.',
          water:
            'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
        },
        {
          id: 9,
          image: [
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/olive-tree1.jpg',
            'https://raw.githubusercontent.com/TrickyPie/react-api/main/images/olive-tree2.jpg',
          ],
          title: 'Olive Tree',
          description:
            'With their small, silvery, gray-green leaves, olive trees (this specific variety is the Common Olive Tree) make beautiful houseplants. These Mediterranean plants need a lot of bright, direct sunlight. South and west facing windows are ideal.',
          petFriendly: true,
          easyCare: false,
          bright:
            'Thrives in bright light to full sun conditions. Not suited for low light areas. South & West facing windows ideal, and consider grow lights in Fall/ Winter.',
          water:
            'Water every 1 week, allowing soil to dry out halfway down between waterings. Tolerates normal room humidity levels.',
        },
      ])
    );
  }),
];
