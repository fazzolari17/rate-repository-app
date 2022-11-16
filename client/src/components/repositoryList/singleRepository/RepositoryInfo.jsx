import Item from '../Item';
import ItemSeparator from '../ItemSeparator';


const RepositoryInfo = ({ data, onClick }) => {
  const show = data.show;
  const item = data.repository;

  return (
    <>
      <Item data={{ item, show }} onClick={onClick} />
      <ItemSeparator />
    </>
  );

};

export default RepositoryInfo;