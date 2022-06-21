import '../../styles/Home.css'
import LeftHome from './LeftHome';
import WritePost from './WritePost'
import Content from './Content';
import RightHome from './RightHome'

function Home() {
  return (
    <div className="home">
      <LeftHome />
      <div className='home_content'>
        <WritePost />
        <Content />
      </div>
      <RightHome />
    </div>
  );
}

export default Home;
