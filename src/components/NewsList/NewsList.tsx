import { NewsItem } from '../NewsItem';

/**
 * Компонент NewsList: отвечает за список новостей.
 */

export const NewsList: React.FC = () => {
  const newsItems = [
    { icon: '🌐', text: 'Какие то мировые новости', link: '#' },
    { icon: '🌐', text: 'Ещё какие то мировые новости', link: '#' },
    { icon: '🌐', text: 'Неинтересные местные новости', link: '#' },
    { icon: '🌐', text: 'Интересные местные новости', link: '#' },
    { icon: '🌐', text: 'Какая то чепуха', link: '#' },
  ];

  return (
    <div className="news__list">
      {newsItems.map((item, index) => (
        <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};
