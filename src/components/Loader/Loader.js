import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{margin: 'auto',
    textAlign: 'center',}}>
       <ThreeDots
      height="50"
      width="80"
      radius="5"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    /> 
    </div>
    
    
  );
};