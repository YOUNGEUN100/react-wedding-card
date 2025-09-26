import { TypeAnimation } from 'react-type-animation';

const FrontCover = () => {

  return (
    <div className="front-box">
      <TypeAnimation
            sequence={[
              'Welcome',
              1000, // Waits 2s
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={30} 
            // repeat={Infinity}
            style={{ whiteSpace: 'pre-line',fontSize: '4em', display: 'inline-block'}}
      />
    <TypeAnimation
            sequence={[
              1000,
              'To our wedding',
              1000, // Waits 2s
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={30} 
            // repeat={Infinity}
            style={{ whiteSpace: 'pre-line',fontSize: '4em', display: 'inline-block'}}
      />
    </div>
  );
};

export default FrontCover;