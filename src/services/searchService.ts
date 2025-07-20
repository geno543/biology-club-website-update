import { SearchResult } from '@/context/SearchContext';

// Mock data for demonstration - replace with real data or API calls
const searchData: SearchResult[] = [
  {
    title: 'Biology League',
    description: 'Join our competitive biology league and showcase your knowledge!',
    url: '/bioleague',
    type: 'page',
  },
  {
    title: 'Research Projects',
    description: 'Explore our ongoing research projects in various fields of biology.',
    url: '/research',
    type: 'page',
  },
  {
    title: 'Latest Magazine',
    description: 'Read our latest biology magazine featuring cutting-edge research.',
    url: '/magazines',
    type: 'article',
  },
  {
    title: 'Meet the Board',
    description: 'Get to know our board members and their contributions.',
    url: '/board',
    type: 'page',
  },
  {
    title: 'Upcoming Events',
    description: 'Check out our upcoming biology events and workshops.',
    url: '/events',
    type: 'event',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team for collaborations and inquiries.',
    url: '/contact',
    type: 'page',
  },
];

export async function searchContent(query: string): Promise<SearchResult[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  if (!query.trim()) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  
  return searchData.filter(item => 
    item.title.toLowerCase().includes(normalizedQuery) ||
    item.description.toLowerCase().includes(normalizedQuery)
  );
}
