import { RotatingLines } from  'react-loader-spinner'
import { Spinner } from './Loader.styled';

const Loader = () => {
    return (
        <Spinner>
  <RotatingLines
     width="50" 
     strokeColor="#000000"
     strokeWidth="4"
     visible={true} 
      />
  </Spinner>
    )
}

export default Loader;