import Item from '../Item';
import ItemSeparator from '../ItemSeparator';


const RepositoryInfo = ({ data }) => {
  const show = data.show;
  const item = data.repository;

  return (
    <>
    <Item data={{ item, show }} />
    <ItemSeparator />
    </>
  );

};

export default RepositoryInfo;