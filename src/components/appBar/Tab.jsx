import Text from '../Text';

const Tab = ({ label }) => {
  return (
      <Text color="whiteText" fontSize="bold" style={{ marginLeft: 10 }}>
        {label}
      </Text>
  );
};

export default Tab;