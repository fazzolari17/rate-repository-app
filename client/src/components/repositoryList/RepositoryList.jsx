import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';
import * as React from 'react';

const RepositoryList = () => {
  const [listOrder, setListOrder] = React.useState('Set List Order');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchDebounce] = useDebounce(searchQuery, 500);

  const setRepoListOrder = (list, searchQuery) => {
    switch (list) {
      case 'Latest Repositories':
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: searchDebounce };
        break;
      case 'Highest Rated Repositories':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', searchKeyword: searchDebounce };
        break;
      case 'Lowest Rated Repositories':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', searchKeyword: searchDebounce };
        break;
      default:
        return { orderBy: 'CREATED_AT', orderDirection: 'ASC', searchKeyword: searchDebounce };
    }
  };

  const { repositories, refetch, loading, fetchMore } = useRepositories(setRepoListOrder(listOrder, searchQuery.toLowerCase()));

  const onEndReach = () => fetchMore();

  if (!repositories) refetch();

  React.useEffect(() => {
        refetch()
  }, [ listOrder, repositories, searchDebounce, fetchMore ])

  return <RepositoryListContainer
    repositories={repositories}
    listOrder={listOrder}
    setListOrder={setListOrder}
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;
