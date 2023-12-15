import classes from './logo.modules.css';
import Header from '@/components/Header';
import Body from '@/components/Body';

const Body = () => {
  return (
    <><Header />
      <Body>
        {children}
      </Body>
    </>

  )
}

export default Body;