import React, {createContext} from 'react';
import SideBar from '../../components/SideBar';
import Map from '../../containers/KakaoMapContainer';
import LoginModal from '../../components/LoginModal';
import { DataProvider } from '../../util/DataContext';

export const CenterIdContext = createContext({
  centerId: null,
  setCenterId: (id) => {},
});
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setCenterId = id => {
      this.setState(_ => ({
        centerId: id
      }));
    };
    this.state = {
      centerId: null,
      setCenterId: this.setCenterId,
    };
  }
  render() {
    return (
      <>
        <DataProvider>
          <CenterIdContext.Provider value={this.state}>
            <SideBar />
            {/* TODO: 환경변수에 키 설정 */}
            <Map />
          </CenterIdContext.Provider>
        </DataProvider>
        {/* <LoginModal isMainPage={true}/> */}
      </>
    );
  }
}
export default Home;

// function Home() {
//   const [centerId, setCenterId] = useState(null);
//   const setCenterPlaceId = setCenterId;
//   return (
    // <>
    //   <DataProvider>
    //     <CenterIdContext.Provider value={{centerId,setCenterPlaceId}}>
    //       <SideBar />
    //       {/* TODO: 환경변수에 키 설정 */}
    //       <Map />
    //     </CenterIdContext.Provider>
    //   </DataProvider>
    //   <LoginModal isMainPage={true}/>
    // </>
//   );
// }
// 
// export default Home;
