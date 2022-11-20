import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import * as React from 'react';

const RepositoryList = () => {
  const [listOrder, setListOrder] = React.useState();

  const setRepoListOrder = (list) => {
    switch (list) {
      case 'Latest Repositories':
        // refetch({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
        break;
      case 'Highest Rated Repositories':
        // refetch({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' });
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
        break;
      case 'Lowest Rated Repositories':
        // refetch({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' });
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
        break;
      default:
        return { orderBy: 'CREATED_AT', orderDirection: 'ASC' };
    }
    // if (list === 'Latest Repositories') {
    //   return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
    // } else if (list === 'Highest Rated Repositories') {
    //   return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
    // } else if (list === 'Lowest Rated Repositories') {
    //   return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
    // } else {
    //   return { orderBy: 'CREATED_AT', orderDirection: 'ASC' };
    // }
  };

  const { repositories, refetch, loading } = useRepositories(setRepoListOrder(listOrder));

  if (!repositories) {
    refetch();
  }

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        refetch()
      }, 2000);
    }
    refetch({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
    console.log("LOADING", loading)
  }, [ listOrder, repositories ])

  return <RepositoryListContainer repositories={repositories} listOrder={listOrder} setListOrder={setListOrder} />;
};

export default RepositoryList;
